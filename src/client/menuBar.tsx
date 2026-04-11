import React, { StrictMode, useEffect, useState, useRef } from '@rbxts/react';
import { Basic, Button } from "./easyobjects";
import { MenuButton, IconMenuButton, MenuButtonProps } from "./menuButton";
import motion, { Transition } from "@rbxts/react-motion";
interface extraProps {
    text: string
}
type MenuBarButtonDef = Omit<MenuButtonProps, 'pageCallback'> & { image: string, pageCallback: (index: number) => void }
export function MenuBar({buttonsJSON = [], children = {}, slideTransition = {
      duration: 0.25,
      easingStyle: Enum.EasingStyle.Quart,
      easingDirection: "Out",
      repeatCount: 0,
      reverses: false,
      delay: 0,
    }}: {
    buttonsJSON: [MenuBarButtonDef & {image: string}, extraProps][],
    children?: React.ReactNode,
    slideTransition?: Transition
}) {
    const [selectedButton, setSelectedButton] = useState(0); // too lazy to bring it outside because it's almost useless for a demo.
    const [buttonSize, setButtonSize] = useState(new Vector2(0, 0));
    function getButtonPosXFromIndex(index: number) {
        return index * buttonSize.X;
    }
    const buttonRef = useRef<Frame[]>([]);
    useEffect(() => {
        const instance = buttonRef.current?.[0];
        if (!instance) return;
        const conn = instance.GetPropertyChangedSignal("AbsoluteSize").Connect(() => {
            setButtonSize(instance.AbsoluteSize);
        });
        setButtonSize(instance.AbsoluteSize);
        return () => conn.Disconnect();
    }, []);
    return <frame AutomaticSize={Enum.AutomaticSize.XY} Size={new UDim2(1, 0, 0, 0)} BackgroundTransparency={1}><Basic tags={["menuBarButtonsContainer"]} flexProps={{HorizontalAlignment: Enum.HorizontalAlignment.Center, FillDirection: Enum.FillDirection.Horizontal}}>
                    {children}
                    {
                        buttonsJSON.map((value: [MenuBarButtonDef & {image: string}, extraProps], index: number, array: readonly [MenuBarButtonDef & {image: string}, extraProps][]) => {
                            const button = <IconMenuButton {...value[0]} pageCallback={() => {value[0].pageCallback(index); setSelectedButton(index);}} frameProps={{Size:new UDim2(0, 150, 0, 0)}} AutomaticSize={Enum.AutomaticSize.Y} Size={new UDim2(0, 150, 0, 0)}>
                                <uiflexitem FlexMode={"Fill"}/>
                                <textlabel AutomaticSize={Enum.AutomaticSize.XY} Size={new UDim2(0, 0, 0, 0)} BackgroundTransparency={1} BorderSizePixel={0} Tag={"textStandard"} Text={value[1].text}/>
                            </IconMenuButton>;
                            return <frame AutomaticSize={Enum.AutomaticSize.Y} Size={new UDim2(0, 150, 0, 0)} ref={(instance) => { if (instance) buttonRef.current[index] = instance }} BackgroundTransparency={1}>{button}</frame>;
                        })
                    }
            </Basic>
            <motion.frame 
                animate={{Position: new UDim2(0, getButtonPosXFromIndex(selectedButton), 0, 0)}} 
                AutomaticSize={Enum.AutomaticSize.None} 
                Size={new UDim2(0, buttonSize.X, 0, buttonSize.Y)} 
                ClipsDescendants={true}
                transition={slideTransition}  
            >
                    {children}
                    <motion.frame transition={slideTransition} animate={{Position: new UDim2(0, -getButtonPosXFromIndex(selectedButton), 0, 0)}}  Size={new UDim2(0, buttonSize.X * buttonRef.current.size(), 0, 0)} BackgroundTransparency={1}>
                        <uilistlayout
                            FillDirection={Enum.FillDirection.Horizontal}
                            Padding={new UDim(0, 0)}
                            HorizontalAlignment={Enum.HorizontalAlignment.Left}
                            VerticalAlignment={Enum.VerticalAlignment.Top}
                            SortOrder={Enum.SortOrder.Name}
                        />
                        {
                            buttonsJSON.map((value: [MenuBarButtonDef & {image: string}, extraProps], index: number, array: readonly [MenuBarButtonDef & {image: string}, extraProps][]) => {
                                return <IconMenuButton {...value[0]} pageCallback={()=>{}} tags={["selected", ...(value[0].tags || [])]} Interactable={false} frameProps={{Size:new UDim2(0, 150, 0, 0)}} AutomaticSize={Enum.AutomaticSize.Y} Size={new UDim2(0, 150, 0, 0)}>
                                    <uiflexitem FlexMode={"Fill"}/>
                                    <textlabel AutomaticSize={Enum.AutomaticSize.XY} Size={new UDim2(0, 0, 0, 0)} BackgroundTransparency={1} BorderSizePixel={0} Tag={"textStandard"} Text={value[1].text}/>
                                </IconMenuButton>
                            })
                        }
                    </motion.frame>
            </motion.frame>
            </frame>
}
export function MenuBarHome({pageCallback = () => {}, getMoney = () => {return {newTaiwanDollars: 1, biitcoin: 67}}, ...props}: {getMoney?: () => {newTaiwanDollars: number, biitcoin: number}, pageCallback: (name: string, index: number) => void}) {
    const money = getMoney();
    return <Basic BackgroundTransparency={0} tags={["menuBarHome-full"]} flexProps={{FillDirection: Enum.FillDirection.Horizontal, ItemLineAlignment: Enum.ItemLineAlignment.Center, Wraps: true}}>
        <Basic flexProps={{HorizontalAlignment: Enum.HorizontalAlignment.Center}}>
            <uiflexitem FlexMode={Enum.UIFlexMode.Fill}/>
        </Basic>

        <Basic flexProps={{HorizontalAlignment: Enum.HorizontalAlignment.Center, FillDirection: Enum.FillDirection.Horizontal, ItemLineAlignment: Enum.ItemLineAlignment.Center}}>
            <uiflexitem FlexMode={Enum.UIFlexMode.Fill}/>
            <MenuBar buttonsJSON =
            {[
                [
                    {tags:["defaultMenuButton"], image:"rbxassetid://7072720722", pageCallback: (index: number) => {pageCallback("PLAY", index)}}, 
                    {text: "PLAY"}
                ],
                                [
                    {tags:["defaultMenuButton"], image:"rbxassetid://7072718266", pageCallback: (index: number) => {pageCallback("SERVERS", index)}}, 
                    {text: "SERVERS"}
                ],
                [
                    {tags:["defaultMenuButton"], image:"rbxassetid://7072723337", pageCallback: (index: number) => {pageCallback("LOADOUT", index)}}, 
                    {text: "LOADOUT"}
                ],
                [
                    {tags:["defaultMenuButton"], image:"rbxassetid://7072724538", pageCallback: (index: number) => {pageCallback("PROFILE", index)}}, 
                    {text: "PROFILE"}
                ],
                                [
                    {tags:["defaultMenuButton"], image:"rbxassetid://7072721682", pageCallback: (index: number) => {pageCallback("SETTINGS", index)}}, 
                    {text: "SETTINGS"}
                ]
            ]}/>
        </Basic>
        <Basic flexProps={{HorizontalAlignment: Enum.HorizontalAlignment.Center}}>
            <uiflexitem FlexMode={Enum.UIFlexMode.Fill}/>
            <Basic tags={["menuBarButtonsContainer"]} flexProps={{HorizontalAlignment: Enum.HorizontalAlignment.Center, FillDirection: Enum.FillDirection.Horizontal, ItemLineAlignment: Enum.ItemLineAlignment.Center}}>
                <Basic tags={["paddingMini"]}>
                    <Basic flexProps={{Tag: "paddingMini", FillDirection: Enum.FillDirection.Horizontal}}>
                        <textlabel Tag={"textOnDark textStandard"} BackgroundTransparency={1} Text={tostring(money.newTaiwanDollars)} AutomaticSize={Enum.AutomaticSize.XY} TextXAlignment={Enum.TextXAlignment.Left} TextYAlignment={Enum.TextYAlignment.Top}/>
                        <textlabel Tag={"textOnDark textStandard"} BackgroundTransparency={1} Text={"$"} AutomaticSize={Enum.AutomaticSize.XY} TextXAlignment={Enum.TextXAlignment.Left} TextYAlignment={Enum.TextYAlignment.Top}/></Basic>
                    <Basic flexProps={{Tag: "paddingMini", FillDirection: Enum.FillDirection.Horizontal}}>
                        <textlabel Tag={"textOnDemotivationCycle textStandard"} BackgroundTransparency={1} Text={tostring(money.biitcoin)} AutomaticSize={Enum.AutomaticSize.XY} TextXAlignment={Enum.TextXAlignment.Left} TextYAlignment={Enum.TextYAlignment.Top}/>
                        <textlabel Tag={"textOnDemotivationCycle textStandard"} BackgroundTransparency={1} Text={"B"} AutomaticSize={Enum.AutomaticSize.XY} TextXAlignment={Enum.TextXAlignment.Left} TextYAlignment={Enum.TextYAlignment.Top}/></Basic>
                </Basic>
            <Basic tags={["menuBarButtonsContainer"]} flexProps={{HorizontalAlignment: Enum.HorizontalAlignment.Center, FillDirection: Enum.FillDirection.Horizontal, ItemLineAlignment: Enum.ItemLineAlignment.Center}}>
                <IconMenuButton tags={["shopMenuButton"]} image="rbxassetid://7072721954" pageCallback={() => {pageCallback("SHOP", -1)}} frameProps={{Size:new UDim2(0, 150, 0, 0)}} AutomaticSize={Enum.AutomaticSize.Y} Size={new UDim2(0, 150, 0, 0)}>
                    <uiflexitem FlexMode={"Fill"}/>
                    <textlabel AutomaticSize={Enum.AutomaticSize.XY} Size={new UDim2(0, 0, 0, 0)} BackgroundTransparency={1} BorderSizePixel={0} Tag={"textStandard"} Text={"SHOP"}/>
                </IconMenuButton>
            </Basic>
            </Basic>
    </Basic>
    </Basic>; // -1 is the special index that allows any uniquely named single page page to exist. For now, only the shop's -1 will exist in the -1's index. 
}