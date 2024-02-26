import "./splitr.css"

const Splitr = ({ selectedOptionSplitr, setSelectedOptionSplitr }) => {
  function onValueChange(event) {
    setSelectedOptionSplitr(event.target.value)
  }

  return (
    <div className="splitr">
      <table>
        <tr>
          <td>
            <h1 className="h1">Юбки</h1>
            <input
              type="checkbox"
              value={"Stok"}
              checked={selectedOptionSplitr === "Stok"}
              onChange={onValueChange}
            />
            <span class="led-text">Сток</span>
            <br />
            <input
              type="checkbox"
              value={"2016"}
              checked={selectedOptionSplitr === "2016"}
              onChange={onValueChange}
            />
            <span class="led-text">Юбка передня + задня 2016</span>
            <br />
            <input
              type="checkbox"
              value={"2019"}
              checked={selectedOptionSplitr === "2019"}
              onChange={onValueChange}
            />
            <span class="led-text">Юбка передня + задня 2019</span>
            <br />
            <input
              type="checkbox"
              value={"2021"}
              checked={selectedOptionSplitr === "2021"}
              onChange={onValueChange}
            />{" "}
            <span class="led-text">Юбка передня + задня 2021</span>
            <br />
            <input
              type="checkbox"
              value={"WALD"}
              checked={selectedOptionSplitr === "WALD"}
              onChange={onValueChange}
            />
            <span class="led-text">Юбка передня + задня + арки WALD</span>
          </td>
        </tr>
      </table>
    </div>
  )
}
export default Splitr
