import React, { StrictMode, useEffect, useState, useRef } from "@rbxts/react";
import { Basic, Button } from "./easyobjects";
import { useAbsoluteAxis } from "./hooks/useAbsoluteAxis";
import { QuestTable } from "./questTable";

export default function() {
    const [axis_content, refFunction] = useAbsoluteAxis("X");
    return <Basic>
        <Basic dog={refFunction}>
            <Basic textProps={{Tag:"textTitleMain"}}>DAILY QUESTS</Basic>
        </Basic>
        {/* Bob and Alice are inside a house. Bob is strong, and he can change the size of the house. Bob is really fat though, and Alice feels bad. It also is a bad look in photos, on why the couple are mismatched sizes in width. So, Alice decides to get fat herself. She can't change the size of the house, and if she gets too big, the walls of the house will crack again and the house explodes. Bob already cracked the house's walls once, so Alice wouldn't want to do it again. Alice uses useAbsoluteAxis, a service she found inside hooks. Alice uses this service as a guide on how big she can get. Alice tells Bob to measure himself, and Alice would size herself to this size that the experts at useAbsoluteAxis would tell her. */}
        <Basic Size={new UDim2(0, axis_content, 0, 0)} BackgroundColor3={Color3.fromRGB(255, 0, 0)} BackgroundTransparency={0}>
            <QuestTable tableOfQuests={[
                {
                    name: "Breed 500 dogs",
                    progress: {
                        now: 3,
                        finish: 500
                    },
                    newTaiwanDollarsAmount: 500,
                    experienceAmount: 500
                }
            ]}/>
        </Basic>
    </Basic>; // you can hook quest table to an external system like the server
}