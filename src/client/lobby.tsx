/* 
Structure:
- A menu bar script that has menu buttons
- And scripts for different pages
- And a unified button script
*/
import React, { StrictMode, useEffect, useState, useRef } from "@rbxts/react";
import { Basic, Button } from "./easyobjects";
import { MenuBarHome } from "./menuBar";
import { ReplicatedStorage, Workspace } from '@rbxts/services';
import motion from "@rbxts/react-motion";
import QuestsManager from "./questsManager";
const lobbySheet = new Instance("StyleSheet");
lobbySheet.SetAttribute("PaddingXL", new UDim(0, 24));
lobbySheet.SetAttribute("PaddingXXL", new UDim(0, 30));
lobbySheet.SetAttribute("PaddingL", new UDim(0, 16));
lobbySheet.SetAttribute("IconSize", new UDim2(0, 20, 0, 20));
lobbySheet.SetAttribute("AccentColour", Color3.fromRGB(255, 255, 255));
lobbySheet.SetAttribute("SecondaryAccentColour", Color3.fromHex("#808080"));
lobbySheet.SetAttribute("BorderColour", Color3.fromHex("#2A2A2A"));
lobbySheet.SetAttribute("BackgroundColour", Color3.fromRGB(0, 0, 0));
lobbySheet.SetAttribute("PositiveColour", Color3.fromRGB(0, 255, 0));
lobbySheet.SetAttribute("PaddingS", new UDim(0, 8));
lobbySheet.SetAttribute("PaddingXS", new UDim(0, 4));
lobbySheet.SetAttribute("FontMainBold", new Font("rbxassetid://12187365977", Enum.FontWeight.Bold));
lobbySheet.SetAttribute("FontMainSemiBold", new Font("rbxassetid://12187365977", Enum.FontWeight.SemiBold));
lobbySheet.SetAttribute("FontMainRegular", new Font("rbxassetid://12187365977", Enum.FontWeight.Regular));
lobbySheet.SetAttribute("TextSize", 16);
lobbySheet.SetAttribute("TitleTextSize", 48);
lobbySheet.SetAttribute("SubheadingTextSize", 24);
lobbySheet.Parent = ReplicatedStorage;
function createRule(selector: string, props: InstanceProperties<any>, styleSheet: StyleSheet) {
    const rule = new Instance("StyleRule");
    rule.Parent = styleSheet;
    rule.Selector = selector;
    rule.SetProperties(props);
    return rule
}
createRule(".textOnDark", { TextColor3: "$AccentColour" }, lobbySheet);
createRule(".textOnDemotivationCycle", { TextColor3: "$SecondaryAccentColour" }, lobbySheet);
createRule(".textStandard", { TextSize: "$TextSize", FontFace: "$FontMainSemiBold" }, lobbySheet);
createRule(".textTitleMain", { TextSize: "$TitleTextSize", FontFace: "$FontMainBold" }, lobbySheet);
createRule(".textTitleSubheading", { TextSize: "$SubheadingTextSize", FontFace: "$FontMainBold" }, lobbySheet);
createRule(".shopMenuButton > Frame > TextLabel", { TextColor3: "$PositiveColour" }, lobbySheet);
createRule(".shopMenuButton > Frame > ImageLabel", { ImageColor3: "$PositiveColour" }, lobbySheet);
createRule(".shopMenuButton.selected > Frame > TextLabel", { TextColor3: "$BackgroundColour" }, lobbySheet);
createRule(".shopMenuButton.selected > Frame > ImageLabel", { ImageColor3: "$BackgroundColour" }, lobbySheet);
createRule(".defaultMenuButton > Frame > TextLabel", { TextColor3: "$AccentColour" }, lobbySheet);
createRule(".defaultMenuButton > Frame > ImageLabel", { ImageColor3: "$AccentColour" }, lobbySheet);
createRule(".defaultMenuButton.selected > Frame > TextLabel", { TextColor3: "$BackgroundColour" }, lobbySheet);
createRule(".defaultMenuButton.selected > Frame > ImageLabel", { ImageColor3: "$BackgroundColour" }, lobbySheet);
createRule(".menuBarHome-full", {
    Size: new UDim2(1, 0, 0, 0),
    BackgroundColor3: "$BackgroundColour",
    BackgroundTransparency: 0
}, lobbySheet)
createRule(".menuBarHome-full::UIPadding", {
    PaddingLeft: "$PaddingL",
    PaddingRight: "$PaddingL",
    PaddingBottom: "$PaddingL",
    PaddingTop: "$PaddingL",
}, lobbySheet)
createRule("UIListLayout.paddingStandard", {
    Padding: "$PaddingL"
}, lobbySheet)
createRule("UIListLayout.paddingMini", {
    Padding: "$PaddingXS"
}, lobbySheet)
createRule(".paddingStandard::UIPadding", {
    PaddingLeft: "$PaddingL",
    PaddingRight: "$PaddingL",
    PaddingBottom: "$PaddingL",
    PaddingTop: "$PaddingL"
}, lobbySheet)
createRule(".paddingMini::UIPadding", {
    PaddingLeft: "$PaddingS",
    PaddingRight: "$PaddingS",
    PaddingBottom: "$PaddingXS",
    PaddingTop: "$PaddingXS"
}, lobbySheet)
createRule(".menuBarButtonsContainer::UIStroke", {
    Color: "$BorderColour"
}, lobbySheet)
createRule(".menuButton", { BackgroundColor3: "$BackgroundColour" }, lobbySheet);
createRule(".menuButton.defaultMenuButton.selected", { BackgroundColor3: "$AccentColour" }, lobbySheet);
createRule(".menuButton.shopMenuButton.selected", { BackgroundColor3: "$PositiveColour" }, lobbySheet);
createRule(".icon", { 
    Size: "$IconSize"
 }, lobbySheet);
