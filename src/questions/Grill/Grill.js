import "./grill.css"

const Grill = ({ selectedOptionGrill, setSelectedOptionGrill }) => {
  function onValueChange(event) {
    setSelectedOptionGrill(event.target.value)
  }

  return (
    <div className="grill">
      <table>
        <tr>
          <td className="td"> 
            <h1 className="h1">Решітки</h1>
            <input
              type="checkbox"
              value={"Stok"}
              checked={selectedOptionGrill === "Stok"}
              onChange={onValueChange}
            />
            <span class="led-text">Сток</span>

            <br />
            <input
              type="checkbox"
              value={"2016"}
              checked={selectedOptionGrill === "2016"}
              onChange={onValueChange}
            />
            <span class="led-text">2016</span>

            <br />
            <input
              type="checkbox"
              value={"2019"}
              checked={selectedOptionGrill === "2019"}
              onChange={onValueChange}
            />
            <span class="led-text">2019</span>

            <br />
            <input
              type="checkbox"
              value={"2021"}
              checked={selectedOptionGrill === "2021"}
              onChange={onValueChange}
            />
            <span class="led-text">2021</span>

            <br />
            <input
              type="checkbox"
              value={"TRD"}
              checked={selectedOptionGrill === "TRD"}
              onChange={onValueChange}
            />
            <span class="led-text">ТРД</span>
          </td>
        </tr>
      </table>
    </div>
  )
}
export default Grill
