import React, { StrictMode, useEffect, useState } from "@rbxts/react";
import { Basic, Button, DOMDefinition } from "./easyobjects";

export interface MenuButtonProps {
    pageCallback: () => void, tags?: string[], children?: React.ReactNode,
}
export function MenuButton({pageCallback, tags = [], frameProps, children, ...props}: MenuButtonProps & DOMDefinition & {frameProps?: Partial<React.InstanceProps<Frame>>} & Partial<React.InstanceProps<TextButton>>) {
    return <Button 
        tags={[...tags, "menuButton"]}
        Event={{
            MouseButton1Click: () => pageCallback()
        }}
        frameProps={frameProps}
        {...props}
    >
        {children}
    </Button>
}
export function IconMenuButton({image, children, frameProps, ...props}: MenuButtonProps & {frameProps?: Partial<React.InstanceProps<Frame>>} & DOMDefinition & Partial<React.InstanceProps<TextButton>> & {image: string}) {
    return <MenuButton frameProps={frameProps} {...props}>
        <imagelabel Tag={"icon"} BackgroundTransparency={1} Image={image}/>
        {children}
    </MenuButton>
}