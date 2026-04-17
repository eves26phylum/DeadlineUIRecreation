import React, { useState } from "@rbxts/react";
import { Basic, BasicScroll, Button, Text } from "./easyobjects";
import { ListDrawer, ListDrawerFeatureless } from "./ListDrawer";
import { gameLoadoutData } from "./types/deadlineClientTypes";
import { NotImplemented } from "./notImplementedInfo";
import { HttpService } from "@rbxts/services";
import { BaseButton, IconBaseButton } from "./Button";

export interface LoadoutBullshit {
    name: string,
    loadoutInterfaceData: gameLoadoutData, // to be implemented
    guiState: LoadoutGuiState
}
export interface LoadoutGuiState {
    isSelected: boolean,
    onRename: (name: string) => void,
    onMove: (pos: -1 | 1) => void,
    onDelete: () => void,
    onSelect: () => void,
    onClone: () => void
}
export function LoadoutControlsButton({callback, textTag, iconGoesHere}: {callback: () => void, textTag: string, iconGoesHere: string}) {
    return <Button BackgroundTransparency={1} flexProps={{HorizontalAlignment: Enum.HorizontalAlignment.Center}} frameProps={{Size: new UDim2(1, 0, 1, 0)}} Event={{MouseButton1Click: callback}}><imagelabel Size={new UDim2(0, 16, 0, 16)} BackgroundTransparency={1} Tag={`icon ${textTag} paddingMini`} Image={iconGoesHere}/></Button>
}
export function LoadoutControls({LoadoutGuiState, onEdit}: {LoadoutGuiState: LoadoutGuiState, onEdit: () => void}) {
    return <Basic flexProps={{FillDirection: Enum.FillDirection.Horizontal, HorizontalAlignment: Enum.HorizontalAlignment.Center, HorizontalFlex: Enum.UIFlexAlignment.Fill}}>
                <LoadoutControlsButton callback={() => {LoadoutGuiState.onMove(-1)}} textTag={"textOnLight"} iconGoesHere="rbxassetid://7072983757"/>
                <LoadoutControlsButton callback={() => {LoadoutGuiState.onMove(1)}} textTag={"textOnLight"} iconGoesHere="rbxassetid://7072982593"/>
                <LoadoutControlsButton callback={onEdit} textTag={"textOnLight"} iconGoesHere="rbxassetid://7072715962"/>   
                <LoadoutControlsButton callback={LoadoutGuiState.onClone} textTag={"textOnLight"} iconGoesHere="rbxassetid://7072707790"/>   
                <LoadoutControlsButton callback={LoadoutGuiState.onDelete} textTag={"textOnLight"} iconGoesHere="rbxassetid://7072725342"/>                     
            </Basic>
}
export function Loadout({myValue}: {myValue: LoadoutBullshit}) {
    const loadoutState = myValue.guiState;
    const [isEditing, setIsEditing] = useState(false);
    const [textBoxName, setTextBoxName] = useState(myValue.name);
    return <Button BackgroundTransparency={loadoutState?.isSelected? 0 : 1} tags={["paddingSmall", "loadoutCard", "hasOutline", "veryGenericBox"]} flexProps={{HorizontalFlex: Enum.UIFlexAlignment.Fill, Tag: "paddingSmall"}} frameProps={{Size: new UDim2(1, 0, 0, 0)}} Event={{MouseButton1Click: () => loadoutState.onSelect}}>
        <Basic flexProps={{FillDirection: Enum.FillDirection.Horizontal}}>
            {isEditing ? 
            <textbox Change={{Text: (textBox) => {
                setTextBoxName(textBox.Text);
            }}} BackgroundTransparency={1} AutomaticSize={Enum.AutomaticSize.XY} Tag={`textBody textOnLight`} ClearTextOnFocus={false} Text={myValue.name} PlaceholderText={"Loadout name"} TextWrapped={true} TextXAlignment={Enum.TextXAlignment.Left} TextYAlignment={Enum.TextYAlignment.Top}/>
            : <Text Tag={`textBody ${loadoutState.isSelected ? "textOnLight" : "textOnDemotivationCycle"}`} text={myValue.name} TextWrapped={true}/>}
        </Basic>
        { !isEditing ? (loadoutState.isSelected ? <LoadoutControls LoadoutGuiState={loadoutState} onEdit={() => {setIsEditing(true)}}/> : <></>) : 
        <Basic flexProps={{FillDirection: Enum.FillDirection.Horizontal, HorizontalAlignment: Enum.HorizontalAlignment.Center, HorizontalFlex: Enum.UIFlexAlignment.Fill}}>
            <LoadoutControlsButton callback={() => {setIsEditing(false); setTextBoxName(myValue.name)}} textTag={"textOnLight"} iconGoesHere="rbxassetid://7072725342"/>                
                <LoadoutControlsButton callback={() => {if (textBoxName === "") return; setIsEditing(false); loadoutState.onRename(textBoxName)}} textTag={`${textBoxName === "" ? "textOnDemotivationCycle" : "textOnLight"}`} iconGoesHere="rbxassetid://7072706620"/>                
            </Basic> }        
    </Button>
}
export function LoadoutEditor({listChildren, selectedIndex}: {listChildren: LoadoutBullshit[], selectedIndex: number}) {
    return <Basic Size={new UDim2(1, 0, 1, 0)} tags={["paddingStandard"]} flexProps={{FillDirection: Enum.FillDirection.Horizontal, Tag: "paddingStandard", HorizontalAlignment: Enum.HorizontalAlignment.Center, VerticalAlignment: Enum.VerticalAlignment.Center}}>
        <ListDrawer flexProps={{HorizontalFlex: Enum.UIFlexAlignment.Fill}} AutomaticSize={Enum.AutomaticSize.None} Size={new UDim2(0, 240, 1, 0)}>
        <BasicScroll flexProps={{HorizontalFlex: Enum.UIFlexAlignment.Fill}} Size={new UDim2(1, 0, 0, 0)} scrollProps={{Size: new UDim2(1, 0, 1, 0), AutomaticSize: Enum.AutomaticSize.None}}>
        {[...listChildren.map(
            (value: LoadoutBullshit, index: number, array: readonly LoadoutBullshit[]) => {
                value.guiState.onMove = (pos: number) => {

                }
                return <Loadout myValue={value}/>
            }
        ), <IconBaseButton image={"rbxassetid://7072720870"}>NEW LOADOUT</IconBaseButton>]}
        </BasicScroll>
    </ListDrawer>
        <NotImplemented>{HttpService.JSONEncode(listChildren[selectedIndex])}</NotImplemented>
    </Basic>
}
