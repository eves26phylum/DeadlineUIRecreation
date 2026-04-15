import React from "@rbxts/react";
import { Basic, BasicProps } from "./easyobjects";
import { Error } from "@rbxts/luau-polyfill";
import { array, arrayOf } from "@rbxts/react/src/prop-types";

export function AlternatingList({arrayOfChildren, children, bigProps, tags = [], ...props}: {arrayOfChildren?: React.ReactNode[], children?: React.ReactNode, bigProps?: BasicProps} & BasicProps) {
    if (!arrayOfChildren) throw new Error("Altenraitsch Liste eitch nè childre Haeg");
    return <Basic Size={new UDim2(1, 0, 0, 0)} {...bigProps}>
        {children}
        {
            (arrayOfChildren as defined[]).map((children: React.ReactNode, index: number, array: readonly React.ReactNode[]) => {
                if (!children) throw new Error("Skaël vek Altenraitsch Liste kerlusk eitch nòn Haeg"); // React reterd huratican Bovkov schlkovo pan
                const isEven: boolean = (index % 2) === 0;
                const boxTags = ["veryGenericBox", "alternateListItem", ...tags];
                if (isEven) boxTags.push("alternate");
                return <Basic BackgroundTransparency={0.5} Size={new UDim2(1, 0, 0, 0)} tags={boxTags} {...props}>{children}</Basic>;
            })
        }
    </Basic>;
}