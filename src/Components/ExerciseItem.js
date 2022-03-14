import React from "react";
import StatListElement from "./StatListElement";



export default function ExerciseItem(props) {

    //Change the items appearance once the exercise is completed
    let styles;
    let checkIcon;

    if (props.isDone) {

        checkIcon = "./images/check-dark.svg"
    } else {
        checkIcon = ""

    }
    
 

    function StatList() {
        return (
            //These render only if the category (weight, time, reps) is needed
            <>
                <StatListElement minusFunction={(sign)=>props.handleMinusClick(props.id, "hold", sign)} number={props.hold} id={props.id} category={"Hold Time"} symbol={"s"} />
                <StatListElement minusFunction={(sign)=>props.handleMinusClick(props.id, "reps", sign)} number={props.reps} id={props.id} category={"Reps"} symbol={"times"} />
                <StatListElement minusFunction={(sign)=>props.handleMinusClick(props.id, "weight", sign)} number={props.weight} id={props.id} category={"Weight"} symbol={"kg"} />
            </>)

    }

    //Naming variables that can be used as ID (needed for Bootstrap Accordion collapse to work)
    let collapseItem = "collapse" + props.ID;
    let collapseItemReference = "#" + collapseItem;

    //Bootstrap Accordion
    return (


        <div style={styles} className="accordion-item ">


            {/* Exercise Name */}
            <h2 className="accordion-header" id={props.exerciseName}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target={collapseItemReference}
                    aria-expanded="false" aria-controls={collapseItem}>
                    <h2 className="display-6 exerciseName">{props.exerciseName} <img src={checkIcon} style={styles} /> </h2>
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
                    <div className="instructions ">
                        <div>
                            <strong>Instructions:</strong>
                            {props.instructions}
                        </div>

                        <div className="informationBadges">
                            {/* Show type of cardio */}
                            <span className="badge">{props.exerciseType}</span>

                            {/* Show if mandatory */}
                            {props.isMandatory && <span className="badge">Mandatory</span>}
                        </div>
                    </div>



                    {/* Buttons */}
                    <div className="btnContainerTimerDone">

                        {/* Start Timer Button */}
                        {/* Only activate timer button if the exercise includes a hold time, else disabled */}
                        <button className="btn btn-primary" type="button" disabled={(props.hold < 1) ? true : false}> <img src="./images/time.svg" /> Start Timer </button>

                        {/* This button marks an exercise as done */}
                        <button className="btn btn-primary" type="button"
                            /* Toggles isDone state in parent element */
                            onClick={() => props.handleClick(props.ID)}
                            /* collapses current accordion item */
                            data-bs-toggle="collapse"
                            data-bs-target={collapseItemReference}
                            aria-expanded="false" aria-controls={collapseItem}>
                            <img src="./images/check.svg" />
                            {/* Displays appropriate button text */}
                            {props.isDone ? "Done!" : "Mark as done"}</button>



                    </div>

                </div>
            </div>
        </div>
    )
}