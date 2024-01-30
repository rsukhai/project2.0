import "./catafot.css"

const Сatafot = ({selectedOptionСatafot, setSelectedOptionСatafot}) => {

  function onValueChange(event) {
    setSelectedOptionСatafot(event.target.value)
  }

  return (
    <div className="catafot">
      <table>
        <tr>
          <td>
            <h1>Катафот</h1>
            <input
              type="checkbox"
              value={"Stok"}
              checked={selectedOptionСatafot === "Stok"}
              onChange={onValueChange}
            />{" Сток "}
            
            <br />
            <input
              type="checkbox"
              value={"Black"}
              checked={selectedOptionСatafot === "Black"}
              onChange={onValueChange}
            />{" Чорний "}
            
            <br />
            <input
              type="checkbox"
              value={"Led"}
              checked={selectedOptionСatafot === "Led"}
              onChange={onValueChange}
            />{" Лед "}
            
          </td>
        </tr>
      </table>
    </div>
  )
}
export default Сatafot