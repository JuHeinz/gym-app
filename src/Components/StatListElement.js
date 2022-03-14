import React from "react"

export default function StatListElement(props) {
    
  

    return (
        <li className="list-group-item statListElement">
            <div className="ms-2">
                <div><strong>{props.category}</strong></div>
                {/*Symbol (s/x/kg) and Number*/}
                <span className="badge numberBadge">{props.number} {props.symbol}</span>
            </div>



            {/* Increase and decrease Buttons */}
            <div className="btn-group align-s ms-2" role="group" aria-label="Increase and Decrease">
                <button type="button" onClick={()=> props.minusFunction("negative")} className="btn btn-secondary" disabled={(props.number < 1) ? true : false} >-</button>
                <button type="button" onClick={()=> props.minusFunction("positive")} className="btn btn-secondary">+</button>
            </div>
        </li>
    )
}