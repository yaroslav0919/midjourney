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
        const lineCount = getLineCount(fontSize);
        const letterCount = getLetterCount(`${fontSize}px arial`);

        for (let i = 0; i < lineCount; i++) {
            newTextArray.push(getRandomText(letterCount, index));
        }
        setTextArray(newTextArray);
    };
    let index = 0;
    useEffect(() => {
        setInterval(() => {
            setRandomTextArray(index);
            index++;
            if (index >= getLetterCount(`${fontSize}px arial`)) index = 0;
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

const getRandomText = (length: number, spaceCount: number) => {
    let result = "";

    const characters = "abcdefghijklmnopqrstuvwxyz0123456789/?-$[]";
    const charactersLength = characters.length;
    let counter = 0;

    while (counter < length) {
        if (Math.random() < 0.5) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        } else {
            result += "  ";
        }
        counter += 1;
    }
    return result;
};

const getLetterCount = (font: any) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as any;
    context.font = font;
    const metrics = context.measureText("h");
    return Math.round((window.innerWidth * 0.9) / metrics.width);
};

const getLineCount = (fs: number) => {
    return Math.round((window.innerHeight * 0.9) / fs);
};

export default Editor;
