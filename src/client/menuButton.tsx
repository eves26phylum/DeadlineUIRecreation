import React, { StrictMode, useEffect, useState } from "@rbxts/react";
import { Basic, Button, DOMDefinition } from "./easyobjects";

export interface MenuButtonProps extends DOMDefinition, Partial<React.InstanceProps<TextButton>>{
    pageCallback: () => void, tags?: string[], children?: React.ReactNode,
    frameProps?: Partial<React.InstanceProps<Frame>>
}

export interface IconMenuButtonProps extends MenuButtonProps {
    image: string
}

export function MenuButton({pageCallback, tags = [], frameProps, children, ...props}: MenuButtonProps) {
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
export function IconMenuButton({image, children, frameProps, ...props}: IconMenuButtonProps) {
    return <MenuButton frameProps={frameProps} {...props}>
        <imagelabel Tag={"icon"} BackgroundTransparency={1} Image={image}/>
        {children}
    </MenuButton>
}