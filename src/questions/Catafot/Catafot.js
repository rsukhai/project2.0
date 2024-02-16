import "./catafot.css"

const Сatafot = ({ selectedOptionСatafot, setSelectedOptionСatafot }) => {
  function onValueChange(event) {
    setSelectedOptionСatafot(event.target.value)
  }

  return (
    <div className="catafot">
      <table>
        <tr>
          <td className="td2">
            <h1 className="h1">Катафот</h1>
            <input
              type="checkbox"
              value={"Stok"}
              checked={selectedOptionСatafot === "Stok"}
              onChange={onValueChange}
            />
            {" Сток "}

            <br />
            <input
              type="checkbox"
              value={"White"}
              checked={selectedOptionСatafot === "White"}
              onChange={onValueChange}
            />
            {" Білий "}

            <br />
            <input
              type="checkbox"
              value={"Led"}
              checked={selectedOptionСatafot === "Led"}
              onChange={onValueChange}
            />
            {" Лед "}
          </td>
        </tr>
      </table>
    </div>
  )
}
export default Сatafot
