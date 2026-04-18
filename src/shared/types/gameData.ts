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
export interface progress {
    start?: number,
    now: number,
    finish: number
}
export interface playerLevelsInfo {
    level: number,
    progress: progress
}
export interface weaponsInfoBallisticsInfo {
    head: number,
    left_arm_vis: number,
    right_arm_vis: number,
    left_leg_vis: number,
    right_leg_vis: number,
    torso: number
}
export interface leaderboardPlayerInfo {
    kills: number,
    deaths: number,
    capture_finish: number,
    points: number
}
export type weaponName = "M4A1"
export interface weaponLifetimeInfo {
    rounds_played: number,
    ballisticsInfo: weaponsInfoBallisticsInfo
    leaderboardInfo: leaderboardPlayerInfo
}
export interface playerStatisticsInfo {
    totalInfo: weaponLifetimeInfo,
    weaponSpecificInfo: Record<weaponName, weaponLifetimeInfo>
    levelsInfo: playerLevelsInfo
}