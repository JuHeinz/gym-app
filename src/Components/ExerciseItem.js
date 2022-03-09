import React from "react";
import StatListElement from "./StatListElement";



export default function ExerciseItem(props) {

  
    function StatList() {
        return (
            //These render only if the category (weight, time, reps) is needed
            <>
                {props.stats.hold && <StatListElement number={props.stats.hold} category={"Hold Time"} symbol={"sek."} />}
                {props.stats.reps && <StatListElement number={props.stats.reps} category={"Reps"} symbol={"times"} />}
                {props.stats.weight && <StatListElement number={props.stats.weight} category={"Weight"} symbol={"kg"} />}
            </>)

    }

    //Naming variables that can be used as ID (needed for Bootstrap Accordion collapse to work)
    let collapseItem = "collapse" + props.ID;
    let collapseItemReference = "#" + collapseItem;

    //Bootstrap Accordion
    return (
        <div className="accordion-item ">

            {/* Exercise Name */}
            <h2 className="accordion-header" id={props.exerciseName}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target={collapseItemReference}
                    aria-expanded="true" aria-controls={collapseItem}>
                    <h2 className="display-6">{props.exerciseName}</h2>
                </button>
            </h2>
            <div id={collapseItem} className="accordion-collapse collapse"
                aria-labelledby={props.exerciseName}
                data-bs-parent="#accordionRoot">
                <div className="accordion-body">

                    <ul className="list-group">
                        {/*List of Weight, Reps and Hold Duration*/}
                        <StatList />

                    </ul>

                    {/* Instructions */}
                    <div className="instructions">
                        <strong>Instructions:</strong> {props.instructions}
                    </div>

                    {/* Buttons */}
                    <div className="btnContainerTimerDone">
                        {/* Only show timer button if the exercise includes a hold time */}
                        {props.stats.hold && <button className="btn btn-primary" type="button"> <img src="./images/time.svg" /> Start Timer </button>}

                        {/* Uses Ternary to set the Button Text */}
                        <button className="btn btn-primary" type="button" onClick={()=>props.handleClick(props.ID)}> {props.isDone ? "Mark as done" : "Done!"}</button>

                    </div>

                </div>
            </div>
        </div>
    )
}