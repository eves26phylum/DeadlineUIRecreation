export function addColor3(...color3: Color3[]) {
    const colourTable = [...color3];
    const channels = {
        "r": 0,
        "g": 0,
        "b": 0
    };
    colourTable.forEach((value: Color3, index: number, array: readonly Color3[]) => {
        channels.r += value.R;        
        channels.g += value.G;
        channels.b += value.B;
    })
    return Color3.fromRGB(
        math.min(255, channels.r * 255),
        math.min(255, channels.g * 255),
        math.min(255, channels.b * 255)
    )
}