import React from "@rbxts/react";
import { Basic, BasicScroll, Button, Text } from "./easyobjects";
import { ListDrawer, ListDrawerFeatureless } from "./ListDrawer";
import { gameLoadoutData } from "./types/deadlineClientTypes";

export interface LoadoutBullshit {
    name: string,
    loadoutInterfaceData: gameLoadoutData, // to be implemented
    guiState: LoadoutGuiState
}
export interface LoadoutGuiState {
    isSelected: boolean
}
export function LoadoutControlsButton({callback, textTag, iconGoesHere}: {callback: () => void, textTag: string, iconGoesHere: string}) {
    return <Button BackgroundTransparency={1} flexProps={{HorizontalAlignment: Enum.HorizontalAlignment.Center}} frameProps={{Size: new UDim2(1, 0, 1, 0)}} Event={{MouseButton1Click: callback}}><imagelabel Size={new UDim2(0, 16, 0, 16)} BackgroundTransparency={1} Tag={`icon ${textTag} paddingMini`} Image={iconGoesHere}/></Button>
}
export function LoadoutControls() {
    return <Basic flexProps={{FillDirection: Enum.FillDirection.Horizontal, HorizontalAlignment: Enum.HorizontalAlignment.Center, HorizontalFlex: Enum.UIFlexAlignment.Fill}}>
                <LoadoutControlsButton callback={() => {print("Cells, cells. They're made of organelles.")}} textTag={"textOnLight"} iconGoesHere="rbxassetid://7072983757"/>
                <LoadoutControlsButton callback={() => {print("Try to pull a fast one, the cytoplasm gels.")}} textTag={"textOnLight"} iconGoesHere="rbxassetid://7072982593"/>
                <LoadoutControlsButton callback={() => {print("The nucleus takes over, controllin' everything.")}} textTag={"textOnLight"} iconGoesHere="rbxassetid://7072715962"/>   
                <LoadoutControlsButton callback={() => {print("The party don't stop 'til the membrane stops the scene.")}} textTag={"textOnLight"} iconGoesHere="rbxassetid://7072707790"/>   
                <LoadoutControlsButton callback={() => {print("Inside the vacuole, we can float around for hours. Running round with chloroplasts, lovin' sunlight showers.")}} textTag={"textOnLight"} iconGoesHere="rbxassetid://7072725342"/>                     
            </Basic>
}
export function Loadout({myValue}: {myValue: LoadoutBullshit}) {
    const loadoutState = myValue.guiState;
    return <Button BackgroundTransparency={loadoutState?.isSelected? 0 : 1} tags={["paddingSmall", "loadoutCard", "hasOutline", "veryGenericBox"]} flexProps={{HorizontalFlex: Enum.UIFlexAlignment.Fill, Tag: "paddingSmall"}} frameProps={{Size: new UDim2(1, 0, 0, 0)}}>
        <Basic flexProps={{FillDirection: Enum.FillDirection.Horizontal}}>
            {loadoutState.isSelected ? 
            <textbox BackgroundTransparency={1} AutomaticSize={Enum.AutomaticSize.XY} Tag={`textBody textOnLight`}ClearTextOnFocus={false} Text="" PlaceholderText={"can you please eat my meat :3"} TextWrapped={true} TextXAlignment={Enum.TextXAlignment.Left} TextYAlignment={Enum.TextYAlignment.Top}/>
            : <Text Tag={`textBody textOnDemotivationCycle`} text={myValue.name} TextWrapped={true}/>}
        </Basic>
        {loadoutState.isSelected ? <LoadoutControls/> : <></>}
    </Button>
}
export function LoadoutLoadoutBar({listChildren = []}: {listChildren?: LoadoutBullshit[]}) {
    return <ListDrawer flexProps={{HorizontalFlex: Enum.UIFlexAlignment.Fill}} AutomaticSize={Enum.AutomaticSize.None} Size={new UDim2(0, 240, 1, 0)}>
        <BasicScroll flexProps={{HorizontalFlex: Enum.UIFlexAlignment.Fill}} Size={new UDim2(1, 0, 0, 0)}>
        {listChildren.map(
            (value: LoadoutBullshit, index: number, array: readonly LoadoutBullshit[]) => {
                return <Loadout myValue={value}/>
            }
        )}
        </BasicScroll>
    </ListDrawer>
}
export function LoadoutEditor() {
    return <Basic Size={new UDim2(1, 0, 1, 0)}>
        <LoadoutLoadoutBar listChildren={[{name: "HI", loadoutInterfaceData: {}, guiState: {isSelected: true}}]}/>
    </Basic>
}
