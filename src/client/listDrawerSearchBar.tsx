import React from "@rbxts/react";
import { Basic } from "./easyobjects";

export interface searchBarProps {
    onChangeCallback: (query: string) => void,
    axis_content?: {
        x: number,
        y: number
    }
}
export function ListDrawerSearchBar({onChangeCallback, axis_content = {x: 0, y: 0}, ...props}: searchBarProps & React.InstanceProps<TextBox>) {
    return <textbox Size={new UDim2(0, axis_content.x, 0, axis_content.y)} AutomaticSize={Enum.AutomaticSize.XY} {...props}/>
}