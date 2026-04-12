// VERSION: Roblox Studio 0.716.0.7160873 (arm64)
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
import { UiContextProvider, AppContextProvider } from "./hooks/useAppContext";
import { moneyFormat } from "shared/types/deadlineClientTypes";
import QuestsManager from "./questsManager";
const lobbySheet = new Instance("StyleSheet");
lobbySheet.SetAttribute("PaddingXL", new UDim(0, 24));
lobbySheet.SetAttribute("PaddingXXL", new UDim(0, 32));
lobbySheet.SetAttribute("PaddingL", new UDim(0, 16));
lobbySheet.SetAttribute("PaddingTL", new UDim(0, 12));
lobbySheet.SetAttribute("IconSize", new UDim2(0, 20, 0, 20));
lobbySheet.SetAttribute("AccentColour", Color3.fromRGB(255, 255, 255));
lobbySheet.SetAttribute("SecondaryAccentColour", Color3.fromHex("#808080"));
lobbySheet.SetAttribute("RerollMainButtonComplementaryColourBackgroundColor3", Color3.fromRGB(60, 60, 60));
lobbySheet.SetAttribute("RerollMainButtonComplementaryHoverColourBackgroundColor3", Color3.fromRGB(80, 80, 80));
lobbySheet.SetAttribute("RerollButtonComplementaryColourBackgroundColor3", Color3.fromRGB(40, 40, 40));
lobbySheet.SetAttribute("RerollButtonComplementaryColourHoverBackgroundColor3", Color3.fromRGB(60, 60, 60));
lobbySheet.SetAttribute("DailyQuestsTitleComplementaryColourBackgroundColour3Darker", Color3.fromRGB(30, 30, 30));
lobbySheet.SetAttribute("BorderColour", Color3.fromHex("#2A2A2A"));
lobbySheet.SetAttribute("BackgroundColour", Color3.fromRGB(0, 0, 0));
lobbySheet.SetAttribute("PositiveColour", Color3.fromRGB(0, 255, 0));
lobbySheet.SetAttribute("backgroundQuestColour", Color3.fromRGB(15, 15, 15));
lobbySheet.SetAttribute("progressQuestBarHighlight", Color3.fromRGB(37, 37, 37));
lobbySheet.SetAttribute("PaddingS", new UDim(0, 8));
lobbySheet.SetAttribute("PaddingXS", new UDim(0, 4));
lobbySheet.SetAttribute("PaddingXXS", new UDim(0, 2));
lobbySheet.SetAttribute("FontMainBold", new Font("rbxassetid://12187365977", Enum.FontWeight.Bold));
lobbySheet.SetAttribute("FontMainSemiBold", new Font("rbxassetid://12187365977", Enum.FontWeight.SemiBold));
lobbySheet.SetAttribute("FontMainRegular", new Font("rbxassetid://12187365977", Enum.FontWeight.Regular));
lobbySheet.SetAttribute("TextSize", 16);
lobbySheet.SetAttribute("TitleTextSize", 48);
lobbySheet.SetAttribute("LargerSubheadingTextSize", 32);
lobbySheet.SetAttribute("SubheadingTextSize", 24);
lobbySheet.Parent = ReplicatedStorage;
function createRule(selector: string, props: InstanceProperties<any>, styleSheet: StyleSheet) {
    const rule: StyleRule = new Instance("StyleRule");
    rule.Parent = styleSheet;
    rule.Selector = selector;
    rule.SetProperties(props);
    return rule
}
createRule(".textOnDark", { TextColor3: "$AccentColour" }, lobbySheet);
createRule(".textOnDemotivationCycle", { TextColor3: "$SecondaryAccentColour" }, lobbySheet);
createRule(".textBody", { TextSize: "$TextSize", FontFace: "$FontMainRegular" }, lobbySheet);
createRule(".textStandard", { TextSize: "$TextSize", FontFace: "$FontMainSemiBold" }, lobbySheet);
createRule(".textTitleMain", { TextSize: "$TitleTextSize", FontFace: "$FontMainBold" }, lobbySheet);
createRule(".textTitleLargerSubheading", { TextSize: "$LargerSubheadingTextSize", FontFace: "$FontMainBold" }, lobbySheet);
createRule(".textTitleSubheading", { TextSize: "$SubheadingTextSize", FontFace: "$FontMainBold" }, lobbySheet);
createRule(".shopMenuButton > Frame > TextLabel", { TextColor3: "$PositiveColour" }, lobbySheet);
createRule(".shopMenuButton > Frame > ImageLabel", { ImageColor3: "$PositiveColour" }, lobbySheet);
createRule(".shopMenuButton.selected > Frame > TextLabel", { TextColor3: "$BackgroundColour" }, lobbySheet);
createRule(".shopMenuButton.selected > Frame > ImageLabel", { ImageColor3: "$BackgroundColour" }, lobbySheet);
createRule(" .shopMenuButton:Press > Frame > TextLabel, .shopMenuButton:Hover > Frame > TextLabel", { TextColor3: "$BackgroundColour" }, lobbySheet);
createRule(".shopMenuButton:Hover > Frame > ImageLabel, .shopMenuButton:Press > Frame > ImageLabel", { ImageColor3: "$BackgroundColour" }, lobbySheet);
createRule(".defaultMenuButton > Frame > TextLabel", { TextColor3: "$AccentColour" }, lobbySheet);
createRule(".defaultMenuButton > Frame > ImageLabel", { ImageColor3: "$AccentColour" }, lobbySheet);
createRule(".defaultMenuButton.selected > Frame > TextLabel", { TextColor3: "$BackgroundColour" }, lobbySheet);
createRule(".defaultMenuButton.selected > Frame > ImageLabel", { ImageColor3: "$BackgroundColour" }, lobbySheet);
createRule(".tableOfQuest::UIPadding", {
    PaddingLeft: "$PaddingL",
    PaddingRight: "$PaddingL",
    PaddingBottom: "$PaddingL",
    PaddingTop: "$PaddingL",
}, lobbySheet)
createRule(".tableOfQuest > UIListLayout", {
    Padding: "$PaddingL"
}, lobbySheet)
createRule(".bodyContainer > .textGroup > UIListLayout", {
    Padding: "$PaddingL"
}, lobbySheet)
createRule(".QuestProgressBar > .QuestProgressBarContent", {
    BackgroundColor3: "$AccentColour"
}, lobbySheet)
createRule(".QuestProgressBar > .QuestProgressBarContent::UICorner", {
    CornerRadius: new UDim(1, 0)
}, lobbySheet)
createRule(".QuestProgressBar", {
    BackgroundTransparency: 0,
    BackgroundColor3: "$progressQuestBarHighlight"
}, lobbySheet)
createRule(".QuestProgressBar::UICorner", {
    CornerRadius: new UDim(1, 0)
}, lobbySheet)
createRule(".QuestProgressBar::UIPadding", {
    PaddingLeft: "$PaddingXS",
    PaddingRight: "$PaddingXS",
    PaddingBottom: "$PaddingXS",
    PaddingTop: "$PaddingXS",
}, lobbySheet)
createRule(".actionContainer > UIListLayout", {
    Padding: "$PaddingS"
}, lobbySheet)
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
createRule(".rerollButton::UIPadding", {
    PaddingLeft: "$PaddingXL",
    PaddingRight: "$PaddingXL",
    PaddingBottom: "$PaddingTL",
    PaddingTop: "$PaddingTL"
}, lobbySheet)
createRule(".questsTitle::UIPadding", {
    PaddingLeft: "$PaddingL",
    PaddingRight: "$PaddingL",
    PaddingBottom: "$PaddingXXL",
    PaddingTop: "$PaddingXXL"
}, lobbySheet)
createRule(".questsTitle", {
    BackgroundColor3: "$DailyQuestsTitleComplementaryColourBackgroundColour3Darker"
}, lobbySheet)
createRule(".tableOfQuest", {
    BackgroundColor3: "$backgroundQuestColour"
}, lobbySheet)
createRule(".rerollButton", {
    BackgroundColor3: "$RerollButtonComplementaryColourBackgroundColor3"
}, lobbySheet)
createRule(".rerollButton:Hover", {
    BackgroundColor3: "$RerollButtonComplementaryColourHoverBackgroundColor3"
}, lobbySheet)
createRule(".rerollButton > Frame > UIListLayout", {
    Padding: "$PaddingS"
}, lobbySheet)
createRule(".rerollButtonMain", {
    BackgroundColor3: "$RerollMainButtonComplementaryColourBackgroundColor3"
}, lobbySheet)
createRule(".rerollButtonMain:Hover", {
    BackgroundColor3: "$RerollMainButtonComplementaryHoverColourBackgroundColor3"
}, lobbySheet)
createRule(".menuButton", { BackgroundColor3: "$BackgroundColour" }, lobbySheet);
createRule(".menuButton.defaultMenuButton:Hover", { BackgroundColor3: "$DailyQuestsTitleComplementaryColourBackgroundColour3Darker" }, lobbySheet);
createRule(".menuButton.defaultMenuButton:Press", { BackgroundColor3: "$DailyQuestsTitleComplementaryColourBackgroundColour3Darker" }, lobbySheet);
createRule(".menuButton.defaultMenuButton.selected", { BackgroundColor3: "$AccentColour" }, lobbySheet);
createRule(".menuButton.shopMenuButton.selected", { BackgroundColor3: "$PositiveColour" }, lobbySheet);
createRule(".menuButton.shopMenuButton:Hover, .menuButton.shopMenuButton:Press", { BackgroundColor3: "$PositiveColour" }, lobbySheet);
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
}, lobbySheet); // 1/2 padding rule
export default function() {
    const uiPageLayoutRef = useRef<UIPageLayout>();
    const [money, setMoney] = useState<moneyFormat>({
        newTaiwanDollars: 0,
        biitcoin: 0
    });
    const [questsFinishTimeSeconds, setQuestsFinishTimeSeconds] = useState<number>(12000);
    const APPCONTEXT = {
        states: {
            money: money,
            setMoney: setMoney,
            questsFinishTimeSeconds: questsFinishTimeSeconds,
            setQuestsFinishTimeSeconds: setQuestsFinishTimeSeconds
        }
    };
    const [selectedPage, setSelectedPage] = useState<number>(0);
    const UICONTEXT = {
        states: {
            selectedPage: selectedPage,
            setSelectedPage: setSelectedPage
        },
        themes: {
            "quests.progressBarWidth": 10
        }
    }
    useEffect(()=>{
        task.delay(1, () => {
            setMoney({newTaiwanDollars: money.newTaiwanDollars + 10000, biitcoin: money.biitcoin + 10});
        });
    }, [money.newTaiwanDollars])
    useEffect(()=>{
        uiPageLayoutRef.current?.JumpToIndex(selectedPage + 1);
    }, [selectedPage])
    return <AppContextProvider APPCONTEXT={APPCONTEXT}><UiContextProvider UICONTEXT={UICONTEXT}><screengui ResetOnSpawn={false} ScreenInsets={Enum.ScreenInsets.DeviceSafeInsets}>
        <uilistlayout
            FillDirection={Enum.FillDirection.Vertical}
            Padding={new UDim(0, 0)}
            HorizontalAlignment={Enum.HorizontalAlignment.Left}
            VerticalAlignment={Enum.VerticalAlignment.Top}
            SortOrder={Enum.SortOrder.Name}
        />
        <MenuBarHome getMoney={()=>{return money;}} pageCallback={(name: string, index: number) => {}}/>
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
    </screengui></UiContextProvider></AppContextProvider>
};