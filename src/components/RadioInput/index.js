import './index.css'

const RadioInput = props => {
  const {eachSalaryRange, setSalaryRangeToTheState} = props
  const {salaryRangeId, label} = eachSalaryRange

  const onChangePackage = () => {
    setSalaryRangeToTheState(salaryRangeId)
  }
  return (
    <li className="radio-input-container">
      <input
        type="radio"
        name="salaryRange"
        id={salaryRangeId}
        className="radio-input"
        value={salaryRangeId}
        onClick={onChangePackage}
      />
      <label className="radio-label" htmlFor={salaryRangeId}>
        {label}
      </label>
    </li>
  )
}

export default RadioInput
