export type cameraType = "playerBound" | "presentationCamera";
export interface cameraState {
    cameraType: cameraType,
    cameraCFrame: CFrame
}
export interface playerFighterState {
    CameraState: cameraState
}
export const PlayerFighterState: playerFighterState = {
    CameraState: {
        cameraType: "playerBound",
        cameraCFrame: new CFrame()
    }
};