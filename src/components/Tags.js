const Tags = ({tagName, isActive, activeTag}) => {
  const {optionId, displayText} = tagName
  console.log(isActive)
  const onClickTag = () => {
    activeTag(optionId)
  }

  const activeBtn = isActive ? 'active-tab' : ''
  return (
    <li className={`tag-name ${activeBtn}`} onClick={onClickTag}>
      {displayText}
    </li>
  )
}

export default Tags
