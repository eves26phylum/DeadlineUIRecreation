import React, { useState, useEffect } from "@rbxts/react";
import { RunService } from "@rbxts/services";

export function useTimeStamp(timeStampEnd: number, timeStampSetState: React.Dispatch<React.SetStateAction<number>>) {
    useEffect(() => {
        const conn = RunService.Heartbeat.Connect(() => {
            timeStampSetState(timeStampEnd - os.time())
        })
        return () => conn.Disconnect();
    }, []);
}