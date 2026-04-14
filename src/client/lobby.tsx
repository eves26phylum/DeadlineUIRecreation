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
import { PlayerFighterState } from "./vars/playerFighterState";
import motion from "@rbxts/react-motion";
import { UiContextProvider, AppContextProvider } from "./hooks/useAppContext";
import { moneyFormat } from "client/types/deadlineClientTypes";
import QuestsManager from "./questsManager";
import { TableOfQuestsType } from "./questTable";
import { Styles, createRule } from "./styles";
import { ProductionLobbySpawnConfig } from "./productionLobby";
import { SideBySideList } from "./ServersList";

export default function({children}: {children?: React.ReactNode}) {
    const uiPageLayoutRef = useRef<UIPageLayout>();
    const [money, setMoney] = useState<moneyFormat>({
        newTaiwanDollars: 0,
        biitcoin: 0
    });
    const [questsFinishTimeSeconds, setQuestsFinishTimeSeconds] = useState<number>(12000);
    const [questTableState, setQuestTableState] = useState<TableOfQuestsType[]>([
                {
                    name: "Feed 673382381 people for 20 years (solve world hunger)",
                    progress: {
                        now: 4,
                        finish: 673382381
                    },
                    newTaiwanDollarsAmount: math.huge,
                    experienceAmount: math.huge
                },
                {
                    name: "Consume 5 MRE packs",
                    progress: {
                        now: 15,
                        finish: 5
                    },
                    newTaiwanDollarsAmount: 2500,
                    experienceAmount: 1000,
                    finished: true
                },
                {
                    name: "Help 2 SYNO allies",
                    progress: {
                        now: 0,
                        finish: 2
                    },
                    newTaiwanDollarsAmount: 10000,
                    experienceAmount: 7000
                },
                {
                    name: "Headshot 3000 players with the Arid Eagle Mk RIZZ .50AE Conversion for Arid Eagle Mk RIZZ Eagle",
                    progress: {
                        now: 538,
                        finish: 3000
                    },
                    newTaiwanDollarsAmount: 676767,
                    experienceAmount: 30000
                },
                {
                    name: "Capture 20 points",
                    progress: {
                        now: 20,
                        finish: 20
                    },
                    newTaiwanDollarsAmount: 10000,
                    experienceAmount: 4000,
                    finished: true
                },
            ]);
    const APPCONTEXT = {
        states: {
            money: money,
            setMoney: setMoney,
            questsFinishTimeSeconds: questsFinishTimeSeconds,
            setQuestsFinishTimeSeconds: setQuestsFinishTimeSeconds,
            questTableState: questTableState,
            setQuestTableState: setQuestTableState
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
    // useEffect(()=>{
    //     task.delay(1, () => {
    //         setMoney({newTaiwanDollars: money.newTaiwanDollars + 10000, biitcoin: money.biitcoin + 10});
    //     });
    // }, [money.newTaiwanDollars])
    // const uiPageLayoutConnRef = useRef<RBXScriptConnection | undefined>(undefined);
    // useEffect(()=>{
    //     if (uiPageLayoutConnRef.current) uiPageLayoutConnRef.current.Disconnect();
    //     uiPageLayoutConnRef.current = uiPageLayoutRef.current?.GetPropertyChangedSignal("CurrentPage").Connect(() => {
    //         const currentPage: number | undefined = uiPageLayoutRef.current?.CurrentPage?.LayoutOrder;
    //         if (!currentPage) return warn("Current page was not found");
    //         print(currentPage);
    //         setSelectedPage(currentPage);
    //     })
    // }, [uiPageLayoutRef]) infinite loop
    // don't want to bother with trackpad support

    useEffect(()=>{
        uiPageLayoutRef.current?.JumpToIndex(selectedPage + 1);
    }, [selectedPage])
    return <AppContextProvider APPCONTEXT={APPCONTEXT}><UiContextProvider UICONTEXT={UICONTEXT}><screengui ResetOnSpawn={false} ScreenInsets={Enum.ScreenInsets.DeviceSafeInsets}>{children}
        <uilistlayout
            FillDirection={Enum.FillDirection.Vertical}
            Padding={new UDim(0, 0)}
            HorizontalAlignment={Enum.HorizontalAlignment.Left}
            VerticalAlignment={Enum.VerticalAlignment.Top}
            SortOrder={Enum.SortOrder.Name}
        />
        <MenuBarHome getMoney={()=>{return money;}} pageCallback={(name: string, index: number) => {}} AutomaticSize={Enum.AutomaticSize.Y}/>
        <motion.frame Size={new UDim2(1, 0, 1, 0)} BackgroundTransparency={1} Tag={"MenuContent"}>
            {/* <uiflexitem FlexMode={"Fill"}/> */}
            <uiflexitem FlexMode={"Fill"}/>
            <uipagelayout ref={uiPageLayoutRef} EasingDirection={Enum.EasingDirection.Out} EasingStyle={Enum.EasingStyle.Quart} TweenTime={0.25}/>
            <Basic BackgroundTransparency={0.5}>Hello I am the shop</Basic> {/* Negative one single page */}
            <Basic Size={new UDim2(0, 0, 1, 0)} BackgroundTransparency={0.5} flexProps={{FillDirection: Enum.FillDirection.Horizontal}}>
                <Basic Size={new UDim2(0.5, 0, 1, 0)} flexProps={{HorizontalAlignment: Enum.HorizontalAlignment.Center, VerticalAlignment: Enum.VerticalAlignment.Center}}>
                    <ProductionLobbySpawnConfig/>
                </Basic>
                <Basic Size={new UDim2(0.5, 0, 1, 0)} flexProps={{HorizontalAlignment: Enum.HorizontalAlignment.Center, VerticalAlignment: Enum.VerticalAlignment.Center}}>
                    <QuestsManager/>
                </Basic>
            </Basic>
            <Basic Size={new UDim2(1, 0, 1, 0)} tags={["SERVERS"]} BackgroundTransparency={0.5}></Basic>
            <Basic BackgroundTransparency={0.5}>Hello I am the loadout</Basic>
            <Basic BackgroundTransparency={0.5}>Hello I am the profile</Basic>
            <Basic BackgroundTransparency={0.5}>Hello I am the settings</Basic>
        </motion.frame>
    </screengui></UiContextProvider></AppContextProvider>
};