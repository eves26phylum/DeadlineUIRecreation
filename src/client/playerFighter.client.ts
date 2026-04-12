const signature = "[playerFighter]"
import { ReplicatedStorage, Players, Workspace } from "@rbxts/services";
import { changeCameraStateVariables } from "./playerFighterCameraManager";
const LocalPlayer: Player = Players.LocalPlayer;
const remotes: Instance | undefined = ReplicatedStorage.FindFirstChild("Remotes");
assert(remotes && remotes.IsA("Folder"), `${signature} remotes folder does not exist`);
const lobbyCameraEvent: Instance | undefined = remotes.FindFirstChild("lobbyCameraEvent");
assert(lobbyCameraEvent && lobbyCameraEvent.IsA("RemoteEvent"), `${signature} lobby camera event does not exist`);

lobbyCameraEvent.OnClientEvent.Connect((receivedCameraPosition: CFrame) => {
    changeCameraStateVariables({
        cameraType: "presentationCamera",
        cameraCFrame: receivedCameraPosition
    })
})