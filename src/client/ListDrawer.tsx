import { Basic, BasicProps } from "./easyobjects";
import React from "@rbxts/react";
export function ListDrawer({children, tags = [], ...props}: {children?: React.ReactNode, tags?: string[]} & BasicProps) {
    return <Basic tags={["veryGenericBox", "hasOutline", "miniUICorner", ...tags]} BackgroundTransparency={0} Size={new UDim2(0, 240, 0, 0)} {...props}>
        {children}
    </Basic>;
}
export function ListDrawerFeatureless({children, tags = [], ...props}: {children?: React.ReactNode, tags?: string[]} & BasicProps) {
    return <Basic tags={["veryGenericBox", ...tags]} BackgroundTransparency={0} Size={new UDim2(0, 240, 0, 0)} {...props}>
        {children}
    </Basic>;
}