const messages = [
"Estas Segura?",
"Te vas a arrepentir",
"Estas bien?",
"Te estoy avisando eh",
"Piensatelo un rato y luego eliges",
"Estás graciosa eh",
"Vale, ya me estas preocupando",
"Ultima vez que pregunto, mas te vale pensartelo",
"Vale, vete con Alejandro😞",
]

let mesaggeindex = 0;

function handleNoClick(){
    const noBtn = document.querySelector(".No-boton");
    const yesBtn = document.querySelector(".Si-boton");

    //no
    noBtn.textContent = messages[mesaggeindex];
    mesaggeindex = (mesaggeindex + 1) % messages.length;

    //yes
    const currenSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    const newSize = currenSize * 2;
    yesBtn.style.fontSize = `${newSize}px`;

    //animation
    yesBtn.style.transform = "scale(1.5)";
    yesBtn.style.transition = "transform 0.3s ease";

    //reset
    setTimeout(() => {
        yesBtn.style.transform = "scale(1)";
        yesBtn.style.transition = "transform 0.3s ease";
    }, 100);
}

function handleYesClick(){
    window.location.href = "./yes.html";
}