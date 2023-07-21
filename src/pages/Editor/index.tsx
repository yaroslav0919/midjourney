import { useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;

    #messenger {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: monospace;
        font-size: 20px;
        white-space: nowrap;
        text-shadow: 0 2px 2px rgba(#000, 0.9);
    }
`;
const agenceTitle = [
    String.raw`     _                                   _                                                  _           _   _                         _               `,
    String.raw`    /_\   __ _  ___ _ __   ___ ___    __| | ___    ___ ___  _ __ ___  _ __ ___  _   _ _ __ (_) ___ __ _| |_(_) ___  _ __    ___ _   _(_)___ ___  ___  `,
    String.raw`   //_\\ / _\ |/ _ \ '_ \ / __/ _ \  / _\ |/ _ \  / __/ _ \| '_ \ _ \| '_ \ _ \| | | | '_ \| |/ __/ _\ | __| |/ _ \| '_ \  / __| | | | / __/ __|/ _ \ `,
    String.raw`  /  _  \ (_| |  __/ | | | (_|  __/ | (_| |  __/ | (_| (_) | | | | | | | | | | | |_| | | | | | (_| (_| | |_| | (_) | | | | \__ \ |_| | \__ \__ \  __/ `,
    String.raw`  \_/ \_/\__, |\___|_| |_|\___\___|  \__,_|\___|  \___\___/|_| |_| |_|_| |_| |_|\__,_|_| |_|_|\___\__,_|\__|_|\___/|_| |_| |___/\__,_|_|___/___/\___| `,
    String.raw`         |___/                                                                                                                                        `,
];
const fleakTitle = [
    String.raw`   ___ _            _                      _ _       `,
    String.raw`  / __\ | ___  __ _| | __   /\/\   ___  __| (_) __ _ `,
    String.raw` / _\ | |/ _ \/ _\ | |/ /  /    \ / _ \/ _\ | |/ _\ |`,
    String.raw`/ /   | |  __/ (_| |   <  / /\/\ \  __/ (_| | | (_| |`,
    String.raw`\/    |_|\___|\__,_|_|\_\ \/    \/\___|\__,_|_|\__,_|`,
];

export const Editor = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const titleRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d") as any;
            canvas.width = window.innerWidth * 0.9;
            canvas.height = window.innerHeight * 0.8;

            let letters =
                "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
            const letterArray = letters.split("");

            const fontSize = 10;
            const columns = canvas.width / fontSize;

            const drops = [] as any[];
            for (let i = 0; i < columns; i++) {
                drops[i] = 1;
            }

            const draw = () => {
                ctx.fillStyle = "#0A062E11";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                for (var i = 0; i < drops.length; i++) {
                    var text =
                        letters[Math.floor(Math.random() * letters.length)];
                    ctx.fillStyle = "#fff";
                    ctx.font = `${fontSize}px Courier Prime`;
                    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                    drops[i]++;
                    if (
                        drops[i] * fontSize > canvas.height &&
                        Math.random() > 0.95
                    ) {
                        drops[i] = 0;
                    }
                }
            };

            setInterval(draw, 33);

            window.addEventListener("resize", () => {
                canvas.width = window.innerWidth * 0.9;
                canvas.height = window.innerHeight * 0.8;
            });
        }
    }, []);

    useEffect(() => {
        if (titleRef.current) {
            const canvas = titleRef.current;
            const ctx = canvas.getContext("2d") as any;

            let letters = "(/?-$[]@%^&*)!~:<>|";
            const letterArray = letters.split("");

            let fontSize = 10;

            if (window.innerWidth >= 1920) {
                fontSize = 15;
            } else if (window.innerWidth >= 768) {
                fontSize = 10;
            } else {
                fontSize = 5;
            }

            console.log(fontSize);
            let currentTitle = agenceTitle;

            const titleMorphAnim = (
                titleText: any,
                time: number,
                duration: number
            ) => {
                currentTitle = titleText;

                const rows = currentTitle[0].length;
                const columns = currentTitle.length;

                canvas.width = (rows * fontSize) / 2;
                canvas.height = columns * fontSize;

                let char = [] as any[];
                titleText.forEach((text: string) => {
                    char.push(text.split(""));
                });

                let repeatCount = time / duration;
                const rowLen = char[0].length;

                const draw = () => {
                    ctx.fillStyle = "#0A062E";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);

                    char.forEach((line: [], index: number) => {
                        line.forEach((charactor: string, i: number) => {
                            if (charactor !== " ") {
                                var text =
                                    letters[
                                        Math.floor(
                                            Math.random() * letters.length
                                        )
                                    ];
                                ctx.fillStyle = "#fff";
                                ctx.font = `${fontSize}px Courier Prime`;

                                ctx.fillText(
                                    1 - repeatCount / (time / duration) >=
                                        i / rowLen
                                        ? charactor
                                        : text,
                                    (i * fontSize) / 2,
                                    index * fontSize
                                );
                            }
                        });
                    });
                    repeatCount--;
                    if (repeatCount < 0) return;
                    if (repeatCount >= 0) setTimeout(draw, duration * 1000);
                };

                draw();
            };

            titleMorphAnim(agenceTitle, 3, 0.1);

            setTimeout(() => {
                titleMorphAnim(fleakTitle, 3, 0.2);
            }, 3000 + 2000);

            window.addEventListener("resize", () => {
                if (window.innerWidth >= 1920) {
                    fontSize = 15;
                } else if (window.innerWidth >= 768) {
                    fontSize = 10;
                } else {
                    fontSize = 5;
                }

                const rows = currentTitle[0].length;
                const columns = currentTitle.length;

                canvas.width = (rows * fontSize) / 2;
                canvas.height = columns * fontSize;
            });
        }
    }, []);
    return (
        <Wrapper className="flex justify-center items-center bg-[#0A062E] ">
            <canvas ref={canvasRef} className="rounded-xl" />
            <canvas ref={titleRef} className="absolute" />
        </Wrapper>
    );
};

export default Editor;
