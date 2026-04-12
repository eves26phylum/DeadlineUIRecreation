import React, { useMemo, useState } from "@rbxts/react";
import { BasicScroll, Basic, Button } from "./easyobjects";
import { UiContextType } from "client/types/deadlineClientTypes";
import { useUiContext } from "./hooks/useAppContext";
import { useAbsoluteAxis } from "./hooks/useAbsoluteAxis";

export type ProgressObject = {
    now: number,
    finish: number
}
export interface TableOfQuestsType {
    completed?: boolean,
    name: string,
    progress: ProgressObject,
    experienceAmount: number,
    newTaiwanDollarsAmount: number
}
export function CurrencyBubbleCardObject({currency, amount, styleIndicator, completed}: {currency: string, amount: number, styleIndicator: string, completed?: boolean}) {
    return <frame Tag={`currencyBubbleCardObject ${styleIndicator}`} Size={new UDim2(0, 48, 0, 48)} AutomaticSize={Enum.AutomaticSize.XY} BackgroundTransparency={0}>
        <uigradient Rotation={90} Color={new ColorSequence([new ColorSequenceKeypoint(0, Color3.fromRGB(30, 30, 30)),new ColorSequenceKeypoint(1, Color3.fromRGB(15, 15, 15))])}/>
        <uistroke Tag={`stroke ${styleIndicator}`}><uigradient Rotation={90} Color={new ColorSequence([new ColorSequenceKeypoint(0, Color3.fromRGB(128, 128, 128)),new ColorSequenceKeypoint(1, Color3.fromRGB(64, 64, 64))])}/></uistroke>
        <frame Size={new UDim2(1, 0, 1, 0)} Tag={`paddingStandard ${styleIndicator}`} BackgroundTransparency={1} AutomaticSize={Enum.AutomaticSize.XY}><textlabel Tag={`textStandard ${styleIndicator} currencyBubbleLargeText`} AutomaticSize={Enum.AutomaticSize.XY} BackgroundTransparency={1} Position={new UDim2(0.5, 0, 0.5, 0)} AnchorPoint={new Vector2(0.5, 0.5)} Text={tostring(currency)}/></frame>
        <textlabel Tag={`textMini ${styleIndicator} currencyBubbleMiniText paddingTiny`} BackgroundTransparency={1} AutomaticSize={Enum.AutomaticSize.XY} Position={new UDim2(0.5, 0, 1, 0)} AnchorPoint={new Vector2(0.5, 1)} Text={tostring(amount)}/>
    </frame>;
}
export function QuestProgressBar({progress, completedTag, ...props}: {progress: ProgressObject, completedTag: string} & Partial<React.InstanceProps<Frame>>) {
    const calculatedProgress = useMemo(() => {
        return math.min(1, progress.now / progress.finish);
    }, [progress.now, progress.finish]);
    const UiContext: UiContextType = useUiContext();
    const progressBarHeight: number = UiContext.themes["quests.progressBarWidth"];
    return <Basic BackgroundTransparency={0} tags={["QuestProgressBar", completedTag]} flexProps={{FillDirection: Enum.FillDirection.Horizontal}} {...props}>
        <frame BorderSizePixel={0} Tag={`QuestProgressBarContent`} Size={new UDim2(calculatedProgress, 0, 0, progressBarHeight)}/>
    </Basic>
}
export function Quest({tableQuest, index, callback = () => {}}: {tableQuest: TableOfQuestsType, callback: (index: number) => void, index: number}) {
    const [axis_content, refFunction] = useAbsoluteAxis("X");
    const completedTag = tableQuest.completed ? "completed" : "";
    const notCompletedTag = tableQuest.completed ? "" : "completed";
    return <Basic BackgroundTransparency={0} tags={["tableOfQuest", completedTag]} Size={new UDim2(1, 0, 0, 0)} flexProps={{FillDirection: Enum.FillDirection.Horizontal, ItemLineAlignment: Enum.ItemLineAlignment.Center}}>
        <uigradient Color={new ColorSequence([new ColorSequenceKeypoint(0, tableQuest.completed ? Color3.fromRGB(70, 70, 70) : Color3.fromRGB(255, 255, 255)),new ColorSequenceKeypoint(1, Color3.fromRGB(0, 0, 0))])}/>
        <Basic tags={["bodyContainer", "actionContainer"]} dog={refFunction}>
            <uiflexitem FlexMode={"Fill"}/>
            <Basic tags={["textGroup"]} Size={new UDim2(1, 0, 0, 0)} flexProps={{FillDirection: Enum.FillDirection.Horizontal}}>
                <textlabel TextWrapped={true} TextXAlignment={Enum.TextXAlignment.Left} TextYAlignment={Enum.TextYAlignment.Top} Tag={`textBody textOnDark ${completedTag}`} BackgroundTransparency={1} AutomaticSize={Enum.AutomaticSize.XY} Text={tableQuest.name}>
                    <uiflexitem FlexMode={"Fill"}/>
                </textlabel>
                <Basic Size={new UDim2(0, 0, 0, 0)} flexProps={{FillDirection: Enum.FillDirection.Horizontal}}>
                    <textlabel TextWrapped={true} TextXAlignment={Enum.TextXAlignment.Right} TextYAlignment={Enum.TextYAlignment.Top} Tag={`textBody textOnDark ${completedTag}`} BackgroundTransparency={1} AutomaticSize={Enum.AutomaticSize.XY} Text={`${tableQuest.progress.now}`}/>
                    <textlabel TextWrapped={true} TextXAlignment={Enum.TextXAlignment.Right} TextYAlignment={Enum.TextYAlignment.Top} Tag={`textBody textOnDemotivationCycle ${completedTag}`} BackgroundTransparency={1} AutomaticSize={Enum.AutomaticSize.XY} Text={` / `}/>
                    <textlabel TextWrapped={true} TextXAlignment={Enum.TextXAlignment.Right} TextYAlignment={Enum.TextYAlignment.Top} Tag={`textBody textOnDark ${completedTag}`} BackgroundTransparency={1} AutomaticSize={Enum.AutomaticSize.XY} Text={`${tableQuest.progress.finish}`}/>
                </Basic>
            </Basic>
            {/* <textlabel AutomaticSize={Enum.AutomaticSize.XY} Text="I AM A FUCKING PROGRESS BAR"/> */}
            <QuestProgressBar completedTag={completedTag} Size={new UDim2(0, axis_content, 0, 0)} AutomaticSize={Enum.AutomaticSize.Y} progress={tableQuest.progress}/>
        </Basic>
        <Basic tags={["actionContainer"]} flexProps={{FillDirection: Enum.FillDirection.Horizontal}}>
            <CurrencyBubbleCardObject styleIndicator="XP" currency="XP" amount={tableQuest.experienceAmount}/>
            <CurrencyBubbleCardObject styleIndicator="NewTaiwanDollars" currency="$" amount={tableQuest.newTaiwanDollarsAmount}/>
            <Button tags={["rerollButton"]} textProps={{Tag: "textStandard textOnDemotivationCycle"}} Event={{MouseButton1Click: () => {callback(index)}}}>3 MORE</Button>
        </Basic>
        </Basic>;
}
export function QuestTable({tableOfQuests, callback}: {tableOfQuests?: TableOfQuestsType[], callback: (index: number) => void}) {
    return <Basic Size={new UDim2(1, 0, 0, 0)} AutomaticSize={Enum.AutomaticSize.Y}>
        {tableOfQuests ? tableOfQuests.map((value: TableOfQuestsType, index: number, array: readonly TableOfQuestsType[]) => {
            return <Quest tableQuest={value} callback={callback} index={index}/>;
        }) : "Table is quite empty. Nothing exists here."}
    </Basic>
}