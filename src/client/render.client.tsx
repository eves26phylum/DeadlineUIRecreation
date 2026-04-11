import React, { StrictMode, useState, useEffect, useRef } from "@rbxts/react";
import { createRoot, createPortal } from '@rbxts/react-roblox';
import { Players, Workspace } from '@rbxts/services';
import LobbyUI from './lobby';
function main() {
    const localPlayer = Players.LocalPlayer;
    const PlayerGui = localPlayer.FindFirstChildWhichIsA("PlayerGui");
    if (!PlayerGui) {
        return;
    }

    const reactOwnedFolder = new Instance("Folder");
    reactOwnedFolder.Name = "React Objects";
    reactOwnedFolder.Parent = PlayerGui;

    const root = createRoot(reactOwnedFolder);
    root.render(
        <StrictMode>
            {
            createPortal(
                <LobbyUI/>, PlayerGui
            )
            }
        </StrictMode>
    );
}
main();