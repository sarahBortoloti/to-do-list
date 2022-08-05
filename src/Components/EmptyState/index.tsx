import styles from './style.module.css';
import clipboard from '../../assets/clipboard.svg';

 export function EmptyState() {
  return (
    <div className={styles.container}>
      <img width={56} height={56} src={clipboard} />
      <div className={styles.title}>Você ainda não tem tarefas cadastradas</div>
      <div className={styles.subtitle}>Crie tarefas e organize seus itens a fazer</div>
    </div>
  )
}
