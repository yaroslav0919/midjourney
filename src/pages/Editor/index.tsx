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
const agenceTitleMobile = [
    String.raw`     _                                   _                                                  _           _   _             `,
    String.raw`    /_\   __ _  ___ _ __   ___ ___    __| | ___    ___ ___  _ __ ___  _ __ ___  _   _ _ __ (_) ___ __ _| |_(_) ___  _ __  `,
    String.raw`   //_\\ / _\ |/ _ \ '_ \ / __/ _ \  / _\ |/ _ \  / __/ _ \| '_ \ _ \| '_ \ _ \| | | | '_ \| |/ __/ _\ | __| |/ _ \| '_ \ `,
    String.raw`  /  _  \ (_| |  __/ | | | (_|  __/ | (_| |  __/ | (_| (_) | | | | | | | | | | | |_| | | | | | (_| (_| | |_| | (_) | | | |`,
    String.raw`  \_/ \_/\__, |\___|_| |_|\___\___|  \__,_|\___|  \___\___/|_| |_| |_|_| |_| |_|\__,_|_| |_|_|\___\__,_|\__|_|\___/|_| |_|`,
    String.raw`         |___/                                                                                                            `,
];
const fleakTitle = [
    String.raw`   ___ _            _                      _ _       `,
    String.raw`  / __\ | ___  __ _| | __   /\/\   ___  __| (_) __ _ `,
    String.raw` / _/ | |/ _ \/ _\ | |/ /  /    \ / _ \/ _\ | |/ _\ |`,
    String.raw`/ /   | |  __/ (_| |   <  / /\/\ \  __/ (_| | | (_| |`,
    String.raw`\/    |_|\___|\__,_|_|\_\ \/    \/\___|\__,_|_|\__,_|`,
];

export const Editor = () => {
    // const canvasRef = useRef<HTMLCanvasElement>(null);
    // const titleRef = useRef<HTMLCanvasElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            const content = contentRef.current;
            const canvas = document.createElement("canvas");

            canvas.width = content.offsetWidth;
            canvas.height = content.offsetHeight * 0.8;
            canvas.style.position = "absolute";
            content.appendChild(canvas);

            const ctx = canvas.getContext("2d") as any;

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

            setInterval(draw, (2000 * fontSize) / canvas.height);
        }
    }, []);

    useEffect(() => {
        if (contentRef.current) {
            const content = contentRef.current;

            const canvas2 = document.createElement("canvas") as any;
            canvas2.style.position = "absolute";
            content.appendChild(canvas2);
            const ctx2 = canvas2.getContext("2d") as any;
            let letters2 = "(/?-$[]@%^&*)!~:<>|";
            // const letterArray = letters2.split("");
            let fontSize2: number;

            if (content.offsetWidth >= 1200) {
                fontSize2 = 16.6;
            } else {
                fontSize2 = Math.round(
                    content.offsetWidth / (content.offsetWidth > 768 ? 90 : 70)
                );
            }

            let interval: any;
            let interval1: any;
            let interval2: any;
            let interval3: any;
            let interval4: any;
            let reduceInterval: any;

            const fadeOutAnim = (el: any, duration: number) => {
                let opacity = 1;
                const reduce = () => {
                    console.log("reduce", opacity);

                    if (opacity <= 0) {
                        clearInterval(reduceInterval);
                    } else {
                        el.style.opacity = opacity;
                        opacity = Math.round((opacity - 0.01) * 100) / 100;
                    }
                };
                reduceInterval = setInterval(reduce, duration * 10);
            };

            const titleMorphAnim = (
                titleText: any,
                time: number,
                duration: number,
                onComplete: Function,
                fontS: number = fontSize2
            ) => {
                canvas2.style.opacity = 1;
                const rows = titleText[0].length;
                const columns = titleText.length;

                canvas2.width = (rows * fontS) / 2;
                canvas2.height = columns * fontS;

                let char = [] as any[];
                titleText.forEach((text: string) => {
                    char.push(text.split(""));
                });

                let repeatCount = time / duration;
                const rowLen = char[0].length;

                const draw = () => {
                    ctx2.fillStyle = "#0A062E";
                    ctx2.fillRect(0, 0, canvas2.width, canvas2.height);

                    char.forEach((line: [], index: number) => {
                        line.forEach((charactor: string, i: number) => {
                            if (charactor !== " ") {
                                var text =
                                    letters2[
                                        Math.floor(
                                            Math.random() * letters2.length
                                        )
                                    ];
                                ctx2.fillStyle = "#fff";
                                ctx2.font = `${fontS}px Courier Prime`;

                                ctx2.fillText(
                                    1 - repeatCount / (time / duration) >=
                                        i / rowLen
                                        ? charactor
                                        : text,
                                    (i * fontS) / 2,
                                    index * fontS
                                );
                            }
                        });
                    });
                    repeatCount--;
                    if (repeatCount < 0) {
                        interval3 = setInterval(() => {
                            clearInterval(interval3);
                            onComplete(canvas2, 0.2);
                        }, 3500);
                    } else if (repeatCount >= 0) {
                        interval4 = setInterval(() => {
                            clearInterval(interval4);
                            draw();
                        }, duration * 1000);
                    }
                };

                draw();
            };

            const loop = () => {
                titleMorphAnim(
                    content.offsetWidth > 768 ? agenceTitle : agenceTitleMobile,
                    1.5,
                    0.05,
                    fadeOutAnim
                );
                interval1 = setInterval(() => {
                    clearInterval(interval1);
                    titleMorphAnim(
                        fleakTitle,
                        1,
                        0.05,
                        fadeOutAnim,
                        content.offsetWidth > 768 ? fontSize2 : fontSize2 * 2
                    );
                    interval2 = setInterval(() => {
                        clearInterval(interval2);
                        loop();
                    }, 1000 + 3700 + 800);
                }, 1500 + 3700 + 800);
            };

            interval = setInterval(() => {
                clearInterval(interval);
                loop();
            }, 3000);

            const visiableCheck = () => {
                if (document.hidden) {
                    console.log("out");
                    clearInterval(interval);
                    clearInterval(interval1);
                    clearInterval(interval2);
                    clearInterval(interval3);
                    clearInterval(interval4);
                    clearInterval(reduceInterval);
                } else {
                    console.log("in");
                    clearInterval(interval);
                    clearInterval(interval1);
                    clearInterval(interval2);
                    clearInterval(interval3);
                    clearInterval(interval4);
                    clearInterval(reduceInterval);
                    loop();
                }
            };

            document.addEventListener("visibilitychange", visiableCheck);
            let now = Date.now();
            const anim = () => {
                console.log(Date.now() - now);
                now = Date.now();
                requestAnimationFrame(anim);
            };
            anim();
        }
    }, []);

    return (
        <Wrapper className="flex justify-center items-center bg-[#0A062E]">
            <div
                className="w-full max-w-[1200px] h-full flex items-center justify-center"
                ref={contentRef}
            ></div>
        </Wrapper>
    );
};

export default Editor;
