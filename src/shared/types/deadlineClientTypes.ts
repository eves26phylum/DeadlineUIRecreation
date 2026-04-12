import React from '@rbxts/react';
export type moneyFormat = {
    newTaiwanDollars: number,
    biitcoin: number
}
export interface AppContextType {
    states: {
        money: moneyFormat,
        setMoney: React.Dispatch<React.SetStateAction<moneyFormat>>,
    }
}

export interface UiContextType {
    states: {
        selectedPage: number,
        setSelectedPage: React.Dispatch<React.SetStateAction<number>>
    }
}