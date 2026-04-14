import React, { useState } from "@rbxts/react";
import { Basic, BasicProps } from "./easyobjects";
import { AlternatingList } from "./alternatingList";
import { ListDrawer } from "./ListDrawer";

export function SideBySideList() {
    return <Basic flexProps={{FillDirection: Enum.FillDirection.Horizontal}} tags={["sideBySideList"]}>
        <ListDrawer>
            Apple Banana
        </ListDrawer>
        <ListDrawer Size={new UDim2(0, 980, 0, 0)}>
        <AlternatingList arrayOfChildren={[
            <Basic>Hello!</Basic>,
            <Basic>Hello!</Basic>,
            <Basic>Hello!</Basic>,
            <Basic>Hello!</Basic>
        ]}/>
        </ListDrawer>
    </Basic>;
}