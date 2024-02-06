import "./splitr.css"
import { useState } from "react"

const Splitr = ({selectedOptionSplitr, setSelectedOptionSplitr}) => {

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
            />{" Сток "}
            
            <br />
            <input
              type="checkbox"
              value={"2016"}
              checked={selectedOptionSplitr === "2016"}
              onChange={onValueChange}
            />{" Юбка передня + задня 2016 "}
            
            <br />
            <input
              type="checkbox"
              value={"2019"}
              checked={selectedOptionSplitr === "2019"}
              onChange={onValueChange}
            />{" Юбка передня + задня 2019 "}
            
            <br />
            <input
              type="checkbox"
              value={"2021"}
              checked={selectedOptionSplitr === "2021"}
              onChange={onValueChange}
            />{" Юбка передня + задня 2021 "}
            
            <br />
            <input
              type="checkbox"
              value={"WALD"}
              checked={selectedOptionSplitr === "WALD"}
              onChange={onValueChange}
            />{" Юбка передня + задня + арки WALD "}
            
          </td>
        </tr>
      </table>
    </div>
  )
}
export default Splitr
