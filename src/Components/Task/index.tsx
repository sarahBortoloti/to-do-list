import { Check, Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './style.module.css';

interface Task {
  task: string;
  handleDelete: (task: string) => void;
  handleCompletedTask: (task: string, isChecked: boolean) => void;
}

export function Task({task, handleDelete, handleCompletedTask}: Task) {
  const [isChecked, setIsChecked] = useState(false);

  function handleChangeCheckbox(ev: React.ChangeEvent<HTMLInputElement>) {
    const { target } = ev;
    setIsChecked(target.checked);
    handleCompletedTask(task, isChecked);
    
  }

  function handleDeleteTask(task: string) {
    handleDelete(task);
  }


  return(
    <div className={styles.card}>
      <label className={styles.wrapper}>
        <input checked={isChecked}  onChange={(e) => handleChangeCheckbox(e)} type="checkbox" />
        <div className={`${styles.checkbox} ${!isChecked ? styles.checkboxUnchecked : styles.checkboxChecked}`}>
        {isChecked && (<Check size={16} color="#fff" />)}
        </div>
        <span className={`${styles.text} ${!isChecked ? styles.uncheckedText : styles.checkedText}`}>
         {task}
        </span>
      </label>
      <button className={styles.trash} onClick={() => handleDeleteTask(task)}>
        <Trash size={16} />
      </button>
    </div>
  )
}
