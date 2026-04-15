import React, {useState, useEffect, useCallback} from '@rbxts/react';

// Solves the lack of align-self
// new me: VerticalFlex and HorizontalFlex existed this whole time 🤦😭
// SpaceBetween exists and I haven't noticed
export function useAbsoluteAxis(whichAxis: 'X' | 'Y') {
    const [refBase, setRefBase] = useState<Frame | undefined>();
    const [axis, setAxis] = useState(0);
    const refFunction = useCallback((instance: Frame | undefined) => {
        // print("But I did update the state though..");
        setRefBase(instance);
    }, []);
    useEffect(() => {
        if (!refBase) return /* print("Ref base doesn't exist") */;
        const conn = refBase.GetPropertyChangedSignal("AbsoluteSize").Connect(() => {
            setAxis(refBase.AbsoluteSize[whichAxis]);
        });
        setAxis(refBase.AbsoluteSize[whichAxis]);
        return () => conn.Disconnect();
    }, [refBase]);
    return [axis, refFunction] as const;
}