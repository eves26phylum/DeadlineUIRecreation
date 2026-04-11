import React from "@rbxts/react";
export type Theme = typeof DefaultTheme;
export const DefaultTheme = {
    Gap: { Small: 4, Medium: 8, Large: 16 },
    FontSize: { Body: 14, Heading: 24 },
} as const;

export const ThemeContext = React.createContext<Theme>(DefaultTheme);