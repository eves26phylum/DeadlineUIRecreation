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
import { Styles, createRule } from "./styles";
const lobbySheet = Styles();
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