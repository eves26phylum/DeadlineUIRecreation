import React from "@rbxts/react";
import { Basic, Text } from "./easyobjects";
import { ListDrawer } from "./ListDrawer";

export function ProfileLevelProgressBar({progress = 1}: {progress?: number}) {
    return  <Basic Size={new UDim2(0, 600, 0, 20)} AutomaticSize={Enum.AutomaticSize.None} BackgroundTransparency={1} tags={["hasOutline"]}>
                <Basic Size={new UDim2(progress, 0, 1, 0)} tags={["progressFilling"]} BackgroundTransparency={0}/>
            </Basic>
}
export function ProfileCard() {
    return  <ListDrawer flexProps={{HorizontalFlex: Enum.UIFlexAlignment.Fill}}>
                <Basic tags={["paddingStandard"]}>
                    <Text Tag={"textTitleLargerSubheading textOnDark"} text="FLANKER2000Y2K'S PROFILE"/>
                </Basic>
                <Basic Size={new UDim2(0, 0, 0, 1)} tags={["hasOutline"]} AutomaticSize={Enum.AutomaticSize.None}/>
                <Basic tags={["paddingStandard"]} flexProps={{Tag: "paddingStandard"}}>
                    <imagelabel Size={new UDim2(0, 100, 0, 100)}/>
                    <ProfileLevelProgressBar progress={0.5}/>
                </Basic>
            </ListDrawer>
}
export function PlayerUIProfile() {
    return <Basic flexProps={{FillDirection: Enum.FillDirection.Horizontal, VerticalFlex: Enum.UIFlexAlignment.Fill}} Size={new UDim2(1, 0, 1, 0)}>
        <Basic flexProps={{Tag: "paddingSmall"}}>
            <ProfileCard/>
            <ListDrawer>
                <uiflexitem FlexMode={"Fill"}/>
            </ListDrawer>
        </Basic>
        <Basic>

        </Basic>
    </Basic>
}