let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 Yes 的次数

// Yes 按钮的文字变化
const yesTexts = [
    "？你认真的吗…", 
    "要不再想想？", 
    "不许选这个！ ", 
    "我会很伤心…", 
    "不行:("
];

// Yes 按钮点击事件
yesButton.addEventListener("click", function() {
    clickCount++;

    // 让 No 变大，每次放大 2 倍
    let noSize = 1 + (clickCount * 1.2);
    noButton.style.transform = `scale(${noSize})`;

    // 挤压 Yes 按钮，每次左移 50px
    let yesOffset = clickCount * -50;
    yesButton.style.transform = `translateX(${yesOffset}px)`;

    // 让图片和文字往上移动
    let moveUp = clickCount * 25; // 每次上移 25px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // Yes 文案变化（前 5 次变化）
    if (clickCount <= 5) {
        yesButton.innerText = yesTexts[clickCount - 1];
    }

    // 图片变化（前 5 次变化）
    if (clickCount === 1) mainImage.src = "images/shocked.png"; // 震惊
    if (clickCount === 2) mainImage.src = "images/think.png";   // 思考
    if (clickCount === 3) mainImage.src = "images/angry.png";   // 生气
    if (clickCount === 4) mainImage.src = "images/crying.png";  // 哭
    if (clickCount >= 5) mainImage.src = "images/crying.png";  // 之后一直是哭
});

// No 按钮点击后，进入表白成功页面
noButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">六百六十六( >᎑<)♡︎ᐝ</h1>
            <img src="images/nailong.png" alt="奶龙" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});