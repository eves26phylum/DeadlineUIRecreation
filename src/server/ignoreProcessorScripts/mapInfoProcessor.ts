const signature = "[ignoreProcessor::mapInfoProcessor]"
import { ReplicatedStorage } from "@rbxts/services";
const remotes: Instance | undefined = ReplicatedStorage.FindFirstChild("Remotes");
assert(remotes && remotes.IsA("Folder"), `${signature} remotes folder does not exist`);
const lobbyCameraEvent: Instance | undefined = remotes.FindFirstChild("lobbyCameraEvent");
assert(lobbyCameraEvent && lobbyCameraEvent.IsA("RemoteEvent"), `${signature} lobby camera event does not exist`)
export function processMapInfo(clientTriggered: Player, mapInfo: Folder) {
    const cameraPresentationPositions: Instance | undefined = mapInfo.FindFirstChild("cameraPresentationPositions");
    assert(cameraPresentationPositions && cameraPresentationPositions.IsA("Folder"), `${signature} camera presentations folder does not exist`);
    const lobbyCamera: Instance | undefined = mapInfo.FindFirstChild("LobbyCamera");
    assert(lobbyCamera && lobbyCamera.IsA("BasePart"), `${signature} lobby camera does not exist`);
    (lobbyCameraEvent as RemoteEvent).FireClient(clientTriggered, lobbyCamera.CFrame);
}