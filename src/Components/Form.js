import React from "react";
export default function Form(props) {



    const [formData, setFormData] = React.useState({
        exerName: "",
        exerDescr: "",
        exerReps: 0,
        exerWeight: 0,
        exerHold: 0,
        isMandatory: false,
        exerciseType: "",
    })

    function handleChange(event) {
        //Name = given name of input field. Value = inputed Value, except for checkboxes, type = is input email, number, checkbox..., checked = value if type is checkbox
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            console.log(prevFormData)

            return {
                //The new object returns all the attributes from the old object:
                ...prevFormData,
                /*
                The [] are so a computed value can be used as a key 
                (see ES2015 feature "Computed property names")
                if the type is a checkBox, toggle the checked field, else, toggle the value field 
                */
                [name]: type === "checkbox" ? checked : value
            }
        })
    }


    function addExercise() {
        props.setExerciseArray(
            function (prevExerciseArray) {
                //User Input is taken from form data
                let newExercise =
                {
                    ID: props.exerciseArray.length + 1,
                    exerciseName: formData.exerName,
                    instructions: formData.exerDescr,
                    hold: parseInt(formData.exerHold, 10),
                    reps: parseInt(formData.exerReps, 10),
                    weight: parseInt(formData.exerWeight,10),
                    isMandatory: formData.isMandatory,
                    exerciseType: formData.exerciseType
                }
                return [...prevExerciseArray, newExercise]
            }
        )
        setFormData(
            {
                exerName: "",
                exerDescr: "",
                exerReps: 0,
                exerWeight: 0,
                exerHold: 0,
                isMandatory: false,
                exerciseType: "",
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
                                value={formData.exerName}
                                className="form-control" id="name-input" aria-describedby="nameHelp" />
                            <div id="nameHelp" className="form-text">Input a name for the exercise.</div>
                        </div>

                        {/*  Description Input */}

                        <div>
                            <label htmlFor="description-input" className="form-label">Description</label>
                            <textarea
                                onChange={handleChange}
                                name="exerDescr"
                                value={formData.exerDescr}
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
                                    value={formData.exerReps}
                                    className="form-control" id="reps-input" aria-describedby="repsHelp" placeholder="# of reps" min="0" />
                                <div id="repsHelp" className="form-text">How many repetitions?</div>
                            </div>

                            <div className="">
                                <label htmlFor="weight-input" className="form-label">Weight</label>
                                {/* Weight Input */}
                                <input type="number"
                                    onChange={handleChange}
                                    name="exerWeight"
                                    value={formData.exerWeight}
                                    className="form-control" id="weight-input" aria-describedby="weigtHelp" placeholder="Weight in kg" min="0" />
                                <div id="weigtHelp" className="form-text">How many kg?</div>
                            </div>

                            <div className="">
                                <label htmlFor="hold-input" className="form-label">Hold Time</label>
                                {/* Hold Input */}
                                <input type="number"
                                    onChange={handleChange}
                                    name="exerHold"
                                    value={formData.exerHold}
                                    className="form-control" id="hold-input" aria-describedby="holdHelp" placeholder="Time in seconds" min="0" />
                                <div id="holdHelp" className="form-text">Hold for how many seconds?</div>
                            </div>
                        </div>

                        {/* Is mandatory input */}
                        <div>
                            <input
                                checked={formData.isMandatory}
                                type="checkbox"
                                id="isMandatory"
                                onChange={handleChange}
                                name="isMandatory"
                            />
                            <label htmlFor="isMandatory" className="form-label"> Is mandatory?</label>

                        </div>

                        {/* Type input */}
                        <div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="endurance"
                                    onChange={handleChange}
                                    name="exerciseType"
                                    value="Endurance"
                                    className="form-check-input"
                                />
                                <label htmlFor="endurance" className="form-check-label"> Endurance </label>
                            </div>
                            <div className="form-check">

                                <input
                                    type="radio"
                                    id="strength"
                                    onChange={handleChange}
                                    name="exerciseType"
                                    value="Strength"
                                    className="form-check-input"

                                />
                                <label htmlFor="strength" className="form-check-label"> Strength </label>
                            </div>
                            <div className="form-check">

                                <input
                                    type="radio"
                                    id="balance"
                                    onChange={handleChange}
                                    name="exerciseType"
                                    value="Balance"
                                    className="form-check-input"

                                />
                                <label htmlFor="balance" className="form-check-label"> Balance </label>
                            </div>

                            <div className="form-check">

                                <input
                                    type="radio"
                                    id="flexibility"
                                    onChange={handleChange}
                                    name="exerciseType"
                                    value="Flexibility"
                                    className="form-check-input"

                                />
                                <label htmlFor="flexibility" className="form-check-label"> Flexibility </label>

                            </div>
                        </div>

                        <button type="submit"
                            onClick={addExercise}
                            className="btn btn-primary"
                            data-bs-toggle="collapse" data-bs-target="#collapseForm" aria-expanded="false" aria-controls="collapseForm">
                            Add exercise
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}
