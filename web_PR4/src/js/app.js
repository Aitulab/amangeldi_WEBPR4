function updateUI() {
    document.getElementById('level').textContent = character.level;
    document.getElementById('current-xp').textContent = character.xp;
    document.getElementById('next-lvl-xp').textContent = character.nextLvlXp;
    document.getElementById('total-done').textContent = character.totalDone;
    document.getElementById('total-xp').textContent = character.totalXpAllTime;
    document.getElementById('exp-fill').style.width = (character.xp / character.nextLvlXp * 100) + "%";
    document.getElementById('avatar-display').textContent = character.avatar;
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById('task-list');
    list.innerHTML = tasks.map(t => `
        <div class="task-item">
            <div><strong>${t.text}</strong> <small>[${t.diffText}] +${t.xpReward} XP</small></div>
            <div>
                <button class="btn-action" style="color:green" onclick="completeTaskAction(${t.id}, ${t.xpReward})">✔</button>
                <button class="btn-action" style="color:red" onclick="deleteTaskAction(${t.id})">✖</button>
            </div>
        </div>
    `).join('');
}

function addTask() {
    const name = document.getElementById('task-name').value;
    const diff = document.getElementById('task-diff');
    if (!name) return alert("Введите название!");
    createTask(name, parseInt(diff.value), diff.options[diff.selectedIndex].text.split(' (')[0]);
    document.getElementById('task-name').value = "";
    updateUI();
}

function completeTaskAction(id, xp) {
    character.totalDone++;
    addXP(xp);
    removeTask(id);
    updateUI();
}

function deleteTaskAction(id) {
    removeTask(id);
    updateUI();
}

function resetGame() {
    if(confirm("Сбросить всё?")) { Storage.clear(); location.reload(); }
}

updateUI();