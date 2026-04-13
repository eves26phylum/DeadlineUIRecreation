import { Workspace } from "@rbxts/services";
import { processMapInfo } from "./ignoreProcessorScripts/mapInfoProcessor";

const signature = "[mapUtility::IgnoreProcessor]"
export default function(clientTriggered: Player, ignoreFolder: Instance | undefined = Workspace.FindFirstChild("ignore")) { // can extend for script created ignores. for now, this small scale solution is suitable
    assert(ignoreFolder && ignoreFolder.IsA("Folder"), `${signature} ignore folder does not exist`);
    // map info processor
    const mapInfo: Instance | undefined = ignoreFolder.FindFirstChild("mapInfo");
    assert(mapInfo && mapInfo.IsA("Folder"), `${signature} map info folder does not exist`);
    processMapInfo(clientTriggered, mapInfo);
}