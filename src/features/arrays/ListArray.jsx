import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addnew, addnewlist, reorder } from './ListArraySlice'
import AddIcon from '@mui/icons-material/Add';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TaskCard from '../taskcard/TaskCard'
import styles from './ListArray.module.css'
const ListArray = () => {
  const list = useSelector((state) => state.arraylist.array)
  console.log(list)
  const dispatch = useDispatch()
  const onDragEnd = (result) => {
    let { source, destination } = result;
    let index1 = source.index;
    let index2 = destination.index;
    let tableIdSource = source.droppableId;
    let tableIdDes = destination.droppableId;
    dispatch(reorder({ arrayid: index1, listid: index2, source: tableIdSource, destination: tableIdDes }))
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.container}>
        {
          list.map((item, index) =>
            <div className={styles.list}>
              <h3>Table</h3>
              <Droppable droppableId={`droptable ${index}`} >

                {
                  provided =>
                    <div

                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{ display: 'flex', flexDirection: 'column' }}
                      key={index}>
                      {
                        item.map((subitem, subindex) =>
                          <Draggable key={subitem} draggableId={`subitem${subitem}${index}`} index={subindex}>
                            {
                              provided =>
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <TaskCard key={subindex} title={subitem} />
                                </div>
                            }
                          </Draggable>
                        )
                      }
                      {provided.placeholder}
                      <div className={styles.button_task}
                        onClick={() => dispatch(addnew({ value: Math.floor(Math.random() * 100), id: index }))}>
                        <AddIcon />
                        <span>Add item</span>
                      </div>
                    </div>
                }
              </Droppable>
            </div>)
        }
        <div className={styles.button} onClick={() => dispatch(addnewlist())}>
          <AddIcon />
          <span> Add new list</span>
        </div>
      </div>
    </DragDropContext>
  )
}

export default ListArray
