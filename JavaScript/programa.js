// cabeçalho
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
}

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}
//Lógica do Meu Jogo
document.addEventListener("DOMContentLoaded", function() {
    const checkButton = document.getElementById("checkButton");
    const results = document.getElementById("results");
    const animalInputs = document.querySelectorAll(".animal input");

    checkButton.addEventListener("click", function() {
        let correctAnswers = 0;
        const answers = ["Horse", "Axolotl", "Rabbit", "Owl", "Fish", "Ferret"]; // Os nomes corretos dos animais 

        animalInputs.forEach(function(input, index) {
            const userAnswer = input.value.trim();
            const correctAnswer = answers[index];

            if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
                correctAnswers++;
                input.style.backgroundColor = "#4CAF50"; // Cor verde para respostas corretas
            } else {
                input.style.backgroundColor = "#FF5733"; // Cor vermelha para respostas erradas
            }
        });

        results.textContent = `Você acertou ${correctAnswers} de ${answers.length} animais.`;
    });
});

// Seleção de Personagens
    function changeCharacter() {
    var selectedCharacter = document.getElementById('character');
    var selectedImg = selectedCharacter.options[selectedCharacter.selectedIndex].getAttribute('data-img');
    document.getElementById('selected-character-img').src = selectedImg;
}












