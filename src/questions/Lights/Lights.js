import "./lights.css"

const Lights = ({selectedOptionLights, setSelectedOptionLights}) => {

  function onValueChange(event) {
    setSelectedOptionLights(event.target.value)
  }
  return (
    <div className="lights">
      <table>
        <tr>
          <td className="td2">
            <h1 className="h1">Фари</h1>
            <input
              type="checkbox"
              value={"Stok"}
              checked={selectedOptionLights === "Stok"}
              onChange={onValueChange}
            /><span class="led-text">Сток</span>
            
            <br />
            <input
              type="checkbox"
              value={"Black"}
              checked={selectedOptionLights === "Black"}
              onChange={onValueChange}
            /><span class="led-text">Чорні</span>
            
            <br />
            <input
              type="checkbox"
              value={"Lx"}
              checked={selectedOptionLights === "Lx"}
              onChange={onValueChange}
            /><span class="led-text">ЛХ дизайн</span>
            
            <br />
            <input
              type="checkbox"
              value={"Bugatti"}
              checked={selectedOptionLights === "Bugatti"}
              onChange={onValueChange}
            /><span class="led-text">Бугатті дизайн</span>
            
          </td>
        </tr>
      </table>
    </div>
  )
}
export default Lights
