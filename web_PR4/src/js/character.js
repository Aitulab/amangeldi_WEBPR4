// Добавь поле avatar в объект character
let character = Storage.load('rpgChar') || {
    name: "Странник",
    level: 1,
    xp: 0,
    nextLvlXp: 100,
    totalDone: 0,
    totalXpAllTime: 0,
    avatar: "🧙‍♂️" // Начальный аватар [cite: 354]
};

const avatars = ["🧙‍♂️", "🥷", "🧛‍♂️", "🤖", "🧝‍♀️", "🧟"];

function changeAvatar() {
    let currentIdx = avatars.indexOf(character.avatar);
    character.avatar = avatars[(currentIdx + 1) % avatars.length];
    Storage.save('rpgChar', character);
    updateUI(); // Вызываем обновление интерфейса из app.js
}

function addXP(amount) {
    character.xp += amount;
    character.totalXpAllTime += amount;
    if (character.xp >= character.nextLvlXp) {
        character.xp -= character.nextLvlXp;
        character.level++;
        character.nextLvlXp = character.level * 100;
        alert("Уровень повышен! Ваш новый уровень: " + character.level);
    }
    Storage.save('rpgChar', character);
}