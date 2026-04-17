import React, { StrictMode, useEffect, useState, useCallback } from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { InferProps } from "@rbxts/react/src/prop-types";
import { LoadoutEditor } from "client/loadout";
import { Styles } from "client/styles";
import { Basic } from "client/easyobjects";
import { LoadoutBullshit } from "client/types/deadlineClientTypes";

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
        const [listChildren, setListChildren] = useState<LoadoutBullshit[]>([
            {name: "HI", loadoutInterfaceData: {}}
        ]);
        return <StrictMode><Basic dog={refFunction}><stylelink StyleSheet={lobbySheet}/><LoadoutEditor listChildren={listChildren} setListChildren={setListChildren} selectedIndex={0} callbacks={{
                    onRename: (index: number, name: string) => {

                    },
                    onMove: (index: number, pos: number) => {
                        
                    },
                    onSelect: (index: number) => {
                        print("SRNHISRDFIOJHBRDJOIHJOIHSJPIOEDHJPOISJHIPOBSEDJHOPGBI")
                    },
                    onClone: (index: number) => {

                    },
                    onDelete: (index: number) => {
                        const clonedListChildren = [...listChildren];
                        // clonedListChildren.pop(index);
                        setListChildren(clonedListChildren);
                    }
                }}/></Basic></StrictMode>;
    }
};