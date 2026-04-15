export interface mapData {
    mapImage: string,
    mapName: string,
    map_code: string
} // add more properties
export interface gamemodeData {
    gamemode_code: string,
    gamemodeName: string
}
export interface standardGamemodeData extends gamemodeData {
    time_left: number
}
export interface robloxServerData {
    playerCount: number,
    maxPlayerCount: number,
    // location: location,
    location: string // temp
}
export interface productionServerData {
    map: mapData,
    gamemode: standardGamemodeData,
    serverInfo: robloxServerData
}