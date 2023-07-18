import styled from "styled-components";
import { Loader } from "../../components/Loader";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;
const fontSize = 20;

export const Editor = () => {
    const [textArray, setTextArray]: [any[], any] = useState([]);

    const setRandomTextArray = (index: number) => {
        const newTextArray = [];
        const lineCount = getLineCount();
        const letterCount = getLetterCount();

        for (let i = 0; i < lineCount; i++) {
            let spacePosition = null;
            // if (Math.abs(lineCount / 2 - i) < (lineCount / 2) * (index / 100)) {
            if (
                i < (lineCount / 2) * (index / 100) ||
                i > lineCount - (lineCount / 2) * (index / 100)
            ) {
            } else {
                spacePosition = Math.round(
                    Math.sin(
                        (i * Math.PI) / (lineCount * ((100 - index) / 100))
                    ) *
                        (letterCount / 2) *
                        ((100 - index) / 100)
                );
            }
            console.log(spacePosition);

            newTextArray.push(getRandomText(letterCount, spacePosition));
        }
        setTextArray(newTextArray);
    };

    let index = 0;

    useEffect(() => {
        setInterval(() => {
            setRandomTextArray(Math.sin((Math.PI * 2 * index) / 100) * 100);

            index += 2;
        }, 200);
    }, []);

    return (
        <Wrapper className="flex justify-center items-center bg-[#0A062E]">
            <svg className="bg-[rgb(6,20,52)] w-[90vw] h-[90vh] rounded-[5vw]">
                {textArray.map((text: string, index: number) => (
                    <text
                        key={`${index}line`}
                        x={0}
                        y={fontSize * index}
                        fill={"rgb(125,157,223)"}
                        fontSize={fontSize}
                        style={{ whiteSpace: "pre" }}
                    >
                        {text}
                    </text>
                ))}
            </svg>
        </Wrapper>
    );
};

const isRange = (value: number, key: number, offset: number) => {
    return value <= key + offset && value >= key - offset;
};
const getRandomText = (length: number, spacePosition: any) => {
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

const getLetterCount = () => {
    const font = `${fontSize}px arial`;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as any;
    context.font = font;
    const metrics = context.measureText("h");
    return Math.round((window.innerWidth * 0.9) / metrics.width);
};

const getLineCount = () => {
    return Math.round((window.innerHeight * 0.9) / fontSize);
};

export default Editor;
