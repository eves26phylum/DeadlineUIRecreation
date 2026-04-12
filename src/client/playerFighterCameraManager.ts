import { RunService, Workspace } from "@rbxts/services";
import notImplemented from "./notImplemented";
import { PlayerFighterState, cameraState } from "./vars/playerFighterState";
import { presentationCameraHandler } from "./cameraHandler/presentationCameraHandler";
export function changeCameraStateVariables(thisCameraState: cameraState) {
    const currentCamera: Camera | undefined = Workspace.CurrentCamera;
    if (!currentCamera) return warn(`Current camera does not exist at timestamp: {"os_time": ${os.time()}, "os_clock": ${os.clock()}}`);
    PlayerFighterState.CameraState = thisCameraState
    switch (thisCameraState.cameraType) {
        case "presentationCamera":
            presentationCameraHandler(currentCamera, PlayerFighterState);
        default:
            notImplemented("playerBound");
    }
}
task.defer(function() {
    let currentCamera: Camera | undefined = Workspace.CurrentCamera;
    RunService.RenderStepped.Connect((deltaTime: number) => {
        if (!currentCamera) {
            currentCamera = Workspace.CurrentCamera;
            return warn("Current camera logic was not called because current camera does not exist")
        }
        presentationCameraHandler(currentCamera, PlayerFighterState);
        currentCamera.CFrame = PlayerFighterState.CameraState.cameraCFrame;
    })
})