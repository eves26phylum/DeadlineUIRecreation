import React, { StrictMode, useEffect, useState, useCallback } from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { InferProps } from "@rbxts/react/src/prop-types";
import { Styles } from "client/styles";
import { PlayerUIProfile } from "client/profile";
import { Basic } from "client/easyobjects";

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
        return <StrictMode><Basic dog={refFunction}><stylelink StyleSheet={lobbySheet}/><PlayerUIProfile
        playerInfo={{totalInfo:{
            rounds_played: 5, ballisticsInfo: {head: 15, left_arm_vis: 250, left_leg_vis: 3513, right_arm_vis: 4885, right_leg_vis: 1465, torso: 100},
            leaderboardInfo: {
                kills: 67,
                deaths: 6767,
                capture_finish: 5,
                points: 1
            }
        }, weaponSpecificInfo:{
            M4A1: {
                rounds_played: 5, ballisticsInfo: {head: 15, left_arm_vis: 250, left_leg_vis: 3513, right_arm_vis: 4885, right_leg_vis: 1465, torso: 100},
                leaderboardInfo: {
                    kills: 67,
                    deaths: 6767,
                    capture_finish: 5,
                    points: 1
                }
        }
        }, levelsInfo:{
            level: 67,
            progress: {
                now: 28888,
                finish: 77777
            }
        }, playerDescriptior:{
            name: "flanker2000Y2K"
        }}}/></Basic></StrictMode>;
    }
};
// export interface playerStatisticsInfo {
//     totalInfo: weaponLifetimeInfo,
//     weaponSpecificInfo: Record<weaponName, weaponLifetimeInfo>
//     levelsInfo: playerLevelsInfo,
//     playerDescriptior: playerProfilePlayerDescriptor
// }