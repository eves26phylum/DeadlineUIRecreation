import { ReplicatedStorage } from "@rbxts/services";
import { Error } from "@rbxts/luau-polyfill";
import { addColor3, mulColor3 } from "shared/Color3Util";

export function createRule(selector: string, props: InstanceProperties<any>, styleSheet: StyleSheet) {
    const rule: StyleRule = new Instance("StyleRule");
    rule.Parent = styleSheet;
    rule.Selector = selector;
    rule.SetProperties(props);
    return rule
}
export function Styles({ customSheet, Parent = ReplicatedStorage }: { customSheet?: StyleSheet, Parent?: Instance } = {}) {
    let lobbySheet = customSheet;
    if (!lobbySheet) {
        lobbySheet = new Instance("StyleSheet");
        lobbySheet.SetAttribute("PaddingXL", new UDim(0, 24));
        lobbySheet.SetAttribute("PaddingXXL", new UDim(0, 32));
        lobbySheet.SetAttribute("PaddingXXXL", new UDim(0, 64));
        lobbySheet.SetAttribute("PaddingXXXXL", new UDim(0, 128));
        lobbySheet.SetAttribute("PaddingL", new UDim(0, 16));
        lobbySheet.SetAttribute("PaddingTL", new UDim(0, 12));
        lobbySheet.SetAttribute("IconSize", new UDim2(0, 20, 0, 20));
        lobbySheet.SetAttribute("AccentColour", Color3.fromRGB(255, 255, 255));
        lobbySheet.SetAttribute("SecondaryAccentColour", Color3.fromHex("#808080"));
        // yes i know the quest ui has a subtle gradient border thing but im not bothered to recreate it right now
        // lobbySheet.SetAttribute("backgroundCompletedQuestColour", Color3.fromRGB(20, 70, 20))
        lobbySheet.SetAttribute("progressBarBackgroundCompletedQuestColour", Color3.fromRGB(30, 30, 30));
        lobbySheet.SetAttribute("BorderColour", Color3.fromHex("#2A2A2A"));
        lobbySheet.SetAttribute("BackgroundColour", Color3.fromRGB(0, 0, 0));
        lobbySheet.SetAttribute("PositiveColour", Color3.fromRGB(0, 255, 0));
        lobbySheet.SetAttribute("SavouryColour", Color3.fromRGB(255, 200, 0));
        lobbySheet.SetAttribute("backgroundQuestColour", Color3.fromRGB(15, 15, 15));
        lobbySheet.SetAttribute("progressQuestBarHighlight", Color3.fromRGB(37, 37, 37));
        lobbySheet.SetAttribute("PaddingS", new UDim(0, 8));
        lobbySheet.SetAttribute("PaddingXS", new UDim(0, 4));
        lobbySheet.SetAttribute("PaddingXXS", new UDim(0, 2));
        lobbySheet.SetAttribute("PaddingOne", new UDim(0, 1));
        lobbySheet.SetAttribute("FontMainBold", new Font("rbxassetid://12187365977", Enum.FontWeight.Bold));
        lobbySheet.SetAttribute("FontMainSemiBold", new Font("rbxassetid://12187365977", Enum.FontWeight.SemiBold));
        lobbySheet.SetAttribute("FontMainRegular", new Font("rbxassetid://12187365977", Enum.FontWeight.Regular));
        lobbySheet.SetAttribute("TextSize", 16);
        lobbySheet.SetAttribute("TextMiniSize", 10);
        lobbySheet.SetAttribute("TitleTextSize", 48);
        lobbySheet.SetAttribute("LargerSubheadingTextSize", 32);
        lobbySheet.SetAttribute("SubheadingTextSize", 24);
        lobbySheet.Parent = Parent || ReplicatedStorage;
    }
    function safeGetAttribute<T extends keyof CheckableTypes>(sheet: StyleSheet, attr: string, theType: T): CheckableTypes[T] {
        const attribute = sheet.GetAttribute(attr);
        if (!attribute) throw new Error("attribute is not defined");
        if (!typeIs(attribute, theType)) throw new Error("attribute is the wrong type");
        return attribute as CheckableTypes[T];
    }
    createRule(".textOnDark", { ImageColor3: "$AccentColour", TextColor3: "$AccentColour" }, lobbySheet);
    createRule(".textOnLight", { ImageColor3: "$BackgroundColour", TextColor3: "$BackgroundColour" }, lobbySheet);
    createRule(".textOnDemotivationCycle", { TextColor3: "$SecondaryAccentColour", ImageColor3: "$SecondaryAccentColour" }, lobbySheet);
    createRule(".textBody", { TextSize: "$TextSize", FontFace: "$FontMainRegular" }, lobbySheet);
    createRule(".textStandard", { TextSize: "$TextSize", FontFace: "$FontMainSemiBold" }, lobbySheet);
    createRule(".accentText", { TextColor3: "$AccentColour" }, lobbySheet);
    createRule(".textMini", { TextSize: "$TextMiniSize", FontFace: "$FontMainSemiBold" }, lobbySheet);
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
    createRule(".progressFilling", {
        BackgroundColor3: "$AccentColour"
    }, lobbySheet)
    createRule(".spawnButtonMain", {
        BackgroundColor3: "$AccentColour"
    }, lobbySheet)
    createRule(".spawnButton", {
        BackgroundColor3: addColor3(safeGetAttribute(lobbySheet, "BackgroundColour", "Color3"), Color3.fromRGB(60, 60, 60)),
        BackgroundTransparency: 0.5
    }, lobbySheet)
    createRule(".MenuContent > Frame", {
        BackgroundColor3: "$BackgroundColour",
        BackgroundTransparency: 0.5
    }, lobbySheet)
    createRule(".SERVERS::UIPadding", {
        PaddingLeft: "$PaddingL",
        PaddingRight: "$PaddingL",
        PaddingBottom: "$PaddingL",
        PaddingTop: "$PaddingL",
    }, lobbySheet)
    createRule(".veryGenericBox", {
        BackgroundColor3: "$BackgroundColour"
    }, lobbySheet)
    createRule(".veryGenericBox.alternate", {
        BackgroundColor3: addColor3(safeGetAttribute(lobbySheet, "BackgroundColour", "Color3"), Color3.fromRGB(20, 20, 20))
    }, lobbySheet)
    createRule(".hasOutline::UIStroke", {
        Color: "$BorderColour",
        BorderStrokePosition: Enum.BorderStrokePosition.Inner,
        ApplyStrokeMode: Enum.ApplyStrokeMode.Border
    }, lobbySheet)
    createRule(".sideBySideList > UIListLayout", {
        Padding: "$PaddingS"
    }, lobbySheet)
    // createRule(".sideList > UIListLayout", {
    //     Padding: "$PaddingL"
    // }, lobbySheet)
    createRule(".spawnButton:Hover", {
        BackgroundColor3: addColor3(safeGetAttribute(lobbySheet, "BackgroundColour", "Color3"), Color3.fromRGB(80, 80, 80))
    }, lobbySheet)
    createRule(".spawnButton::UIPadding", {
        PaddingLeft: "$PaddingL",
        PaddingRight: "$PaddingL",
        PaddingBottom: "$PaddingL",
        PaddingTop: "$PaddingL",
    }, lobbySheet)
    createRule(".spawnButton > Frame > UIListLayout", {
        Padding: "$PaddingL"
    }, lobbySheet)
    createRule(".ZeroHourLogo", {
        TextSize: 100
    }, lobbySheet)
    createRule(".zerohourspawnconfig > UIListLayout", {
        Padding: "$PaddingL"
    }, lobbySheet)
    createRule(".spawnButtonMain:Hover", {
        BackgroundColor3: addColor3(safeGetAttribute(lobbySheet, "AccentColour", "Color3"), Color3.fromRGB(-20, -20, -20))
    }, lobbySheet)
    createRule(".spawnButtonMain > Frame > UIListLayout", {
        Padding: "$PaddingL"
    }, lobbySheet)
    createRule(".spawnButtonMain::UIPadding", {
        PaddingLeft: "$PaddingXXL",
        PaddingRight: "$PaddingXXXXL",
        PaddingBottom: "$PaddingXXL",
        PaddingTop: "$PaddingXXL",
    }, lobbySheet)
    createRule(".tableOfQuest::UIPadding", {
        PaddingLeft: "$PaddingL",
        PaddingRight: "$PaddingL",
        PaddingBottom: "$PaddingL",
        PaddingTop: "$PaddingL",
    }, lobbySheet)
    createRule(".tableOfQuest > UIListLayout", {
        Padding: "$PaddingXL"
    }, lobbySheet)
    createRule(".currencyBubbleCardObject::UIAspectRatioConstraint", {
        AspectType: Enum.AspectType.ScaleWithParentSize
    }, lobbySheet)
    createRule(".currencyBubbleCardObject.XP", {
        BackgroundColor3: "$SavouryColour"
    }, lobbySheet)
    createRule(".currencyBubbleCardObject.XP > .stroke", {
        Color: "$SavouryColour"
    }, lobbySheet)
    createRule(".currencyBubbleCardObject.NewTaiwanDollars", {
        BackgroundColor3: "$PositiveColour"
    }, lobbySheet)
    createRule(".currencyBubbleCardObject.NewTaiwanDollars > .stroke", {
        Color: "$PositiveColour"
    }, lobbySheet)
    createRule(".currencyBubbleCardObject.completed", {
        BackgroundColor3: "$BackgroundColour"
    }, lobbySheet)
    createRule(".currencyBubbleCardObject.completed > .stroke", {
        Color: "$BorderColour"
    }, lobbySheet)
    createRule(".miniUICorner::UICorner", {
        CornerRadius: new UDim(0, 4)
    }, lobbySheet)
    createRule(".currencyBubbleMiniText.NewTaiwanDollars, .currencyBubbleLargeText.NewTaiwanDollars", {
        TextColor3: "$PositiveColour"
    }, lobbySheet)
    createRule(".currencyBubbleMiniText.XP, .currencyBubbleLargeText.XP", {
        TextColor3: "$SavouryColour"
    }, lobbySheet)
    createRule(".currencyBubbleMiniText", {
        TextTransparency: 0.5
    }, lobbySheet)
    createRule(".currencyBubbleMiniText.completed, .currencyBubbleLargeText.completed", {
        TextColor3: "$SecondaryAccentColour"
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
        BackgroundColor3: mulColor3(safeGetAttribute(lobbySheet, "SecondaryAccentColour", "Color3"), new Color3(0.2, 0.2, 0.2))
    }, lobbySheet)
    createRule(".QuestProgressBar.completed > .QuestProgressBarContent", {
        BackgroundColor3: "$SecondaryAccentColour"
    }, lobbySheet)
    createRule(".QuestProgressBar::UICorner", {
        CornerRadius: new UDim(1, 0)
    }, lobbySheet)
    createRule(".fuckROBLOX::UIFlexItem", {
        FlexMode: Enum.UIFlexMode.Fill
    }, lobbySheet)
    createRule(".QuestProgressBar::UIPadding", {
        PaddingLeft: "$PaddingXS",
        PaddingRight: "$PaddingXS",
        PaddingBottom: "$PaddingXS",
        PaddingTop: "$PaddingXS",
    }, lobbySheet)
    createRule(".Ghost.Button", {
        BackgroundColor3: addColor3(safeGetAttribute(lobbySheet, "BackgroundColour", "Color3"), Color3.fromRGB(60, 60, 60))
    }, lobbySheet)
    createRule(".Button > Frame > UIListLayout", {
        Padding: "$PaddingS"
    }, lobbySheet)
    createRule(".Ghost.icon", {
        BackgroundColor3: addColor3(safeGetAttribute(lobbySheet, "BackgroundColour", "Color3"), Color3.fromRGB(128, 128, 128))
    }, lobbySheet)
    createRule(".Ghost.text", {
        TextColor3: addColor3(safeGetAttribute(lobbySheet, "BackgroundColour", "Color3"), Color3.fromRGB(128, 128, 128))
    }, lobbySheet)
    createRule(".Ghost.Button:Hover", {
        BackgroundColor3: addColor3(safeGetAttribute(lobbySheet, "BackgroundColour", "Color3"), Color3.fromRGB(80, 80, 80))
    }, lobbySheet)
    createRule(".Generic.Button", {
        BackgroundColor3: "$BackgroundColour"
    }, lobbySheet)
    createRule(".Generic.icon", {
        BackgroundColor3: "$AccentColour"
    }, lobbySheet)
    createRule(".Generic.text", {
        TextColor3: "$AccentColour"
    }, lobbySheet)
    createRule(".Generic.Button:Hover", {
        BackgroundColor3: addColor3(safeGetAttribute(lobbySheet, "BackgroundColour", "Color3"), Color3.fromRGB(20, 20, 20))
    }, lobbySheet)
    createRule(".Excited.Button", {
        BackgroundColor3: "$AccentColour"
    }, lobbySheet)
    createRule(".Excited.icon", {
        ImageColor3: "$BackgroundColour"
    }, lobbySheet)
    createRule(".Excited.text", {
        TextColor3: "$BackgroundColour"
    }, lobbySheet)
    createRule(".Excited.Button:Hover", {
        BackgroundColor3: addColor3(safeGetAttribute(lobbySheet, "AccentColour", "Color3"), Color3.fromRGB(-20, -20, -20))
    }, lobbySheet)
    createRule(".Button::UIPadding", {
        PaddingLeft: "$PaddingXL",
        PaddingRight: "$PaddingXL",
        PaddingBottom: "$PaddingTL",
        PaddingTop: "$PaddingTL"
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
    createRule(".debugRed", {
        BackgroundColor3: Color3.fromRGB(255, 0, 0),
        TextColor3: Color3.fromRGB(255, 0, 0),
        ImageColor3: Color3.fromRGB(255, 0, 0),
    }, lobbySheet)
    createRule(".loadoutCard", {
        BackgroundColor3: "$AccentColour"
    }, lobbySheet)
    createRule("UIListLayout.paddingStandard", {
        Padding: "$PaddingL"
    }, lobbySheet)
    createRule("UIListLayout.paddingSmall", {
        Padding: "$PaddingS"
    }, lobbySheet)
    createRule("UIListLayout.paddingMini", {
        Padding: "$PaddingXS"
    }, lobbySheet)
    createRule("UIListLayout.paddingTiny", {
        Padding: "$PaddingXXS"
    }, lobbySheet)
    createRule(".paddingStandard::UIPadding", {
        PaddingLeft: "$PaddingL",
        PaddingRight: "$PaddingL",
        PaddingBottom: "$PaddingL",
        PaddingTop: "$PaddingL"
    }, lobbySheet)
    createRule(".paddingSmall::UIPadding", {
        PaddingLeft: "$PaddingS",
        PaddingRight: "$PaddingS",
        PaddingBottom: "$PaddingS",
        PaddingTop: "$PaddingS"
    }, lobbySheet)
    createRule(".paddingGiant::UIPadding", {
        PaddingLeft: "$PaddingXXL",
        PaddingRight: "$PaddingXXL",
        PaddingBottom: "$PaddingXXL",
        PaddingTop: "$PaddingXXL"
    }, lobbySheet)
    createRule(".paddingMini::UIPadding", {
        PaddingLeft: "$PaddingS",
        PaddingRight: "$PaddingS",
        PaddingBottom: "$PaddingXS",
        PaddingTop: "$PaddingXS"
    }, lobbySheet)
    createRule(".paddingTiny::UIPadding", {
        PaddingLeft: "$PaddingXS",
        PaddingRight: "$PaddingXS",
        PaddingBottom: "$PaddingXXS",
        PaddingTop: "$PaddingXXS"
    }, lobbySheet)
    createRule(".menuBarButtonsContainer::UIStroke", {
        Color: "$BorderColour",
        BorderStrokePosition: Enum.BorderStrokePosition.Inner
    }, lobbySheet)
    createRule(".questsTitle::UIPadding", {
        PaddingLeft: "$PaddingL",
        PaddingRight: "$PaddingL",
        PaddingBottom: "$PaddingXXL",
        PaddingTop: "$PaddingXXL"
    }, lobbySheet)
    createRule(".questsTitle", {
        BackgroundColor3: addColor3(safeGetAttribute(lobbySheet, "BackgroundColour", "Color3"), Color3.fromRGB(30, 30, 30))
    }, lobbySheet)
    createRule(".tableOfQuest", {
        BackgroundColor3: "$backgroundQuestColour"
    }, lobbySheet)
    createRule(".tableOfQuest.finished", {
        BackgroundColor3: "$PositiveColour"
    }, lobbySheet)
    createRule(".textOnDark.completed", {
        TextColor3: "$SecondaryAccentColour"
    }, lobbySheet)

    createRule(".menuButton", { BackgroundTransparency: 1, BackgroundColor3: "$AccentColour" }, lobbySheet);
    createRule(".menuButton.defaultMenuButton:Hover", { BackgroundTransparency: 0.9 }, lobbySheet);
    createRule(".menuButton.defaultMenuButton:Press", { BackgroundTransparency: 0.9 }, lobbySheet);
    createRule(".menuButton.defaultMenuButton.selected", { BackgroundTransparency: 0, BackgroundColor3: "$AccentColour" }, lobbySheet);
    createRule(".menuButton.shopMenuButton.selected", { BackgroundColor3: "$PositiveColour" }, lobbySheet);
    createRule(".menuButton.shopMenuButton:Hover, .menuButton.shopMenuButton:Press", { BackgroundTransparency: 0, BackgroundColor3: "$PositiveColour" }, lobbySheet);
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