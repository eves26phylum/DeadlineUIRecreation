import React from "@rbxts/react";
import { Basic, Text } from "./easyobjects";
import { ListDrawer } from "./ListDrawer";
import { NotImplemented } from "./notImplementedInfo";
import { calculateProgressOnProgressData, playerLevelsInfo } from "shared/types/gameData";
import { playerStatisticsInfo } from "shared/types/gameData";

export function ProfileStatCard({icon, name, amount}: {icon: string, name: string, amount: number}) {
    return <Basic Size={new UDim2(0, 200, 0, 200)} BackgroundTransparency={0} tags={["veryGenericBox", "hasOutline"]} AutomaticSize={Enum.AutomaticSize.None} flexProps={{Tag: "paddingSmall", HorizontalAlignment: Enum.HorizontalAlignment.Center, VerticalAlignment: Enum.VerticalAlignment.Center, ItemLineAlignment: Enum.ItemLineAlignment.Center}}>
        <imagelabel Image={icon} BackgroundTransparency={1} Tag={"icon textOnDemotivationCycle"} Size={new UDim2(0, 70, 0, 70)}/>
        <Text Tag="textTitleLargerSubheading textOnDark" text={amount}/>
        <Text Tag="textTitleSubheading textOnDemotivationCycle" text={name}/>
    </Basic>
}
export function ProfileLevelProgressBar({level}: {level: playerLevelsInfo}) {
    return  <Basic flexProps={{Tag: "paddingSmall", HorizontalFlex: Enum.UIFlexAlignment.Fill}}>
                <Basic flexProps={{HorizontalFlex: Enum.UIFlexAlignment.SpaceBetween, FillDirection: Enum.FillDirection.Horizontal}}>
                    <Text text={`Level ${level.level}`} Tag="textTitleSubheading textOnDark"/>
                    <Basic flexProps={{FillDirection: Enum.FillDirection.Horizontal}}>
                        <Text text={level.progress.now} Tag="textTitleSubheading textOnDark"/>
                        <Text text=" / " Tag="textTitleSubheading textOnDemotivationCycle"/>
                        <Text text={level.progress.finish} Tag="textTitleSubheading textOnDark"/>
                    </Basic>
                </Basic>
                <Basic Size={new UDim2(0, 600, 0, 20)} AutomaticSize={Enum.AutomaticSize.None} BackgroundTransparency={1} tags={["hasOutline"]}>
                    <Basic Size={new UDim2(calculateProgressOnProgressData(level.progress), 0, 1, 0)} tags={["progressFilling"]} BackgroundTransparency={0}/>
                </Basic>
            </Basic>
}
export function ProfileCard({playerInfo}: {playerInfo: playerStatisticsInfo}) {
    return  <ListDrawer>
                <Basic tags={["paddingStandard"]}>
                    <Text Tag={"textTitleLargerSubheading textOnDark"} text={`${playerInfo.playerDescriptior.name.upper()}'S PROFILE`}/>
                </Basic>
                <Basic Size={new UDim2(0, 0, 0, 1)} tags={["hasOutline"]} AutomaticSize={Enum.AutomaticSize.None}/>
                <Basic tags={["paddingStandard"]} flexProps={{Tag: "paddingStandard"}}>
                    <imagelabel Size={new UDim2(0, 100, 0, 100)}/>
                    <ProfileLevelProgressBar level={playerInfo.levelsInfo}/>
                </Basic>
            </ListDrawer>
}
export function PlayerUIProfile({playerInfo}: {playerInfo: playerStatisticsInfo}) {
    return <Basic flexProps={{FillDirection: Enum.FillDirection.Horizontal, Tag: "paddingSmall"}} Size={new UDim2(0, 0, 1, 0)} AutomaticSize={Enum.AutomaticSize.X}>
        <Basic flexProps={{Tag: "paddingSmall", HorizontalFlex: Enum.UIFlexAlignment.Fill}} Size={new UDim2(0, 0, 1, 0)}>
            <ProfileCard playerInfo={playerInfo}/>
            <ListDrawer flexProps={{VerticalAlignment: Enum.VerticalAlignment.Center, HorizontalAlignment: Enum.HorizontalAlignment.Center}}>
                <uiflexitem FlexMode={"Fill"}/>
                <NotImplemented/>
            </ListDrawer>
        </Basic>
        <Basic flexProps={{Tag: "paddingSmall", HorizontalFlex: Enum.UIFlexAlignment.Fill}} Size={new UDim2(0, 0, 1, 0)}>
            <frame BackgroundTransparency={1} Size={new UDim2(0, 0, 0, 0)} AutomaticSize={Enum.AutomaticSize.XY}>
                <uigridlayout FillDirectionMaxCells={2} SortOrder={"Name"} Tag="paddingSmall" CellSize={new UDim2(0, 200, 0, 200)}/>
                <ProfileStatCard icon="rbxassetid://7072715827" name="KILLS" amount={playerInfo.totalInfo.leaderboardInfo.kills}/>
                <ProfileStatCard icon="rbxassetid://7072725342" name="DEATHS" amount={playerInfo.totalInfo.leaderboardInfo.deaths}/>
                <ProfileStatCard icon="rbxassetid://7072715646" name="MATCHES" amount={playerInfo.totalInfo.rounds_played}/>
                <ProfileStatCard icon="rbxassetid://7072716549" name="POINTS TAKEN" amount={playerInfo.totalInfo.leaderboardInfo.capture_finish}/>
            </frame>
            <ListDrawer flexProps={{VerticalAlignment: Enum.VerticalAlignment.Center, HorizontalAlignment: Enum.HorizontalAlignment.Center}}>
                <uiflexitem FlexMode={"Fill"}/>
                <NotImplemented/>
            </ListDrawer>
        </Basic>
    </Basic>
}