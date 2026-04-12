export default function(notImplementedString: string) {
    print(string.rep("!", 10) + "\n" + string.rep("!", 10));
    warn(`${notImplementedString} is not implemented`);
    print(string.rep("!", 10) + "\n" + string.rep("!", 10));
    error(`not implemented: ${notImplementedString}`);
}