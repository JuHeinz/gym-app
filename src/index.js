import React from "react";
import ReactDOM from "react-dom";
import ExerciseItem from "./Components/ExerciseItem";
import Form from "./Components/Form";
import "./styles.css"
import exerciseData from "./exerciseData";


function Application() {
    const [exerciseArray, setExerciseArray] = React.useState(exerciseData);


    function changeDone(id) {
        setExerciseArray(prevExerciseArray => {
            const newExerciseArray = [];

            //Loop over exercises to find event to be changed
            for (let i = 0; i < prevExerciseArray.length; i++) {
                const currentExercise = prevExerciseArray[i];

                //if we found the right element, change the object 
                if (currentExercise.ID == id) {
                    const updatedExercise = {
                        ...currentExercise,
                        isDone: !currentExercise.isDone
                    }
                    //push that Object into the new Array
                    newExerciseArray.push(updatedExercise)
                    console.log("isDone has been flipped to " + updatedExercise.isDone + " on ID " + id)

                } else {
                    //if it is not the event we are looking for, push it into the array without changes
                    newExerciseArray.push(currentExercise)
                }
            }

            //set the new state, aka new eventList by returning
            return newExerciseArray
        });
    }


    //Map over exercise array and input attribute as props
    const allExercises = exerciseArray.map(
        function (exer) {
            return <ExerciseItem
                key={exer.ID}
                exerciseName={exer.exerciseName}
                ID={exer.ID}
                instructions={exer.instructions}
                stats={exer.stats}
                isDone={exer.isDone}
                handleClick={changeDone}

            />
        }
    )

    // Conditional rendering based on number of exercises
    let exerciseNumberText;
    if (exerciseArray.length > 1) {
        exerciseNumberText = exerciseArray.length + " exercises"
    }
    else if (exerciseArray.length === 1) {
        exerciseNumberText = "1 exercise"
    } else {
        exerciseNumberText = "no exercises"
    }



    return (
        <>
            <div className="roundedRectancle">You have {exerciseNumberText} quequed
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseForm" aria-expanded="false" aria-controls="collapseForm"> Add Exercise </button>
            </div>
            <div className="applicationContainer">
                {/*Form as a collapse container*/}
                <Form setExerciseArray={setExerciseArray} exerciseArray={exerciseArray} />
                {/* Exercise Accordion */}
                <div className="accordion">{allExercises}</div>
            </div>
        </>)
}


ReactDOM.render(<Application />, document.querySelector("main"))
