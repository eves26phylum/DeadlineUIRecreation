import React, { StrictMode, useEffect, useState, useRef } from "@rbxts/react";
import { Basic, Button } from "./easyobjects";
import { useAbsoluteAxis } from "./hooks/useAbsoluteAxis";
import { QuestTable } from "./questTable";
import { useTimeStamp } from "./hooks/useTimeStamp";
import { toHMS } from "shared/formatTime";
import { useAppContext } from "./hooks/useAppContext";

function TimeStamp({endDate = 0}) {
    const [timeSet, timeSetState] = useState<number>(os.time());
    const timeEnd = useRef(os.time() + endDate);
    const timeStamp = useTimeStamp(timeEnd.current, timeSetState);
    return <Basic textProps={{Tag:"textTitleLargerSubheading"}}>{toHMS(timeSet)}</Basic>
}
export default function() {
    const [axis_content, refFunction] = useAbsoluteAxis("X");
    const appContext = useAppContext();
    return <Basic>
        <Basic Size={new UDim2(1, 0, 0, 0)} dog={refFunction} tags={["questsTitle"]} flexProps={{FillDirection: Enum.FillDirection.Horizontal}}>
            <Basic textProps={{Tag:"textTitleLargerSubheading"}}>DAILY QUESTS</Basic>
            <Basic flexProps={{FillDirection: Enum.FillDirection.Horizontal, HorizontalAlignment: Enum.HorizontalAlignment.Right}}>
                <uiflexitem FlexMode={"Fill"}/>
                <TimeStamp endDate={appContext.states.questsFinishTimeSeconds}></TimeStamp>
            </Basic>
        </Basic>
        {/* Bob and Alice are inside a house. Bob is strong, and he can change the size of the house. Bob is really fat though, and Alice feels bad. It also is a bad look in photos, on why the couple are mismatched sizes in width. So, Alice decides to get fat herself. She can't change the size of the house, and if she gets too big, the walls of the house will crack again and the house explodes. Bob already cracked the house's walls once, so Alice wouldn't want to do it again. Alice uses useAbsoluteAxis, a service she found inside hooks. Alice uses this service as a guide on how big she can get. Alice tells Bob to measure himself, and Alice would size herself to this size that the experts at useAbsoluteAxis would tell her. */}
        <Basic Size={new UDim2(0, axis_content, 0, 0)} BackgroundColor3={Color3.fromRGB(255, 0, 0)} BackgroundTransparency={0}>
            <QuestTable tableOfQuests={[
                {
                    name: "Capture 5 points",
                    progress: {
                        now: 500,
                        finish: 500
                    },
                    newTaiwanDollarsAmount: 500,
                    experienceAmount: 500
                }
            ]}/>
        </Basic>
    </Basic>; // you can hook quest table to an external system like the server
}