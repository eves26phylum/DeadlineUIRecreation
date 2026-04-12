import { ReplicatedStorage } from "@rbxts/services";
export function createRule(selector: string, props: InstanceProperties<any>, styleSheet: StyleSheet) {
    const rule: StyleRule = new Instance("StyleRule");
    rule.Parent = styleSheet;
    rule.Selector = selector;
    rule.SetProperties(props);
    return rule
}
export function Styles() {
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
    // lobbySheet.SetAttribute("backgroundCompletedQuestColour", Color3.fromRGB(20, 70, 20))
    lobbySheet.SetAttribute("DailyQuestsTitleComplementaryColourBackgroundColour3Darker", Color3.fromRGB(30, 30, 30));
    lobbySheet.SetAttribute("progressBarBackgroundCompletedQuestColour", Color3.fromRGB(30, 30, 30));
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
    createRule(".QuestProgressBar.completed", {
        BackgroundColor3: "$progressBarBackgroundCompletedQuestColour"
    }, lobbySheet)
    createRule(".QuestProgressBar.completed > .QuestProgressBarContent", {
        BackgroundColor3: "$SecondaryAccentColour"
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
    createRule(".tableOfQuest.completed", {
        BackgroundColor3: "$PositiveColour"
    }, lobbySheet)
    createRule(".textOnDark.completed", {
        TextColor3: "$SecondaryAccentColour"
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
        ItemLineAlignment: Enum.ItemLineAlignment.Center,
        VerticalAlignment: Enum.VerticalAlignment.Center
    }, lobbySheet)
    createRule(".menuButton > Frame::UIPadding", {
        PaddingLeft: "$PaddingXXL",
        PaddingRight: "$PaddingXXL",
        PaddingBottom: "$PaddingL",
        PaddingTop: "$PaddingL",
    }, lobbySheet); // 1/2 padding rule
    return lobbySheet;
}