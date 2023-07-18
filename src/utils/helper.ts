import { fontSize } from "../constants";
import { isRange } from "../helper/math";

export const pauseEvent = (e: any) => {
    if (e.stopPropagation) e.stopPropagation();
    if (e.preventDefault) e.preventDefault();
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
};

export const getRandomText = (length: number, spacePosition: any) => {
    let result = "";

    const characters = "abcdefghijklmnopqrstuvwxyz0123456789/?-$[]";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        if (
            spacePosition &&
            (isRange(i, length / 2 - spacePosition, 1) ||
                isRange(i, length / 2 + spacePosition, 1))
        ) {
            result += "  ";
        } else {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
    }
    return result;
};

export const getLetterCount = () => {
    const font = `${fontSize}px arial`;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as any;
    context.font = font;
    const metrics = context.measureText("h");
    return Math.round((window.innerWidth * 0.9) / metrics.width);
};

export const getLineCount = () => {
    return Math.round((window.innerHeight * 0.9) / fontSize);
};
