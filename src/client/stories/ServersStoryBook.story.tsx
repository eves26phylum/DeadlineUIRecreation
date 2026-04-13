import React, { StrictMode, useEffect, useState, useCallback } from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { InferProps } from "@rbxts/react/src/prop-types";
import { ProductionLobbySpawnConfig } from "client/productionLobby";
import { Styles } from "client/styles";
import { BaseButton } from "client/Button";
import { Basic } from "client/easyobjects";
import LobbyUI from "client/lobby";
import { StoryProps } from "@rbxts/ui-labs/src/Typing/Typing";

const controls = {
};
export = {
    react: React,
    reactRoblox: ReactRoblox,
    controls: controls,
    story: (props: InferProps<typeof controls> & {target: Instance}) => {
        const [theRef, setTheRef] = useState<Frame | undefined>(undefined);
        const [lobbySheet, setLobbySheet] = useState<StyleSheet | undefined>(undefined);

        const refFunction = useCallback((instance: Frame | undefined) => {
            setTheRef(instance);
        }, []);
        useEffect(() => {
            if (!theRef) return;
            if (lobbySheet) return; // PREVENT INFINITE LOOPS
            setLobbySheet(Styles({Parent: props.target}));
        }, [theRef])
        return <StrictMode><Basic dog={refFunction}><stylelink StyleSheet={lobbySheet}/><ProductionLobbySpawnConfig/></Basic></StrictMode>;
    }
};