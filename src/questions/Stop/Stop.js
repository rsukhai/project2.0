import "./stop.css"

const Stop = ({ selectedOptionStop, setSelectedOptionStop }) => {
  function onValueChange(event) {
    setSelectedOptionStop(event.target.value)
  }
  return (
    <div className="stop">
      <table>
        <tr>
          <td className="td2">
            <h1 className="h1">Стопи</h1>
            <input
              type="checkbox"
              value={"Stok"}
              checked={selectedOptionStop === "Stok"}
              onChange={onValueChange}
            />
            <span class="led-text">Сток</span>

            <br />
            <input
              type="checkbox"
              value={"Dark-white"}
              checked={selectedOptionStop === "Dark-white"}
              onChange={onValueChange}
            />
            <span class="led-text">Темнобілі</span>

            <br />
            <input
              type="checkbox"
              value={"Light"}
              checked={selectedOptionStop === "Light"}
              onChange={onValueChange}
            />
            <span class="led-text">Секвентал світлий</span>

            <br />
            <input
              type="checkbox"
              value={"Dark"}
              checked={selectedOptionStop === "Dark"}
              onChange={onValueChange}
            />
            <span class="led-text">Секвентал темний</span>
          </td>
        </tr>
      </table>
    </div>
  )
}
export default Stop
