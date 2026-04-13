import { Basic, Button, Text, DOMDefinition, ButtonProps } from "./easyobjects";
import React, { useState, useEffect } from "@rbxts/react";
export interface baseButtonProps extends ButtonProps {
    clickCallback?: () => void
}

export interface iconBaseButtonProps extends baseButtonProps {
    image?: string,
    iconTags?: string[],
    textTags?: string[]
}
export function BaseButton({children, clickCallback = () => {}, tags = []}: baseButtonProps) {

    return  <Button tags={["Button", "miniUICorner", ...tags]} Event={{MouseButton1Click: clickCallback}} flexProps={{FillDirection: Enum.FillDirection.Horizontal, ItemLineAlignment: Enum.ItemLineAlignment.Center}}>
                {children}
            </Button>
}
export function IconBaseButton({children, tags = [], clickCallback, image, iconTags = [], textTags = []}: iconBaseButtonProps) {
    return  <BaseButton tags={[...tags]} clickCallback={clickCallback}>
                {image ? <imagelabel Tag={"icon " + iconTags.join(" ")} BackgroundTransparency={1} Image={image} /> : <></>}
                <textlabel AutomaticSize={Enum.AutomaticSize.XY} Tag={"text textStandard " + textTags.join(" ")} BackgroundTransparency={1} BorderSizePixel={0} Text={typeIs(children, "string") ? children : "[Button::IconBaseButton] Children is not a string"}/>
            </BaseButton>
} // textOnDark
//tags={["Ghost"]} iconTags={["Ghost"]} textTags={["Ghost"]}