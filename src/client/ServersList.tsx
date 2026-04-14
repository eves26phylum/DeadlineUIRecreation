import React, { useState } from "@rbxts/react";
import { Basic, BasicProps, BasicScroll } from "./easyobjects";
import { AlternatingList } from "./alternatingList";
import { ListDrawer } from "./ListDrawer";
import { productionServerData } from "./types/gameData";

export function ServersItem({data, ...props}: {data: productionServerData} & BasicProps) {
    return <Basic {...props}>
        
    </Basic>
}
export function SideBySideList({serverData}: {serverData: productionServerData[]}) {
    return <Basic Size={new UDim2(0, 0, 1, 0)} flexProps={{FillDirection: Enum.FillDirection.Horizontal}} tags={["sideBySideList"]}>
        <ListDrawer>
            Apple Banana
        </ListDrawer>
        <ListDrawer Size={new UDim2(0, 980, 1, 0)}>
            <BasicScroll>
                <AlternatingList Size={new UDim2(1, 0, 0, 0)} arrayOfChildren={
                    serverData.map((value: productionServerData, index: number, array: readonly productionServerData[]) => {
                        return <ServersItem data={value}/>
                    })
                }/>
            </BasicScroll>
        </ListDrawer>
    </Basic>;
}