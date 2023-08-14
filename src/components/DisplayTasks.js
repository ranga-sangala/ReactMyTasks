const DisplayTasks = ({taskInfo}) => {
  const {task, tag} = taskInfo
  return (
    <li className="task-info">
      <p>{task}</p>
      <p className="active-tab">{tag}</p>
    </li>
  )
}

export default DisplayTasks
