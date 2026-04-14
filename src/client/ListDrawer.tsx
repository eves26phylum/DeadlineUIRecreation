import { Basic, BasicProps } from "./easyobjects";
import React from "@rbxts/react";
export function ListDrawer({children, ...props}: {children?: React.ReactNode} & BasicProps) {
    return <Basic tags={["veryGenericBox", "hasOutline"]} BackgroundTransparency={0} Size={new UDim2(0, 240, 0, 0)} {...props}>
        {children}
    </Basic>;
}