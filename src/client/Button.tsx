import { Basic, Button, Text } from "./easyobjects";
import React, { useState, useEffect } from "@rbxts/react";

export function baseButton({children}: {children: React.ReactNode}) {

    return  <Button tags={["rerollButton", "rerollButtonMain", "miniUICorner"]} flexProps={{FillDirection: Enum.FillDirection.Horizontal, ItemLineAlignment: Enum.ItemLineAlignment.Center}}>
                {children}
            </Button>
}
export function iconBaseButton({children}: {children: React.ReactNode}) {
    
    return  <Button tags={["rerollButton", "rerollButtonMain", "miniUICorner"]} flexProps={{FillDirection: Enum.FillDirection.Horizontal, ItemLineAlignment: Enum.ItemLineAlignment.Center}}>
                <imagelabel Tag={"icon"} BackgroundTransparency={1} Image={"rbxassetid://7072721134"}/>
                <textlabel AutomaticSize={Enum.AutomaticSize.XY} Tag={"textStandard textOnDark"} BackgroundTransparency={1} BorderSizePixel={0} Text={typeIs(children, "string") ? children : "[Button::IconBaseButton] Children is not a string"}/>
            </Button>
}