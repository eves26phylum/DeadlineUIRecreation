import React, { useState } from "@rbxts/react";
import { Basic, BasicScroll, Button, ButtonProps, Text } from "./easyobjects";
import { ListDrawer, ListDrawerFeatureless } from "./ListDrawer";
import { gameLoadoutData, LoadoutBullshit } from "./types/deadlineClientTypes";
import { NotImplemented } from "./notImplementedInfo";
import { HttpService } from "@rbxts/services";
import { BaseButton, IconBaseButton } from "./Button";
import { defaultLoadout } from "./vars/mainClientConfig";
import { Object } from "@rbxts/luau-polyfill";

export interface loadoutUIItemCallbacksBase {
    onRename: (name: string) => void,
    onMove: (pos: -1 | 1) => void,
    onDelete: () => void,
    onSelect: () => void,
    onClone: () => void
}
export interface loadoutUIItemCallbacks {
    onRename: (index: number, name: string) => void,
    onMove: (index: number, pos: -1 | 1) => void,
    onDelete: (index: number) => void,
    onSelect: (index: number) => void,
    onClone: (index: number) => void
}
export function LoadoutControlsButton({callback, textTag, iconGoesHere}: {callback: () => void, textTag: string, iconGoesHere: string}) {
    return <Button BackgroundTransparency={1} flexProps={{HorizontalAlignment: Enum.HorizontalAlignment.Center}} frameProps={{Size: new UDim2(1, 0, 1, 0)}} Event={{MouseButton1Click: callback}}><imagelabel Size={new UDim2(0, 16, 0, 16)} BackgroundTransparency={1} Tag={`icon ${textTag} paddingMini`} Image={iconGoesHere}/></Button>
}
export function LoadoutControls({callbacks, onEdit}: {callbacks: loadoutUIItemCallbacksBase, onEdit: () => void}) {
    return <Basic flexProps={{FillDirection: Enum.FillDirection.Horizontal, HorizontalAlignment: Enum.HorizontalAlignment.Center, HorizontalFlex: Enum.UIFlexAlignment.Fill}}>
                <LoadoutControlsButton callback={() => {callbacks.onMove(-1)}} textTag={"textOnLight"} iconGoesHere="rbxassetid://7072983757"/>
                <LoadoutControlsButton callback={() => {callbacks.onMove(1)}} textTag={"textOnLight"} iconGoesHere="rbxassetid://7072982593"/>
                <LoadoutControlsButton callback={onEdit} textTag={"textOnLight"} iconGoesHere="rbxassetid://7072715962"/>   
                <LoadoutControlsButton callback={callbacks.onClone} textTag={"textOnLight"} iconGoesHere="rbxassetid://7072707790"/>   
                <LoadoutControlsButton callback={callbacks.onDelete} textTag={"textOnLight"} iconGoesHere="rbxassetid://7072725342"/>                     
            </Basic>
}
export function Loadout({myValue, callbacks, isSelected, ...props}: {myValue: LoadoutBullshit, isSelected: boolean, callbacks: loadoutUIItemCallbacksBase} & ButtonProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [textBoxName, setTextBoxName] = useState(myValue.name);
    const themedTextTag = isSelected ? "textOnLight" : "textOnDemotivationCycle";
    return <Button BackgroundTransparency={isSelected? 0 : 1} tags={["paddingSmall", "loadoutCard", "hasOutline", "veryGenericBox"]} flexProps={{HorizontalFlex: Enum.UIFlexAlignment.Fill, Tag: "paddingSmall"}} frameProps={{Size: new UDim2(1, 0, 0, 0)}} Event={{MouseButton1Click: () => {callbacks.onSelect()}}} {...props}>
        <Basic flexProps={{FillDirection: Enum.FillDirection.Horizontal}}>
            {isEditing ? 
            <textbox Change={{Text: (textBox) => {
                setTextBoxName(textBox.Text);
            }}} BackgroundTransparency={1} AutomaticSize={Enum.AutomaticSize.XY} Tag={`textBody ${themedTextTag}`} ClearTextOnFocus={false} Text={myValue.name} PlaceholderText={"Loadout name"} TextWrapped={true} TextXAlignment={Enum.TextXAlignment.Left} TextYAlignment={Enum.TextYAlignment.Top}/>
            : <Text Tag={`textBody ${themedTextTag}`} text={myValue.name} TextWrapped={true}/>}
        </Basic>
        { !isEditing ? (isSelected ? <LoadoutControls callbacks={callbacks} onEdit={() => {setIsEditing(true)}}/> : <></>) : 
        <Basic flexProps={{FillDirection: Enum.FillDirection.Horizontal, HorizontalAlignment: Enum.HorizontalAlignment.Center, HorizontalFlex: Enum.UIFlexAlignment.Fill}}>
            <LoadoutControlsButton callback={() => {setIsEditing(false); setTextBoxName(myValue.name)}} textTag={themedTextTag} iconGoesHere="rbxassetid://7072725342"/>                
                <LoadoutControlsButton callback={() => {if (textBoxName === "") return; setIsEditing(false); callbacks.onRename(textBoxName)}} textTag={`${textBoxName === "" ? "textOnDemotivationCycle" : themedTextTag}`} iconGoesHere="rbxassetid://7072706620"/>                
            </Basic> }        
    </Button>
}
export function LoadoutEditor({listChildren, setListChildren, selectedIndex, callbacks}: {listChildren: LoadoutBullshit[], setListChildren: React.Dispatch<React.SetStateAction<LoadoutBullshit[]>>, selectedIndex: number, callbacks: loadoutUIItemCallbacks}) {
    return <Basic Size={new UDim2(1, 0, 1, 0)} tags={["paddingStandard"]} flexProps={{FillDirection: Enum.FillDirection.Horizontal, Tag: "paddingStandard", HorizontalAlignment: Enum.HorizontalAlignment.Center, VerticalAlignment: Enum.VerticalAlignment.Center}}>
        <ListDrawer flexProps={{HorizontalFlex: Enum.UIFlexAlignment.Fill}} AutomaticSize={Enum.AutomaticSize.None} Size={new UDim2(0, 240, 1, 0)}>
        <Basic flexProps={{FillDirection: Enum.FillDirection.Horizontal, HorizontalFlex: Enum.UIFlexAlignment.SpaceBetween, ItemLineAlignment: Enum.ItemLineAlignment.Center}} tags={["paddingSmall"]}>
            <Text Tag={"textTitleSubheading textOnDark"} text="SLOTS"/>
            <Basic flexProps={{FillDirection: Enum.FillDirection.Horizontal}}>
                <Text Tag={"textBody textOnDark"} text={tostring(listChildren.size())}/>
                <Text Tag={`textBody textOnDemotivationCycle`} text={` / `}/>
                <Text Tag={"textBody textOnDark"} text={"10"}/>
            </Basic>
        </Basic>
        <BasicScroll flexProps={{HorizontalFlex: Enum.UIFlexAlignment.Fill, SortOrder: Enum.SortOrder.LayoutOrder}} Size={new UDim2(1, 0, 0, 0)} scrollProps={{Size: new UDim2(1, 0, 1, 0), AutomaticSize: Enum.AutomaticSize.None}} scrollChildren={<uiflexitem FlexMode={"Fill"}/>}>
        {[...listChildren.map(
            (value: LoadoutBullshit, index: number, array: readonly LoadoutBullshit[]) => {
                return <Loadout myValue={value} isSelected={index === selectedIndex} callbacks={{
                    onRename: (name: string) => callbacks.onRename(index, name),
                    onMove: (pos: 1 | -1) => callbacks.onMove(index, pos),
                    onDelete: () => callbacks.onDelete(index),
                    onSelect: () => callbacks.onSelect(index),
                    onClone: () => callbacks.onClone(index),
                }}/>
            }),
        <IconBaseButton LayoutOrder={23853287953287593289053290532905290} image={"rbxassetid://7072720870"} tags={["veryGenericBox", "hasOutline", "Generic"]} iconTags={["Generic"]} textTags={["Generic"]} 
            clickCallback={() => {
                const listChildrenClone = [...listChildren];
                const customDefaultLoadout = {...defaultLoadout};
                listChildrenClone.push(customDefaultLoadout);
                setListChildren(listChildrenClone)
            }}
        >NEW LOADOUT</IconBaseButton> // dogshit roblox
        ]}
        </BasicScroll>
    </ListDrawer>
        <NotImplemented>{HttpService.JSONEncode(listChildren[selectedIndex])}</NotImplemented>
    </Basic>
}
