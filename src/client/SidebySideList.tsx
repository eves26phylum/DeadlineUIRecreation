import React, { useState } from "@rbxts/react";
import { Basic } from "./easyobjects";
import { AlternatingList } from "./alternatingList";

export function ListDrawer({children}: {children?: React.ReactNode}) {
    return <Basic tags={["veryGenericBox", "hasOutline"]} BackgroundTransparency={0} Size={new UDim2(0, 240, 0, 0)}>
        {children}
    </Basic>;
}
export function SideBySideList() {
    return <Basic flexProps={{FillDirection: Enum.FillDirection.Horizontal}}>
        <ListDrawer></ListDrawer>
        <AlternatingList arrayOfChildren={[
            <Basic>Hello!</Basic>,
            <Basic>Hello!</Basic>,
            <Basic>Hello!</Basic>,
            <Basic>Hello!</Basic>
        ]}/>
    </Basic>;
}