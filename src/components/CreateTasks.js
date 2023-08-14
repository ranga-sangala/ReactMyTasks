import {useState} from 'react'

import Tags from './Tags'

import DisplayTasks from './DisplayTasks'

const CreateTask = ({tagsList}) => {
  const [task, setTask] = useState('')
  const [tag, setTag] = useState('')
  const [tasksInfo, setTaskInfo] = useState([])
  const [filteredTasks, setFilteredTasks] = useState(tasksInfo)
  const [isActive, setIsActive] = useState(false)

  const onSubmitForm = () => {
    setTaskInfo([...tasksInfo, {task, tag}])
    setFilteredTasks([...tasksInfo, {task, tag}])
    setTask('')
  }
  const activeTag = id => {
    const active = tagsList.filter(tags => tags.optionId === id)
    // setIsActive(active[0].optionId)
    const filteredTask = tasksInfo.filter(
      tags => tags.tag === active[0].optionId,
    )
    setIsActive(id === active[0].optionId)
    setFilteredTasks(filteredTask)
  }

  return (
    <div className="main-container">
      <div className="create-task-container">
        <h1 className="heading">Create Task</h1>
        <form
          className="input-container"
          onSubmit={e => {
            e.preventDefault()
            onSubmitForm()
          }}
        >
          <label className="label" htmlFor="task">
            Task
          </label>
          <input
            className="input"
            id="task"
            value={task}
            onChange={e => {
              setTask(e.target.value)
            }}
            placeholder="Enter the Task here."
          />
          <br />
          <label className="label" htmlFor="tag">
            Tags
          </label>
          <select
            className="input"
            id="tag"
            value={tag}
            name="tag"
            onChange={e => {
              setTag(e.target.value)
            }}
            required
          >
            {tagsList.map(t => (
              <option key={t.optionId} value={t.optionId}>
                {t.displayText}
              </option>
            ))}
          </select>

          <button className="submit-btn" type="submit">
            Add Task
          </button>
        </form>
      </div>
      <div className="display-container">
        <div className="tags-container">
          <h3 className="sub-heading">Tags</h3>
          <ul className="tags">
            {tagsList.map(tags => (
              <Tags
                key={tags.optionId}
                isActive={isActive}
                activeTag={activeTag}
                tagName={tags}
              />
            ))}
          </ul>
        </div>
        <div className="tasks-container">
          <h3 className="sub-heading">Tasks</h3>
          <ul className="tasks-container">
            {filteredTasks.length === 0 ? (
              <h3>No Tasks Added Yet</h3>
            ) : (
              filteredTasks.map(tasks => <DisplayTasks taskInfo={tasks} />)
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CreateTask
