import React, { useMemo, useState } from "@rbxts/react";
import { BasicScroll, Basic } from "./easyobjects";
import { UiContextType } from "shared/types/deadlineClientTypes";
import { useUiContext } from "./hooks/useAppContext";
import { useAbsoluteAxis } from "./hooks/useAbsoluteAxis";

export type ProgressObject = {
    now: number,
    finish: number
}
export interface TableOfQuestsType {
    name: string,
    progress: ProgressObject,
    experienceAmount: number,
    newTaiwanDollarsAmount: number
}
export function QuestProgressBar({progress, ...props}: {progress: ProgressObject} & Partial<React.InstanceProps<Frame>>) {
    const calculatedProgress = useMemo(() => {
        return progress.now / progress.finish;
    }, [progress.now, progress.finish]);
    const UiContext: UiContextType = useUiContext();
    const progressBarHeight: number = UiContext.themes["quests.progressBarWidth"];

    return <Basic BackgroundTransparency={0} tags={["QuestProgressBar"]} flexProps={{FillDirection: Enum.FillDirection.Horizontal}} {...props}>
        <frame BorderSizePixel={0} Tag={"QuestProgressBarContent"} Size={new UDim2(calculatedProgress, 0, 0, progressBarHeight)}/>
    </Basic>
}
export function Quest({tableQuest}: {tableQuest: TableOfQuestsType}) {
    const [axis_content, refFunction] = useAbsoluteAxis("X");
    return <Basic tags={["tableOfQuest"]} Size={new UDim2(1, 0, 0, 0)} flexProps={{FillDirection: Enum.FillDirection.Horizontal, ItemLineAlignment: Enum.ItemLineAlignment.Center}}>
        <Basic tags={["bodyContainer", "actionContainer"]} dog={refFunction}>
            <uiflexitem FlexMode={"Fill"}/>
            <Basic tags={["textGroup"]} flexProps={{FillDirection: Enum.FillDirection.Horizontal}}>
                <textlabel TextWrapped={true} Tag={"textBody textOnDark"} BackgroundTransparency={1} AutomaticSize={Enum.AutomaticSize.XY} Text={tableQuest.name}>
                    <uiflexitem FlexMode={"Fill"}/>
                </textlabel>
                <textlabel TextWrapped={true} Tag={"textBody textOnDark"} BackgroundTransparency={1} AutomaticSize={Enum.AutomaticSize.XY} Text={`${tableQuest.progress.now}/${tableQuest.progress.finish}`}/>
            </Basic>
            {/* <textlabel AutomaticSize={Enum.AutomaticSize.XY} Text="I AM A FUCKING PROGRESS BAR"/> */}
            <QuestProgressBar Size={new UDim2(0, axis_content, 0, 0)} AutomaticSize={Enum.AutomaticSize.Y} progress={tableQuest.progress}/>
        </Basic>
        <Basic tags={["actionContainer"]} flexProps={{FillDirection: Enum.FillDirection.Horizontal}}>
            <Basic tags={["currencyBubbleCardObject"]} Size={new UDim2(0, 24, 0, 24)}>{tostring(tableQuest.newTaiwanDollarsAmount)}</Basic>
        </Basic>
        </Basic>;
}
export function QuestTable({tableOfQuests}: {tableOfQuests?: TableOfQuestsType[]}) {
    return <Basic Size={new UDim2(1, 0, 0, 0)} AutomaticSize={Enum.AutomaticSize.Y}>
        {tableOfQuests ? tableOfQuests.map((value: TableOfQuestsType, index: number, array: readonly TableOfQuestsType[]) => {
            return <Quest tableQuest={value}/>;
        }) : "Table is quite empty. Nothing exists here."}
    </Basic>
}