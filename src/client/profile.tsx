import React from "@rbxts/react";
import { Basic, Text } from "./easyobjects";
import { ListDrawer } from "./ListDrawer";
import { NotImplemented } from "./notImplementedInfo";

export function ProfileLevelProgressBar({progress = 1}: {progress?: number}) {
    return  <Basic Size={new UDim2(0, 600, 0, 20)} AutomaticSize={Enum.AutomaticSize.None} BackgroundTransparency={1} tags={["hasOutline"]}>
                <Basic Size={new UDim2(progress, 0, 1, 0)} tags={["progressFilling"]} BackgroundTransparency={0}/>
            </Basic>
}
export function ProfileCard() {
    return  <ListDrawer>
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
    return <Basic flexProps={{FillDirection: Enum.FillDirection.Horizontal, Tag: "paddingSmall"}} Size={new UDim2(0, 0, 1, 0)} AutomaticSize={Enum.AutomaticSize.X}>
        <Basic flexProps={{Tag: "paddingSmall", HorizontalFlex: Enum.UIFlexAlignment.Fill}} Size={new UDim2(0, 0, 1, 0)}>
            <ProfileCard/>
            <ListDrawer flexProps={{VerticalAlignment: Enum.VerticalAlignment.Center, HorizontalAlignment: Enum.HorizontalAlignment.Center}}>
                <uiflexitem FlexMode={"Fill"}/>
                <NotImplemented/>
            </ListDrawer>
        </Basic>
        <Basic>
            HELLO
        </Basic>
    </Basic>
}