import React from "@rbxts/react";
import { Basic, BasicProps } from "./easyobjects";

export function NotImplemented({children, ...props}: {children: React.ReactNode} & BasicProps) {
    return <Basic tags={["veryGenericBox", "hasOutline", "paddingStandard"]} textProps={{Tag: "textOnDemotivationCycle textBody"}} BackgroundTransparency={0} {...props}>{children || "Not implemented yet."}</Basic>
}