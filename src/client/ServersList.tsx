import React, { useState } from "@rbxts/react";
import { Basic, BasicProps, BasicScroll, Text } from "./easyobjects";
import { AlternatingList } from "./alternatingList";
import { ListDrawer } from "./ListDrawer";
import { productionServerData } from "./types/gameData";

export function ServersItem({data, ...props}: {data: productionServerData} & BasicProps) {
    return <>
        <imagelabel Size={new UDim2(0, 50, 0, 50)}/>
        <imagelabel Size={new UDim2(0, 50, 0, 50)}/>
        <imagelabel Size={new UDim2(0, 50, 0, 50)}/>
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
            <scrollingframe Size={new UDim2(1, 0, 1, 0)} BackgroundTransparency={1} AutomaticCanvasSize={Enum.AutomaticSize.XY} CanvasSize={new UDim2(0, 0, 0, 0)}>
                <ServersListTableKeys/>
                <uitablelayout FillEmptySpaceColumns={true}/>
                <AlternatingList flexProps={{FillDirection: Enum.FillDirection.Horizontal}} Size={new UDim2(1, 0, 0, 0)} arrayOfChildren={
                    serverData.map((value: productionServerData, index: number, array: readonly productionServerData[]) => {
                        return <ServersItem data={value}/>
                    })
                }/>
            </scrollingframe>
        </ListDrawer>
    </Basic>;
}