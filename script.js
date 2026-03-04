const button = document.getElementById('funFactBtn');
const display = document.getElementById('funFactDisplay');

const facts = [
    "I'm a massive fan of Taylor Swift and Dashboard Confessional, I collect vinyls! 🎶",
    "I just got a pair of Hoka Gaviota 6s for my walks! #roadtofitness 👟",
    "I'm learning about Data Management (CDMP) alongside my CS degree. 📊",
    "I collect coffee beans from every country I visit. ☕",
    "I love long drives, once drove to Vigan City in a single go. 🚗",
    "I'm former Arnis varsity player. ⚔️"
];

button.addEventListener('click', function() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    display.textContent = randomFact;
});