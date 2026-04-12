import React, { useContext, createContext, useState } from "@rbxts/react";
import { moneyFormat, UiContextType, AppContextType } from "shared/types/deadlineClientTypes";
const AppContext = createContext<AppContextType | undefined>(undefined);
const UiContext = createContext<UiContextType | undefined>(undefined);

export function AppContextProvider({APPCONTEXT, children}: {APPCONTEXT: AppContextType, children: React.ReactNode}) {
    return <AppContext.Provider value={APPCONTEXT}>{children}</AppContext.Provider>;
}
export function UiContextProvider({UICONTEXT, children}: {UICONTEXT: UiContextType, children: React.ReactNode}) {
    return <UiContext.Provider value={UICONTEXT}>{children}</UiContext.Provider>;
}
export function useAppContext(): AppContextType {
    const appContext = useContext(AppContext);
    if (!appContext) error("useAppContext was either used before declaration or used without a provider");
    return appContext;
}
export function useUiContext(): UiContextType {
    const uiContext = useContext(UiContext);
    if (!uiContext) error("useUiContext was either used before declaration or used without a provider");
    return uiContext;
}