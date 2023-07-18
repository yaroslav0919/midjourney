import styled from "styled-components";
import { Loader } from "../../components/Loader";
import { useEffect, useState } from "react";
import {
    getLineCount,
    getLetterCount,
    getRandomText,
} from "../../utils/helper";
import { fontSize } from "../../constants";
const Wrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

export const Editor = () => {
    const [textArray, setTextArray]: [any[], any] = useState([]);

    const setRandomTextArray = (index: number) => {
        const newTextArray = [];
        const lineCount = getLineCount();
        const letterCount = getLetterCount();

        for (let i = 0; i < lineCount; i++) {
            let spacePosition = null;
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

export default Editor;
