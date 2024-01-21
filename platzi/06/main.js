// compiled with typescript (tsc)

function createTaskPlanner() {
  var tasks = [];
  return {
    addTask: function (task) {
      tasks.push({
        id: task.id,
        name: task.name,
        priority: task.priority,
        tags: task.tags,
        completed: false,
      });
    },
    removeTask: function (value) {
      var index = tasks.findIndex(function (task) {
        return task.id === value || task.name === value;
      });
      var removedTask = tasks[index];
      tasks.splice(index, 1);
      return removedTask;
    },
    getTasks: function () {
      return tasks;
    },
    getPendingTasks: function () {
      return tasks.filter(function (task) {
        return !task.completed;
      });
    },
    getCompletedTasks: function () {
      return tasks.filter(function (task) {
        return task.completed;
      });
    },
    markTaskAsCompleted: function (value) {
      var index = tasks.findIndex(function (task) {
        return task.id === value || task.name === value;
      });
      tasks[index].completed = true;
      return tasks[index];
    },
    getSortedTasksByPriority: function () {
      return tasks.toSorted(function (a, b) {
        return a.priority - b.priority;
      });
    },
    filterTasksByTag: function (tag) {
      return tasks.filter(function (task) {
        return task.tags.includes(tag);
      });
    },
    updateTask: function (taskId, updates) {
      var index = tasks.findIndex(function (task) {
        return task.id === taskId;
      });
      tasks[index] = Object.assign(tasks[index], updates);
      return tasks[index];
    },
  };
}
