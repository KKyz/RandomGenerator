function generateName() {
    let name = [];
    let words = ["deluxe", "supreme", "cheese", "loaded", "spicy", "saucy", "monster-size", "ultimate", "cheesy", "fire-grilled", "epic", "smokehouse", "Jerry's", "super", "tangy", "zesty", "juicy", "crispy", "savory", "smothered", "all-in", "big", "massive", "savoury", "walloping", "Mike's"];
    let food = ["burger", "sub", "quesadilla", "nachos", "fries", "pizza", "burrito", "tacos"];
    let fonts = ["Arial", "Courier New", "Georgia", "Times New Roman", "Verdana", "Comic Sans MS", "Impact", "Trebuchet MS", "Lucida Sans"];
    let colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FF8333", "#8D33FF", "#FF3333", "#33FFEC"];

    let wordCount = document.getElementById("wordCount").value || 3; // Default to 3 if input is empty
    wordCount = parseInt(wordCount);

    for (let i = 0; i < wordCount; i++) {
        let randomWord = words[Math.floor(Math.random() * words.length)];
        let randomFont = fonts[Math.floor(Math.random() * fonts.length)];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        name.push(`<span style="font-family: ${randomFont}; color: ${randomColor};">${randomWord}</span>`);
    }

    let randomFood = food[Math.floor(Math.random() * food.length)];
    let randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    name.push(`<span style="font-family: ${randomFont}; color: ${randomColor};">${randomFood}</span>`);

    document.getElementById("output").innerHTML = name.join(" ");
    restyle();
}

function restyle() {
    const outputElement = document.getElementById("output");

    const fontSize = (Math.random() * 1.5 + 1.5).toFixed(1) + "em";
    
    const fontWeight = Math.floor(Math.random() * 90) * 100 + 400;

    const letterSpacing = Math.random().toFixed(2) * 5 + "px";

    //random text shadow
    const shadowX = Math.floor(Math.random() * 5) - 2 + "px";
    const shadowY = Math.floor(Math.random() * 5) - 2 + "px";
    const shadowBlur = Math.floor(Math.random() * 10) + "px";
    const shadowColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`;
    const textShadow = `${shadowX} ${shadowY} ${shadowBlur} ${shadowColor}`;

    // Application
    outputElement.style.fontSize = fontSize;
    outputElement.style.fontWeight = fontWeight;
    outputElement.style.letterSpacing = letterSpacing;
    outputElement.style.textShadow = textShadow;
}


