import React from "react";
import ReactDOM from "react-dom";
import ExerciseItem from "./Components/ExerciseItem";
import Form from "./Components/Form";
import "./styles.css"
import exerciseData from "./exerciseData";


function Application() {
    const [exerciseArray, setExerciseArray] = React.useState(exerciseData);

   
    //SUBSTRACT FROM COUNTER
    function subtract(id, category, sign) {
        setExerciseArray(prevExerciseArray => {
            const newExerciseArray = [];
            //Loop over all Objects in the Array. 
            for (let i = 0; i < prevExerciseArray.length; i++) {
                const currentExercise = prevExerciseArray[i];
                //Find the item with the ID that maches the argument 
                if (currentExercise.ID === id) {
                    let modifier;
                    console.log(currentExercise)
                    //spread the entire previous Object into the new one
                    if (sign ==="positive"){
                         modifier= 1;
                    }else{
                        modifier= -1
                    }

                    console.log("sign is " + sign)


                    let minusCategory;
                    if (category === "hold"){
                        minusCategory = currentExercise.hold + modifier
                    }else if (category === "weight"){
                        minusCategory = currentExercise.weight + modifier
                    }else{
                        minusCategory = currentExercise.reps + modifier
                    }
                   const updatedExercise = {
                        ...currentExercise,
                        //but change the attribute we want to change
                        [category]: minusCategory
                    }
                    //push the new Object into the new Array
                    newExerciseArray.push(updatedExercise)
                } else {
                    //if the item in the loop is not the one we are trying to change, just push it into the new array unchanged
                    newExerciseArray.push(currentExercise)
                }
            }
            //return the new array to overwrite state
            return newExerciseArray
        })
        console.log(exerciseArray[id])
    }


    //Map over exercise array and input attribute as props
    const allExercises = exerciseArray.map(
        function (exer) {
            return <ExerciseItem
                key={exer.ID}
                id={exer.ID}
                exerciseName={exer.exerciseName}
                ID={exer.ID}
                instructions={exer.instructions}
                hold={exer.hold}
                weight={exer.weight}
                reps={exer.reps}
                isDone={exer.isDone}
                handleClick={changeDone}
                isMandatory={exer.isMandatory}
                exerciseType={exer.exerciseType}
                handleMinusClick={subtract}
            />
        }
    )

    function changeDone(id) {
        setExerciseArray(prevExerciseArray => {
            const newExerciseArray = [];

            //Loop over exercises to find event to be changed
            for (let i = 0; i < prevExerciseArray.length; i++) {
                const currentExercise = prevExerciseArray[i];

                //if we found the right element, change the object 
                if (currentExercise.ID === id) {
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
            <div className="roundedRectancle">You have {exerciseNumberText} queued
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
