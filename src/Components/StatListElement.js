import React from "react"

export default function StatListElement(props) {
    //Counter State
    const [count, setCount] = React.useState(0);

    //Function to add to the counter
    //With callback, since old state is important to determine new state
    function add() {
        setCount(function (oldValue) {
            return oldValue + 1
        })
    }
    function subtract() {
        setCount((oldValue) => oldValue - 1)
    }
    return (
        <li className="list-group-item statListElement">
            <div className="ms-2">
                <div><strong>{props.category}</strong></div>
                {/*Symbol (s/x/kg) and Number*/}
                <span className="badge numberBadge ">{props.number + count} {props.symbol}</span>
            </div>



            {/* Increase and decrease Buttons */}
            <div className="btn-group align-s ms-2" role="group" aria-label="Increase and Decrease">
                <button type="button" onClick={subtract} className="btn btn-secondary">-</button>
                <button type="button" onClick={add} className="btn btn-secondary">+</button>
            </div>
        </li>
    )
}