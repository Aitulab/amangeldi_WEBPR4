let tasks = Storage.load('rpgTasks') || [];

function createTask(text, xpReward, diffText) {
    const newTask = { id: Date.now(), text, xpReward, diffText };
    tasks.push(newTask);
    Storage.save('rpgTasks', tasks);
}

function removeTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    Storage.save('rpgTasks', tasks);
}