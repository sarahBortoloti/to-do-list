import "./global.css";
import style from "./App.module.css";
import { PlusCircle } from "phosphor-react";
import { EmptyState, Header, TaskInfo, Task } from "./Components";
import { FormEvent, useState } from "react";

type setInputFn = (value: string) => void;

export const handleInputToUpperCase = (event: React.ChangeEvent<HTMLInputElement>, setInput: setInputFn) => {
  const {value} = event.target;
  
  setInput(value.toUpperCase());
}

function App() {
  const [value, setValue] = useState('');
  const [allTasks, setAllTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);


  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setAllTasks([...allTasks, value]);
    setValue('');
  }

  function handleDeleteTask(taskToDelete: string) {
    const taskWithoutDeletedOne = allTasks.filter(task => { return task !== taskToDelete});
    setAllTasks(taskWithoutDeletedOne);
    setCompletedTasks(taskWithoutDeletedOne);
  }

  function handleCompletedTask(taskToComplete: string, isChecked: boolean) {
    if(!isChecked) {
      setCompletedTasks([...completedTasks, taskToComplete]);
    } else {
      const completedTasksWithoutDeletedOne = completedTasks.filter(task => { return task !== taskToComplete});
      setCompletedTasks(completedTasksWithoutDeletedOne);
    }
  }

  return (
    <div className={style.app}>
      <Header />
      <div className={style.wrapper}>
        <main className={style.content}>
          <form
            onSubmit={handleCreateNewTask}
            className={style.formTask}
          >
            <input
              value={value}
              onChange={(event) => handleInputToUpperCase(event, setValue)}
              placeholder="Adicione uma nova tarefa"
            />
            <button className={style.createButton} type="submit">
              <PlusCircle size={16} />
              <span>Criar</span>
            </button>
          </form>
          <div className={style.boxInfo}>
            <TaskInfo title="Tarefas criadas" totalTasks={allTasks.length} />
            <TaskInfo
              title="Concluidas"
              totalTasks={allTasks.length}
              tasksCompleteds={completedTasks.length}
              hasFinish
            />
          </div>
          {!allTasks.length ? (
            <EmptyState />
          ) : (
            allTasks.map((item) => {
              return <Task key={item} task={item} handleDelete={handleDeleteTask} handleCompletedTask={handleCompletedTask} />;
            })
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
