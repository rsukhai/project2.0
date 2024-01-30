  import "./grill.css"



  const Grill = ({ selectedOptionGrill, setSelectedOptionGrill }) => {
    function onValueChange(event) {
      setSelectedOptionGrill(event.target.value)
    }




    return (
      <div className="grill">
        <table>
          <tr>
            <td>
              <h1>Решітки</h1>
              <input
                type="checkbox"
                value={"Stok"}
                checked={selectedOptionGrill === "Stok"}
                onChange={onValueChange}
              />{" Сток "}
              
              <br />
              <input
                type="checkbox"
                value={"2016"}
                checked={selectedOptionGrill === "2016"}
                onChange={onValueChange}
              />{" 2016 "}
              
              <br />
              <input
                type="checkbox"
                value={"2019"}
                checked={selectedOptionGrill === "2019"}
                onChange={onValueChange}
              />{" 2019 "}
              
              <br />
              <input
                type="checkbox"
                value={"2021"}
                checked={selectedOptionGrill === "2021"}
                onChange={onValueChange}
              />{" 2021 "}
              
              <br />
              <input
                type="checkbox"
                value={"TRD"}
                checked={selectedOptionGrill === "TRD"}
                onChange={onValueChange}
              />{" ТРД "}
              
            </td>
          </tr>
        </table>
      </div>
    )
  }
  export default Grill
