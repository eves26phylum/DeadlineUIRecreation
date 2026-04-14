import React, { useState } from "@rbxts/react";
import { Basic, BasicProps } from "./easyobjects";
import { AlternatingList } from "./alternatingList";
import { ListDrawer } from "./ListDrawer";

export function SideBySideList() {
    return <Basic Size={new UDim2(0, 0, 1, 0)} flexProps={{FillDirection: Enum.FillDirection.Horizontal}} tags={["sideBySideList"]}>
        <ListDrawer>
            Apple Banana
        </ListDrawer>
        <ListDrawer Size={new UDim2(0, 980, 1, 0)}>
        <AlternatingList Size={new UDim2(1, 0, 0, 0)} arrayOfChildren={[
            <Basic>Hello!</Basic>,
            <Basic>Hello!</Basic>,
            <Basic>Hello!</Basic>,
            <Basic>Hello!</Basic>
        ]}/>
        </ListDrawer>
    </Basic>;
}