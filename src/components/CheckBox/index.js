import './index.css'

const CheckBox = props => {
  const {eachType, onSetTypeOfEmps} = props
  const {label, employmentTypeId} = eachType

  const setTypeOfEmp = event => {
    if (event.target.checked) {
      onSetTypeOfEmps(employmentTypeId, true)
    } else {
      onSetTypeOfEmps(employmentTypeId, false)
    }
  }

  return (
    <li className="check-box-container">
      <input
        type="checkBox"
        id={employmentTypeId}
        className="check-box-input"
        onChange={setTypeOfEmp}
      />
      <label className="employee-type-label" htmlFor={employmentTypeId}>
        {label}
      </label>
    </li>
  )
}

export default CheckBox
