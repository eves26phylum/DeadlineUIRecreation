// note: Demo, then servers joining afghanistan and maybe real life war footage
import React, { useState } from "@rbxts/react";
import { Basic, BasicProps, BasicScroll, Text } from "./easyobjects";
import { AlternatingList } from "./alternatingList";
import { ListDrawer } from "./ListDrawer";
import { productionServerData } from "./types/gameData";
import { Players } from "@rbxts/services";
import { toMS } from "shared/formatTime";
import { BaseButton, IconBaseButton } from "./Button";

const LocalPlayer = Players.LocalPlayer;

export function ServersItem({data, ...props}: {data: productionServerData} & BasicProps) {
    return <>
        <Basic flexProps={{Tag: "paddingStandard", FillDirection: Enum.FillDirection.Horizontal, ItemLineAlignment: Enum.ItemLineAlignment.Center}}>
            <imagelabel Image={data.map.mapImage} Size={new UDim2(0, 50, 0, 50)}/>
            <Text Tag={"textOnDark textBody"} text={data.map.mapName}/>
            <uiflexitem FlexMode={"Fill"}/>
        </Basic>
        <Text Tag={"textOnDark textBody"} text={data.gamemode.gamemodeName}><uiflexitem FlexMode={"Fill"}/></Text>
        <Text Tag={"textOnDark textBody"} text={toMS(data.gamemode.time_left)}><uiflexitem FlexMode={"Fill"}/></Text>
        <Text Tag={"textOnDark textBody"} text={data.serverInfo.location}><uiflexitem FlexMode={"Fill"}/></Text>
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
    return <Basic tags={["paddingStandard", "veryGenericBox", "hasOutline"]} Size={new UDim2(1, 0, 0, 0)} AutomaticSize={Enum.AutomaticSize.Y} flexProps={{FillDirection: Enum.FillDirection.Horizontal}}>
        <Text Tag={"textOnDemotivationCycle textBody"} text={"MAP"}><uiflexitem FlexMode={"Fill"}/></Text>
        <Text Tag={"textOnDemotivationCycle textBody"} text={"GAMEMODE"}><uiflexitem FlexMode={"Fill"}/></Text>
        <Text Tag={"textOnDemotivationCycle textBody"} text={"TIME LEFT"}><uiflexitem FlexMode={"Fill"}/></Text>
        <Text Tag={"textOnDemotivationCycle textBody"} text={"LOCATION"}><uiflexitem FlexMode={"Fill"}/></Text>
        <Text Tag={"textOnDemotivationCycle textBody"} text={"PLAYER COUNT"}><uiflexitem FlexMode={"Fill"}/></Text>
        <Text Tag={"textOnDemotivationCycle textBody"} text={"JOIN"}><uiflexitem FlexMode={"Fill"}/></Text>
        </Basic>;
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
export function ServersListCheckbox({}) {

}
export function SideBySideList({serverData}: {serverData: productionServerData[]}) {

    const mappedData = serverData.map((value: productionServerData, index: number, array: readonly productionServerData[]) => {
                        return <ServersItem data={value}/>
                    });
    return <Basic Size={new UDim2(0, 0, 1, 0)}  AutomaticSize={Enum.AutomaticSize.X} flexProps={{FillDirection: Enum.FillDirection.Horizontal}} tags={["sideBySideList"]}>
        <Basic>
        <ListDrawer tags={["sideList"]}>
            <AlternatingList flexProps={{FillDirection: Enum.FillDirection.Horizontal, ItemLineAlignment: Enum.ItemLineAlignment.Center}} Size={new UDim2(1, 0, 0, 0)} 
            arrayOfChildren={[
                serverData.map((value: productionServerData, index: number, array: readonly productionServerData[]) => {
                    return <></>
                })
            ]}/>
        </ListDrawer>
        </Basic>
        <ListDrawer Size={new UDim2(0, 980, 1, 0)} AutomaticSize={Enum.AutomaticSize.None}>
            {/* UITableLayout was malfunctioning so I just decided to use a classic UILayout row-table even if it means the lines aren't consistent */}
            <ServersListTableKeys/>
            <BasicScroll scrollProps={{Tag: "fuckROBLOX", Size: new UDim2(1, 0, 0, 0), AutomaticSize: Enum.AutomaticSize.None}} Size={new UDim2(1, 0, 1, 0)} BackgroundTransparency={1} AutomaticSize={Enum.AutomaticSize.XY}>
                <AlternatingList flexProps={{FillDirection: Enum.FillDirection.Horizontal, ItemLineAlignment: Enum.ItemLineAlignment.Center}} Size={new UDim2(1, 0, 0, 0)} arrayOfChildren={mappedData}/>
            </BasicScroll>
        </ListDrawer>
    </Basic>;
}