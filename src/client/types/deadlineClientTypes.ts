import React from '@rbxts/react';
import { clientThemeTypes } from './clientThemeTypes';
import { TableOfQuestsType } from 'client/questTable';

export type moneyFormat = {
    newTaiwanDollars: number,
    biitcoin: number
}
export interface AppContextType {
    states: {
        money: moneyFormat,
        setMoney: React.Dispatch<React.SetStateAction<moneyFormat>>,
        questsFinishTimeSeconds: number,
        setQuestsFinishTimeSeconds: React.Dispatch<React.SetStateAction<number>>,
        questTableState: TableOfQuestsType[],
        setQuestTableState: React.Dispatch<React.SetStateAction<TableOfQuestsType[]>>
    }
}

export interface UiContextType {
    states: {
        selectedPage: number,
        setSelectedPage: React.Dispatch<React.SetStateAction<number>>
    },
    themes: clientThemeTypes
}

export interface gameLoadoutData {

}