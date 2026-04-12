import { playerFighterState } from "client/vars/playerFighterState";
export function presentationCameraHandler(currentCamera: Camera, PlayerFighterState: playerFighterState) {
    currentCamera.CameraType = Enum.CameraType.Scriptable;
    return;
}