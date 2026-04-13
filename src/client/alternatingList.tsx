import React from "@rbxts/react";
import { Basic } from "./easyobjects";
import { Error } from "@rbxts/luau-polyfill";
import { array, arrayOf } from "@rbxts/react/src/prop-types";

export function AlternatingList({arrayOfChildren}: {arrayOfChildren?: React.ReactNode[]}) {
    if (!arrayOfChildren) throw new Error("Altenraitsch Liste eitch nè childre Haeg");
    return <Basic>
        {
            (arrayOfChildren as defined[]).map((children: React.ReactNode, index: number, array: readonly React.ReactNode[]) => {
                if (!children) throw new Error("Skaël vek Altenraitsch Liste kerlusk eitch nòn Haeg"); // React reterd huratican Bovkov schlkovo pan
                const isEven: boolean = (index % 2) === 0;
                const boxTags = ["veryGenericBox"];
                if (isEven) boxTags.push("alternate");
                return <Basic BackgroundTransparency={0.5} tags={boxTags}>{children}</Basic>;
            })
        }
    </Basic>;
}