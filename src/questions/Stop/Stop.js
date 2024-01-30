import "./stop.css"

const Stop = ({selectedOptionStop, setSelectedOptionStop}) => {
  function onValueChange(event) {
    setSelectedOptionStop(event.target.value)
  }
  return (
    <div className="stop">
      <table>
        <tr>
          <td>
            <h1>Стопи</h1>
            <input
              type="checkbox"
              value={"Stok"}
              checked={selectedOptionStop === "Stok"}
              onChange={onValueChange}
            />
            {" Сток "}

            <br />
            <input
              type="checkbox"
              value={"Dark-white"}
              checked={selectedOptionStop === "Dark-white"}
              onChange={onValueChange}
            />
            {" Темнобілі "}

            <br />
            <input
              type="checkbox"
              value={"Light"}
              checked={selectedOptionStop === "Light"}
              onChange={onValueChange}
            />
            {" Секвентал світлий "}

            <br />
            <input
              type="checkbox"
              value={"Dark"}
              checked={selectedOptionStop === "Dark"}
              onChange={onValueChange}
            />
            {" Секвентал темний "}
          </td>
        </tr>
      </table>
    </div>
  )
}
export default Stop
