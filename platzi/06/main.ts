interface Task {
  id: number;
  name: string;
  priority: 1 | 2 | 3;
  tags: string[];
  completed: boolean;
}

function createTaskPlanner() {
  const tasks: Task[] = [];

  return {
    addTask: (task: Task): void => {
      tasks.push({
        id: task.id,
        name: task.name,
        priority: task.priority,
        tags: task.tags,
        completed: false,
      });
    },
    removeTask: (value: number | string): Task => {
      const index = tasks.findIndex(
        (task) => task.id === value || task.name === value
      );
      const removedTask = tasks[index];
      tasks.splice(index, 1);
      return removedTask;
    },
    getTasks: (): Task[] => {
      return tasks;
    },
    getPendingTasks: (): Task[] => {
      return tasks.filter((task) => !task.completed);
    },
    getCompletedTasks: (): Task[] => {
      return tasks.filter((task) => task.completed);
    },
    markTaskAsCompleted: (value: number | string): Task => {
      const index = tasks.findIndex(
        (task) => task.id === value || task.name === value
      );
      tasks[index].completed = true;
      return tasks[index];
    },
    getSortedTasksByPriority: (): Task[] => {
      return tasks.toSorted((a, b) => a.priority - b.priority);
    },
    filterTasksByTag: (tag: string): Task[] => {
      return tasks.filter((task) => task.tags.includes(tag));
    },
    updateTask: (taskId: number, updates: object): Task => {
      const index = tasks.findIndex((task) => task.id === taskId);
      tasks[index] = Object.assign(tasks[index], updates);
      return tasks[index];
    },
  };
}

const planner = createTaskPlanner();
planner.addTask({
  id: 1,
  name: "Buy milk",
  priority: 1,
  tags: ["shopping", "home"],
  completed: true, // then assigned as false
});
planner.addTask({
  id: 2,
  name: "Call Juan",
  priority: 3,
  tags: ["personal"],
  completed: false,
});
console.log(planner.getTasks());

planner.markTaskAsCompleted("Call Juan");
console.log(planner.getCompletedTasks());

console.log(planner.filterTasksByTag("shopping"));

planner.updateTask(1, {
  name: "Do something idk",
  priority: 3,
  tags: ["nothing lol"],
});
console.log(planner.getTasks());
