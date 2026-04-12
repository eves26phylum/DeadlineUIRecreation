export function toMS(seconds: number): string {
    const mins = math.floor(seconds / 60);
    const secs = math.floor(seconds % 60);
    return `${string.format("%02d", mins)}:${string.format("%02d", secs)}`;
}

export function toHMS(s: number): string {
    return string.format("%02i:%02i:%02i", s / 3600, (s / 60) % 60, s % 60);
}
// got this from google since im not bothered to write this