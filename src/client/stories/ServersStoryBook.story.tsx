import React, { StrictMode, useEffect, useState, useCallback } from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { InferProps } from "@rbxts/react/src/prop-types";
import { SideBySideList } from "client/ServersList";
import { Styles } from "client/styles";
import { Basic } from "client/easyobjects";
// export interface mapData {
//     mapImage: string,
//     mapName: string,
//     map_code: string
// } // add more properties
// export interface gamemodeData {
//     gamemode_code: string,
//     gamemodeName: string
// }
// export interface standardGamemodeData extends gamemodeData {
//     time_left: number
// }
// export interface robloxServerData {
//     playerCount: number,
//     // location: location,
//     location: string // temp
// }
// export interface productionServerData {
//     map: mapData,
//     gamemode: standardGamemodeData,
//     serverInfo: robloxServerData
// }
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
        return <StrictMode><Basic dog={refFunction}><stylelink StyleSheet={lobbySheet}/><SideBySideList serverData={
            [
                {
                    map: {
                        mapImage: "",
                        mapName: "Afghanistan",
                        map_code: "afghanistan"
                    },
                    gamemode: {
                        gamemode_code: "intimidation",
                        gamemodeName: "Intimidation",
                        time_left: 1576800000
                    },
                    serverInfo: {
                        playerCount: 175382,
                        location: "Nothing important"
                    }
                }
            ]
        }/></Basic></StrictMode>;
    }
};