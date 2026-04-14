import React, { useState } from "@rbxts/react";
import { Basic, BasicProps, BasicScroll, Text } from "./easyobjects";
import { AlternatingList } from "./alternatingList";
import { ListDrawer } from "./ListDrawer";
import { productionServerData } from "./types/gameData";
import { toMS } from "shared/formatTime";
import { BaseButton, IconBaseButton } from "./Button";

export function ServersItem({data, ...props}: {data: productionServerData} & BasicProps) {
    return <>
        <Basic flexProps={{Tag: "paddingStandard", FillDirection: Enum.FillDirection.Horizontal, ItemLineAlignment: Enum.ItemLineAlignment.Center}}>
            <imagelabel Image={data.map.mapImage} Size={new UDim2(0, 50, 0, 50)}/>
            <Text Tag={"textOnDark textBody"} text={data.map.mapName}/>
            <uiflexitem FlexMode={"Fill"}/>
        </Basic>
        <Text Tag={"textOnDark textBody"} text={data.gamemode.gamemodeName}><uiflexitem FlexMode={"Fill"}/></Text>
        <Text Tag={"textOnDark textBody"} text={toMS(data.gamemode.time_left)}><uiflexitem FlexMode={"Fill"}/></Text>
        <Basic flexProps={{FillDirection: Enum.FillDirection.Horizontal}}>
            <uiflexitem FlexMode={"Fill"}/>
            <Text Tag={"textOnDark textBody"} text={`${data.serverInfo.playerCount}`}/>
            <textlabel TextWrapped={true} TextXAlignment={Enum.TextXAlignment.Right} TextYAlignment={Enum.TextYAlignment.Top} Tag={`textBody textOnDemotivationCycle`} BackgroundTransparency={1} AutomaticSize={Enum.AutomaticSize.XY} Text={` / `}/>
            <Text Tag={"textOnDark textBody"} text={`${data.serverInfo.maxPlayerCount}`}/>
        </Basic>
        <IconBaseButton tags={["Ghost"]} textTags={["textStandard", "textOnDark"]}>JOIN</IconBaseButton>
    </>
}
export function ServersListTableKeys() {
    return <Basic><Text text="Hi"/></Basic>;
}
                // {
                //     map: {
                //         mapImage: "rbxassetid://127270861",
                //         mapName: "Afghanistan",
                //         map_code: "afghanistan"
                //     },
                //     gamemode: {
                //         gamemode_code: "intimidation",
                //         gamemodeName: "Intimidation",
                //         time_left: 630720000
                //     },
                //     serverInfo: {
                //         playerCount: 175382,
                //         location: "Nothing important"
                //     }
                // }
export function SideBySideList({serverData}: {serverData: productionServerData[]}) {
    return <Basic Size={new UDim2(0, 0, 1, 0)} flexProps={{FillDirection: Enum.FillDirection.Horizontal}} tags={["sideBySideList"]}>
        <ListDrawer>
            Apple Banana
        </ListDrawer>
        <ListDrawer Size={new UDim2(0, 980, 1, 0)}>
            {/* UITableLayout was malfunctioning so I just decided to use a classic UILayout row-table even if it means the lines aren't consistent */}
            <BasicScroll scrollProps={{Size: new UDim2(1, 0, 1, 0)}} Size={new UDim2(1, 0, 1, 0)} BackgroundTransparency={1}>
                <ServersListTableKeys/>
                <AlternatingList flexProps={{FillDirection: Enum.FillDirection.Horizontal, ItemLineAlignment: Enum.ItemLineAlignment.Center}} Size={new UDim2(1, 0, 0, 0)} arrayOfChildren={
                    serverData.map((value: productionServerData, index: number, array: readonly productionServerData[]) => {
                        return <ServersItem data={value}/>
                    })
                }/>
            </BasicScroll>
        </ListDrawer>
    </Basic>;
}