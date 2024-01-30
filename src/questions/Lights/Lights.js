import "./lights.css"

const Lights = ({selectedOptionLights, setSelectedOptionLights}) => {

  function onValueChange(event) {
    setSelectedOptionLights(event.target.value)
  }
  return (
    <div className="lights">
      <table>
        <tr>
          <td>
            <h1>Фари</h1>
            <input
              type="checkbox"
              value={"Stok"}
              checked={selectedOptionLights === "Stok"}
              onChange={onValueChange}
            />{" Сток "}
            
            <br />
            <input
              type="checkbox"
              value={"Black"}
              checked={selectedOptionLights === "Black"}
              onChange={onValueChange}
            />{" Чорні "}
            
            <br />
            <input
              type="checkbox"
              value={"Lx"}
              checked={selectedOptionLights === "Lx"}
              onChange={onValueChange}
            />{" ЛХ дизайн "}
            
            <br />
            <input
              type="checkbox"
              value={"Bugatti"}
              checked={selectedOptionLights === "Bugatti"}
              onChange={onValueChange}
            />{" Бугатті дизайн "}
            
          </td>
        </tr>
      </table>
    </div>
  )
}
export default Lights
