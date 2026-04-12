import React, { useState } from "@rbxts/react";
import { BasicScroll, Basic } from "./easyobjects";
export interface TableOfQuestsType {
    name: string,
    progress: {
        now: number,
        finish: number
    },
    experienceAmount: number,
    newTaiwanDollarsAmount: number
}
export function Quest({tableQuest}: {tableQuest: TableOfQuestsType}) {
    return <Basic tags={["tableOfQuest"]} Size={new UDim2(1, 0, 0, 0)}>
        <Basic tags={["actionContainer"]} flexProps={{FillDirection: Enum.FillDirection.Horizontal}}>
            <Basic tags={["currencyBubbleCardObject"]} Size={new UDim2(0, 24, 0, 24)}></Basic>
        </Basic>
        </Basic>;
}
export function QuestTable({tableOfQuests}: {tableOfQuests?: TableOfQuestsType[]}) {
    return <BasicScroll>
        {tableOfQuests ? tableOfQuests.map((value: TableOfQuestsType, index: number, array: readonly TableOfQuestsType[]) => {
            return <Quest tableQuest={value}/>;
        }) : "Table is quite empty. Nothing exists here."}
    </BasicScroll>
}