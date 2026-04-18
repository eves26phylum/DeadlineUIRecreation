import React, { StrictMode, useEffect, useRef, useState, useCallback } from "@rbxts/react";
import useTags from './hooks/useTags';
import motion from '@rbxts/react-motion';

export interface DOMDefinition {
    tags?: string[],
    children?: React.ReactNode,
    flexProps?: Partial<React.InstanceProps<UIListLayout>>,
    textProps?: Partial<React.InstanceProps<TextLabel>>
}
export interface BasicProps extends DOMDefinition, Partial<React.InstanceProps<Frame>> {
    dog?: (arg0: Frame | undefined) => void
}
export interface ButtonProps extends DOMDefinition, Partial<React.InstanceProps<TextButton>> {
    frameProps?: BasicProps,
    btnChildren?: React.ReactNode
}
export interface TextProps extends Partial<React.InstanceProps<TextLabel>> {
    text: string,
    children?: React.ReactNode
}
export function Text({text, children, ...textProps}: TextProps) {
    return  <textlabel
                AutomaticSize={Enum.AutomaticSize.XY}
                Size={new UDim2(0, 0, 0, 0)}
                BackgroundTransparency={1}
                BorderSizePixel={0}
                TextXAlignment={Enum.TextXAlignment.Left}
                TextYAlignment={Enum.TextYAlignment.Top}
                Text={text}
                {...textProps}
            >{children}</textlabel>
}
export function Basic({flexProps, textProps, children, dog, tags = [], ...restProps}: BasicProps) {
    const ref = useRef<Frame>();
    useTags(ref, tags);
    const combinedRef = useCallback((instance: Frame | undefined) => {
        ref.current = instance;
        dog?.(instance);
    }, [dog]);

	return (
		<frame
            ref = {combinedRef}
			AutomaticSize={Enum.AutomaticSize.XY}
			Size={new UDim2(0, 0, 0, 0)}
			BackgroundTransparency={1}
			BorderSizePixel={0}
			{...restProps}
		>
            <uilistlayout
                FillDirection={Enum.FillDirection.Vertical}
                Padding={new UDim(0, 0)}
                HorizontalAlignment={Enum.HorizontalAlignment.Left}
                VerticalAlignment={Enum.VerticalAlignment.Top}
                SortOrder={Enum.SortOrder.Name}
                {...flexProps}
            />
            {typeIs(children, "string") ? (
                <Text text={children} {...textProps}/>
            ) : children}
		</frame>
	);
}

export function BasicScroll({children, scrollChildren, tags = [], scrollProps = {}, ...restProps}: BasicProps & {scrollChildren?: React.ReactNode, scrollProps?: Partial<React.InstanceProps<ScrollingFrame>>}) {
    const ref = useRef<ScrollingFrame>();
    useTags(ref, tags);
	return (
		<scrollingframe
            ref = {ref}
			AutomaticSize={Enum.AutomaticSize.XY}
			Size={new UDim2(0, 0, 0, 0)}
			BackgroundTransparency={1}
			BorderSizePixel={0}
			ScrollBarThickness={5}
			CanvasSize={new UDim2(0, 0, 0, 0)}
			AutomaticCanvasSize={Enum.AutomaticSize.XY}
			{...scrollProps}
		>
            {scrollChildren}
            <Basic {...restProps}>
                {children}
            </Basic>
		</scrollingframe>
	);
}

export function Button({btnChildren, children, tags = [], flexProps, frameProps, textProps, ...restProps}: ButtonProps) {
    const ref = useRef<TextButton>();
    useTags(ref, tags);
    return <textbutton ref={ref} 
        AutoButtonColor={false} 
        AutomaticSize={Enum.AutomaticSize.XY}
        Size={new UDim2(0, 0, 0, 0)} 
        BackgroundTransparency={0} 
        BorderSizePixel={0}
        {...restProps}
        Text={""}
        TextSize={1}>
        {btnChildren}
        {/* Oh no */}
        <Basic
            flexProps={{HorizontalAlignment: Enum.HorizontalAlignment.Center, ...flexProps}}
            textProps={
                {
                    ...textProps
                }
            }
            {...frameProps}
        >
            {children}
        </Basic>
    </textbutton>
}