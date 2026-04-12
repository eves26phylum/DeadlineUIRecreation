import ignoreProcessor from "./ignoreProcessor";
import { Players } from "@rbxts/services";
// when player joins or map changes
Players.GetPlayers().forEach((thisPlayer: Player, index: number, playersList: readonly Player[]) => {
    ignoreProcessor(thisPlayer);
});

Players.PlayerAdded.Connect((thisPlayer: Player) => ignoreProcessor);