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

const content = document.querySelector(".elementor-element-7e59363");
console.log("custom-code-start", content);

const canvas = document.createElement("canvas");

canvas.width = content.offsetWidth;
canvas.height = content.offsetHeight * 0.8;
canvas.style.position = "absolute";
canvas.style.top = "50%";
canvas.style.transform = "translateY(-50%)";
content.appendChild(canvas);

const ctx = canvas.getContext("2d");

let letters =
    "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
const letterArray = letters.split("");

const fontSize = 10;
const columns = canvas.width / fontSize;

let drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

const draw = () => {
    ctx.fillStyle = "#0A062E11";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = "#fff";
        ctx.font = `${fontSize}px Courier Prime`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
            drops[i] = 0;
        }
    }
};
setInterval(draw, (2000 * fontSize) / canvas.height);

/////////////////////////////////////

const canvas2 = document.createElement("canvas");
canvas2.style.position = "absolute";
content.appendChild(canvas2);
const ctx2 = canvas2.getContext("2d");
let letters2 = "(/?-$[]@%^&*)!~:<>|";
// const letterArray = letters2.split("");
let fontSize2;

if (content.offsetWidth >= 1200) {
    fontSize2 = 16.6;
} else {
    fontSize2 = Math.round(
        content.offsetWidth / (content.offsetWidth > 768 ? 90 : 70)
    );
}

let interval;
let interval1;
let interval2;
let interval3;
let interval4;
let reduceInterval;

const fadeOutAnim = (el, duration) => {
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
    titleText,
    time,
    duration,
    onComplete,
    fontS = fontSize2
) => {
    canvas2.style.opacity = 1;
    const rows = titleText[0].length;
    const columns = titleText.length;

    canvas2.width = (rows * fontS) / 2;
    canvas2.height = columns * fontS;

    let char = [];
    titleText.forEach((text) => {
        char.push(text.split(""));
    });

    let repeatCount = time / duration;
    const rowLen = char[0].length;

    const draw = () => {
        ctx2.fillStyle = "#0A062E";
        ctx2.fillRect(0, 0, canvas2.width, canvas2.height);

        char.forEach((line, index) => {
            line.forEach((charactor, i) => {
                if (charactor !== " ") {
                    var text =
                        letters2[Math.floor(Math.random() * letters2.length)];
                    ctx2.fillStyle = "#fff";
                    ctx2.font = `${fontS}px Courier Prime`;

                    ctx2.fillText(
                        1 - repeatCount / (time / duration) >= i / rowLen
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
