import React from "@rbxts/react";
import { Basic, Button, Text } from "./easyobjects";
import { ButtonProps } from "./easyobjects";
import { useAbsoluteAxis } from "./hooks/useAbsoluteAxis";

export function SpawnButton({...children}) {
    return <Button tags={["spawnButtonMain"]} flexProps={{HorizontalAlignment: Enum.HorizontalAlignment.Left, FillDirection: Enum.FillDirection.Horizontal, ItemLineAlignment: Enum.ItemLineAlignment.Center}}>
            {children}
        </Button>
}
export function SpawnButtonLobbyConfig({}) {
    return <SpawnButton>
            <imagelabel Size={new UDim2(0, 32, 0, 32)} ImageColor3={Color3.fromRGB(0, 0, 0)} Tag={"icon"} BackgroundTransparency={1} Image={"rbxassetid://7072720722"}/>
            <Basic>
                <Text Tag={"textTitleLargerSubheading textOnLight"} text="PLAY"/>
                <Text Tag={"textTitleSubheading textOnDemotivationCycle"} text="JOIN RANDOM SERVER"/>
            </Basic>
        </SpawnButton>
}
export function LiquidGlassSpawnButton({text, icon, ...props}: {text: string, icon: string} & ButtonProps) {
    return <Button tags={["spawnButton"]} flexProps={{HorizontalAlignment: Enum.HorizontalAlignment.Left, FillDirection: Enum.FillDirection.Horizontal, ItemLineAlignment: Enum.ItemLineAlignment.Center}} {...props}>
            <imagelabel Size={new UDim2(0, 32, 0, 32)} Tag={"icon"} BackgroundTransparency={1} Image={icon}/>
            <Text Tag={"textTitleSubheading textOnDark"} text={text}/>
        </Button>
}
export function ProductionLobbySpawnConfig() {
    const [axis_content, refFunction] = useAbsoluteAxis("X");
    return <Basic tags={["zerohourspawnconfig"]} BackgroundTransparency={1} BackgroundColor3={Color3.fromRGB(255, 0, 0)}>
        <Basic>
            <Text Tag={"textTitleLargerSubheading textOnDemotivationCycle"} RichText={true} text="<i>LOBBY</i>"/>
            <Text Tag={"textTitleMain textOnDark ZeroHourLogo"} text="ZERO HOUR"/>
        </Basic>
        <Basic dog={refFunction} tags={["zerohourspawnconfig"]}>
            <SpawnButtonLobbyConfig/>
            <LiquidGlassSpawnButton Size={new UDim2(0, axis_content, 0, 0)} text="LOADOUT" icon="rbxassetid://7072724538"/>
            <LiquidGlassSpawnButton Size={new UDim2(0, axis_content, 0, 0)} text="SELECT A SERVER" icon="rbxassetid://7072718266"/>
            <LiquidGlassSpawnButton Size={new UDim2(0, axis_content, 0, 0)} text="SHOOTING RANGE" icon="rbxassetid://7072723337"/>
        </Basic>
    </Basic>
}