createRule(".menuButton > Frame > UIListLayout", {
    FillDirection: Enum.FillDirection.Horizontal, 
    Padding: "$PaddingS",
    ItemLineAlignment: Enum.ItemLineAlignment.Center
}, lobbySheet)
createRule(".menuButton > Frame::UIPadding", {
    PaddingLeft: "$PaddingXXL",
    PaddingRight: "$PaddingXXL",
    PaddingBottom: "$PaddingL",
    PaddingTop: "$PaddingL",
}, lobbySheet);
export default function() {
    const [money, setMoney] = useState<{newTaiwanDollars: number, biitcoin: number}>({newTaiwanDollars: 60000, biitcoin: 67});
    const uiPageLayoutRef = useRef<UIPageLayout>();
    return <screengui ResetOnSpawn={false} ScreenInsets={Enum.ScreenInsets.DeviceSafeInsets}>
        <uilistlayout
            FillDirection={Enum.FillDirection.Vertical}
            Padding={new UDim(0, 0)}
            HorizontalAlignment={Enum.HorizontalAlignment.Left}
            VerticalAlignment={Enum.VerticalAlignment.Top}
            SortOrder={Enum.SortOrder.Name}
        />
        <MenuBarHome getMoney={()=>{return money;}} pageCallback={(name: string, index: number) => {print(name, index); if (uiPageLayoutRef) uiPageLayoutRef.current?.JumpToIndex(index + 1); /* Account for the -1 bias (+1)*/}}/>
        <motion.frame Size={new UDim2(1, 0, 1, 0)} BackgroundTransparency={1} Tag={"MenuContent"}>
            {/* <uiflexitem FlexMode={"Fill"}/> */}
            <uipagelayout ref={uiPageLayoutRef} EasingDirection={Enum.EasingDirection.Out} EasingStyle={Enum.EasingStyle.Quart} TweenTime={0.25}/>
            <Basic BackgroundTransparency={1}>Hello I am the shop</Basic> {/* Negative one single page */}
            <Basic Size={new UDim2(0, 0, 1, 0)} BackgroundTransparency={1} flexProps={{FillDirection: Enum.FillDirection.Horizontal}}>
                <Basic Size={new UDim2(0.5, 0, 1, 0)}>
                    I am play column
                </Basic>
                <Basic Size={new UDim2(0.5, 0, 1, 0)} flexProps={{HorizontalAlignment: Enum.HorizontalAlignment.Center, VerticalAlignment: Enum.VerticalAlignment.Center}}>
                    <QuestsManager/>
                </Basic>
            </Basic>
            <Basic BackgroundTransparency={1}>Hello I am the servers</Basic>
            <Basic BackgroundTransparency={1}>Hello I am the loadout</Basic>
            <Basic BackgroundTransparency={1}>Hello I am the profile</Basic>
            <Basic BackgroundTransparency={1}>Hello I am the settings</Basic>
        </motion.frame>
        <stylelink StyleSheet={lobbySheet}/>
    </screengui>
};