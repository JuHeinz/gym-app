import React from "react";
export default function Form(props) {



    const [formData, setFormData] = React.useState({ exerName: "", exerDescr: "", exerReps: null, exerWeight: null, exerHold: null })

    function handleChange(event) {
        setFormData(prevFormData => {

            return {
                //The new object returns all the attributes from the old object:
                ...prevFormData,
                /* Event.target.name gets the name of the Input field (via HTML attribute "name")
                 since we gave the input field the same name as the attribute of our formData Object,
                it can be used as a key. 
                The [] are so a computed value can be used as a key 
                (see ES2015 feature "Computed property names")
                */
                [event.target.name]: event.target.value
            }
        })
    }

    console.log(formData)


    function addExercise() {
        props.setExerciseArray(
            function (prevExerciseArray) {
                //this should ideally come as user input
                let exampleElement =
                {
                    ID: props.exerciseArray.length + 1,
                    exerciseName: formData.exerName,
                    instructions: formData.exerDescr,
                    stats: { hold: formData.exerHold, reps: formData.exerReps, weight: formData.exerWeight }

                }
                return [...prevExerciseArray, exampleElement]
            }
        )
    }

    return (

        <>

            <div className="collapse collapse-horizontal" id="collapseForm">
                <div className="card">
                    <div className="card-header">
                        {/* Button to close form collapse */}
                        <button type="button" className="btn-close" aria-label="Close Form" data-bs-toggle="collapse" data-bs-target="#collapseForm" aria-expanded="false" aria-controls="collapseForm"></button>
                    </div>

                    <div className="card-body formCard">
                        <h2 className="display-6">Add a new exercise</h2>
                        <div >
                            <label htmlFor="name-Input" className="form-label">Exercise Name</label>
                            {/* Exercise Name Input  */}
                            <input type="text"
                                onChange={handleChange}
                                name="exerName"
                                className="form-control" id="name-input" aria-describedby="nameHelp" />
                            <div id="nameHelp" className="form-text">Input a name for the exercise.</div>
                        </div>

                        <div className="">
                            <label htmlFor="description-input" className="form-label">Description</label>
                            {/* Exercise  Description Input */}
                            <input type="text"
                                onChange={handleChange}
                                name="exerDescr"
                                className="form-control" id="description-input" aria-describedby="descrHelp" />
                            <div id="descrHelp" className="form-text">Input a description for the exercise.</div>
                        </div>

                        <div className="numericalFormFields">
                            <div className="">
                                <label htmlFor="reps-input" className="form-label">Repetitions</label>
                                {/* Reps Input */}
                                <input type="number"
                                    onChange={handleChange}
                                    name="exerReps"
                                    className="form-control" id="reps-input" aria-describedby="repsHelp" placeholder="# of reps" min="0" />
                                <div id="repsHelp" className="form-text">How many repetitions?</div>
                            </div>

                            <div className="">
                                <label htmlFor="weight-input" className="form-label">Weight</label>
                                {/* Weight Input */}
                                <input type="number"
                                    onChange={handleChange}
                                    name="exerWeight"
                                    className="form-control" id="weight-input" aria-describedby="weigtHelp" placeholder="Weight in kg" min="0" />
                                <div id="weigtHelp" className="form-text">How many kg?</div>
                            </div>

                            <div className="">
                                <label htmlFor="hold-input" className="form-label">Hold Time</label>
                                {/* Hold Input */}
                                <input type="number"
                                    onChange={handleChange}
                                    name="exerHold"
                                    className="form-control" id="hold-input" aria-describedby="holdHelp" placeholder="Time in seconds" min="0" />
                                <div id="holdHelp" className="form-text">Hold for how many seconds?</div>
                            </div>

                        </div>
                        <button type="submit" onClick={addExercise} className="btn btn-primary">Add exercise</button>
                    </div>
                </div>

            </div>
        </>
    )
}
