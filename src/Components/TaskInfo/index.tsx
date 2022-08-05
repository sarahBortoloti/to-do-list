import styles from './style.module.css';

interface Task {
  title: string;
  totalTasks: number;
  hasFinish?: boolean;
  tasksCompleteds?: number
}


export function TaskInfo({ title, totalTasks, hasFinish = false, tasksCompleteds = 0 }: Task) {

  const tasksCount = hasFinish ? `${tasksCompleteds} de ${totalTasks}` : totalTasks;
  const styleTitle = hasFinish ? styles.finishTasksTitle : styles.totalTasksTitle;

  return (
    <>
      <div 
        className={`${styles.tasksTitle} ${styleTitle}`}>
          {title}       
        <span className={styles.totalTasks}>{tasksCount}</span>
      </div>
    </>
  )
}

