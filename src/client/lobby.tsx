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
import { LoadoutBullshit, moneyFormat } from "client/types/deadlineClientTypes";
import QuestsManager from "./questsManager";
import { TableOfQuestsType } from "./questTable";
import { Styles, createRule } from "./styles";
import { ProductionLobbySpawnConfig } from "./productionLobby";
import { SideBySideList } from "./ServersList";
import { ongoingWars } from "./getWars";
import { LoadoutEditor } from "./loadout";
import { defaultLoadout } from "./vars/mainClientConfig";

export default function({children}: {children?: React.ReactNode}) {
    const uiPageLayoutRef = useRef<UIPageLayout>();
    const [money, setMoney] = useState<moneyFormat>({
        newTaiwanDollars: 0,
        biitcoin: 0
    });
    const [questsFinishTimeSeconds, setQuestsFinishTimeSeconds] = useState<number>(12000);
    const [questTableState, setQuestTableState] = useState<TableOfQuestsType[]>([
                {
                    name: "Help 2 SYNO allies",
                    progress: {
                        now: 0,
                        finish: 2
                    },
                    newTaiwanDollarsAmount: 500,
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
                    name: "Headshot 30 players",
                    progress: {
                        now: 4,
                        finish: 30
                    },
                    newTaiwanDollarsAmount: 5000,
                    experienceAmount: 30000
                },
                {
                    name: "Headshot 30 players with the Arid Eagle Mk XIX .50AE Conversion",
                    progress: {
                        now: 1,
                        finish: 30
                    },
                    newTaiwanDollarsAmount: 5000,
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
    const [listChildren, setListChildren] = useState<LoadoutBullshit[]>([
        {...defaultLoadout}
    ]);
    const [selectedListChildren, setSelectedListChildren] = useState<number>(0);

    // get from datastore here
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
    // trackpad/scrolling page support incomplete

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
            <Basic Size={new UDim2(1, 0, 1, 0)} tags={["SERVERS"]} flexProps={{VerticalAlignment: Enum.VerticalAlignment.Center, HorizontalAlignment: Enum.HorizontalAlignment.Center}} BackgroundTransparency={0.5}><SideBySideList serverData={
            // [
            //     {
            //         map: {
            //             mapImage: "rbxassetid://127270860",
            //             mapName: "Afghanistan",
            //             map_code: "afghanistan"
            //         },
            //         gamemode: {
            //             gamemode_code: "intimidation",
            //             gamemodeName: "Intimidation",
            //             time_left: 630720000
            //         },
            //         serverInfo: {
            //             playerCount: 175382,
            //             maxPlayerCount: 8347860862658,
            //             location: "Nothing important"
            //         }
            //     }
            // ]
            ongoingWars
        }/></Basic>
            <Basic BackgroundTransparency={0.5} Size={new UDim2(1, 0, 1, 0)} AutomaticSize={Enum.AutomaticSize.None}>
                <LoadoutEditor callbacks={{
                    onRename: (index: number, name: string) => {
                        const clonedListChildren = [...listChildren];
                        clonedListChildren[index].name = name;
                        setListChildren(clonedListChildren);
                    },
                    onMove: (index: number, pos: number) => {
                        const target = index + pos;
                        if (target < 0 || target >= listChildren.size()) return;
                        const cloned = [...listChildren];
                        const item = cloned[index];
                        cloned.remove(index);
                        cloned.insert(target, item);
                        setListChildren(cloned);
                        setSelectedListChildren(target);
                    },
                    onSelect: (index: number) => {
                        setSelectedListChildren(index);
                    },
                    onClone: (index: number) => {
                        const clonedListChildren = [...listChildren];
                        const thisCloned = {...clonedListChildren[index]};
                        thisCloned.name = `${thisCloned.name} (Copy)`;
                        clonedListChildren.insert(index + 1, thisCloned);
                        setSelectedListChildren(index + 1);
                        setListChildren(clonedListChildren);
                    },
                    onDelete: (index: number) => {
                        const clonedListChildren = [...listChildren].filter((value, indexOfThis) => indexOfThis !== index);;
                        // clonedListChildren.pop(index);
                        setListChildren(clonedListChildren);
                    }
                }} listChildren={listChildren} setListChildren={setListChildren} selectedIndex={selectedListChildren}/>
            </Basic>
            <Basic BackgroundTransparency={0.5}>Hello I am the profile</Basic>
            <Basic BackgroundTransparency={0.5}>Hello I am the settings</Basic>
        </motion.frame>
    </screengui></UiContextProvider></AppContextProvider>
};