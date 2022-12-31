import React from 'react'
import styles from './TaskCard.module.css'
import EditIcon from '@mui/icons-material/Edit';

const TaskCard = (props) => {
    return (
        <div 
        className={styles.container}
        >
          <span>This is card name: {props.title}</span> 
          <span className={styles.icon}><EditIcon fontSize="normal" /></span>
        </div>
    )
}

export default TaskCard
