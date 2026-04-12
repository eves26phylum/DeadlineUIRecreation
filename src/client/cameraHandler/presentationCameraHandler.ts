import { playerFighterState, cameraType } from "client/vars/playerFighterState";
export function presentationCameraHandler(currentCamera: Camera, PlayerFighterState: playerFighterState) {
    switch(PlayerFighterState.CameraState.cameraType) {
        case "presentationCamera":
            currentCamera.CameraType = Enum.CameraType.Scriptable;
            currentCamera.CFrame = PlayerFighterState.CameraState.cameraCFrame;
            break
        case "playerBound":
            currentCamera.CameraType = Enum.CameraType.Custom;
            break
    }
    return;
}