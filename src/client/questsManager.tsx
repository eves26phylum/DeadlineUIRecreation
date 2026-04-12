import React, { StrictMode, useEffect, useState, useRef } from "@rbxts/react";
import { Basic, Button } from "./easyobjects";
import { useAbsoluteAxis } from "./hooks/useAbsoluteAxis";
import { QuestTable } from "./questTable";
import { useTimeStamp } from "./hooks/useTimeStamp";
import { toHMS } from "shared/formatTime";
import { useAppContext } from "./hooks/useAppContext";
import { Object } from "@rbxts/luau-polyfill";

function TimeStamp({endDate = 0}) {
    const [timeSet, timeSetState] = useState<number>(os.time());
    const timeEnd = useRef(os.time() + endDate);
    const timeStamp = useTimeStamp(timeEnd.current, timeSetState);
    return <Basic textProps={{Tag:"textTitleLargerSubheading textOnDemotivationCycle"}}>{toHMS(timeSet)}</Basic>
}
export default function() {
    const [axis_content, refFunction] = useAbsoluteAxis("X");
    const appContext = useAppContext();
    const questTableState = appContext.states.questTableState;
    const setQuestTableState = appContext.states.setQuestTableState;
    return <Basic AutomaticSize={Enum.AutomaticSize.Y} Size={new UDim2(0, 700, 0, 0)}>
        <Basic BackgroundTransparency={0} Size={new UDim2(1, 0, 0, 0)} dog={refFunction} tags={["questsTitle"]} flexProps={{FillDirection: Enum.FillDirection.Horizontal, ItemLineAlignment: Enum. ItemLineAlignment.Center}}>
            <uisizeconstraint MinSize={new Vector2(700, 0)}/>
            <Basic textProps={{Tag: "textTitleLargerSubheading textOnDark"}}>DAILY QUESTS</Basic>
            <Basic flexProps={{Tag: "paddingStandard", FillDirection: Enum.FillDirection.Horizontal, HorizontalAlignment: Enum.HorizontalAlignment.Right, ItemLineAlignment: Enum.ItemLineAlignment.Center}}>
                <uiflexitem FlexMode={"Fill"}/>
                <TimeStamp endDate={appContext.states.questsFinishTimeSeconds}/>
                <Button tags={["rerollButton", "rerollButtonMain", "miniUICorner"]} flexProps={{FillDirection: Enum.FillDirection.Horizontal, ItemLineAlignment: Enum.ItemLineAlignment.Center}}>
                    <imagelabel Tag={"icon"} BackgroundTransparency={1} Image={"rbxassetid://7072721134"}/>
                    <textlabel AutomaticSize={Enum.AutomaticSize.XY} Tag={"textStandard textOnDark"} BackgroundTransparency={1} BorderSizePixel={0} Text={"REROLL"}/>
                </Button>
            </Basic>
        </Basic>
        {/* Bob and Alice are inside a house. Bob is strong, and he can change the size of the house. Bob is really fat though, and Alice feels bad. It also is a bad look in photos, on why the couple are mismatched sizes in width. So, Alice decides to get fat herself. She can't change the size of the house, and if she gets too big, the walls of the house will crack again and the house explodes. Bob already cracked the house's walls once, so Alice wouldn't want to do it again. Alice uses useAbsoluteAxis, a service she found inside hooks. Alice uses this service as a guide on how big she can get. Alice tells Bob to measure himself, and Alice would size herself to this size that the experts at useAbsoluteAxis would tell her. */}
        <Basic Size={new UDim2(0, axis_content, 0, 0)} BackgroundColor3={Color3.fromRGB(255, 0, 0)} BackgroundTransparency={0}>
            <QuestTable tableOfQuests={questTableState} callback={(index: number) => {
                const cloneTableState = [...questTableState];
                cloneTableState[index].completed = true;
                setQuestTableState(cloneTableState);
            }}/>
        </Basic>
    </Basic>; // you can hook quest table to an external system like the server
}