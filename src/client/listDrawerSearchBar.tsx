import React, { useRef, useState } from "@rbxts/react";
import { Basic } from "./easyobjects";
import motion from "@rbxts/react-motion";

export interface searchBarProps {
    onChangeCallback: (query: string) => void,
    axis_content?: {
        x: number,
        y: number
    }
}
export function ListDrawerSearchBar({onChangeCallback, axis_content = {x: 0, y: 0}, ...props}: searchBarProps & React.InstanceProps<TextBox>) {
    const [thisText, setThisText] = useState<string>("");
    return <Basic Size={new UDim2(0, 140, 0, 0)}  tags={["veryGenericBox", "hasOutline", "paddingStandard"]} flexProps={{FillDirection: Enum.FillDirection.Horizontal, VerticalAlignment: Enum.VerticalAlignment.Center}}>
        <motion.textbox ClearTextOnFocus={false} Text={thisText} BackgroundTransparency={1} TextXAlignment={Enum.TextXAlignment.Left} Tag="textStandard textOnDark"  PlaceholderText={"SEARCH"} Size={new UDim2(0, axis_content.x, 0, axis_content.y)} AutomaticSize={Enum.AutomaticSize.XY} {...props} Change={{
            Text: (textBox) => {
                setThisText(textBox.Text);
                onChangeCallback(textBox.Text);
            }
        }}>
        <uiflexitem FlexMode={"Fill"}/>
        </motion.textbox>
        {(thisText !== "") ? <imagebutton Size={new UDim2(0, 24, 0, 24)} BackgroundTransparency={1} Image={"rbxassetid://7072725342"} Event={{MouseButton1Click: () => {setThisText("");}}}/> : <></>}
    </Basic>
}