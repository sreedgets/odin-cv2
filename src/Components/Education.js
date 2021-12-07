export default function Education(props) {
    const {addSchool, schoolList} = props.data;

    const schoolsList = schoolList.map(school => {
        return (
            <div key={school.id} id={school.id} className="education--school">
                {
                    school.inEdit ?
                    <>
                        <div className="education--input-wrapper">
                            <input
                                id="schoolName"
                                name="schoolName" 
                                type="text" 
                                placeholder="School Name" 
                                value={school.schoolName}
                                onChange={props.educationEditChange} 
                            />
                        </div>
                        <div className="education--input-wrapper">
                            <input 
                            id="dates"
                            name="dates"
                            type="text" 
                            placeholder="Dates" 
                            value={school.dates}
                            onChange={props.educationEditChange} 
                            />
                        </div>
                        <button 
                            className="education--submit-edit"
                            onClick={() => props.toggleSchoolEdit(school.id)}
                        >
                            Submit
                        </button>
                        <button 
                            className="education--cancel-school"
                            onClick={() => props.toggleSchoolEdit(school.id)}
                        >
                            Cancel
                        </button>
                    </>
                    :
                    <>
                        <h3>{school.schoolName}</h3>
                        <p>{school.dates}</p>
                        <button 
                            className="education--edit-school"
                            onClick={() => props.toggleSchoolEdit(school.id)}
                        >
                            Edit
                        </button>
                        <button className="education--delete-school">Delete</button>
                    </>
                }
            </div>
        );
    });

    const schoolForm  = addSchool.inEdit ?
        <div className="education--input-wrapper">
            <input 
                type="text" 
                placeholder="Schoolname" 
                onChange={props.educationChange}
                value={addSchool.schoolName}
                name="schoolName"
            />
            <input 
                type="text" 
                placeholder="Dates Attended" 
                onChange={props.educationChange}
                value={addSchool.dates}
                name="dates"
            />
            <button 
                className="education--submit-school"
                onClick={props.submitSchool}
            >
                Submit
            </button>
        </div>
        :
        null;

    return (
        <section className="education-info">
            <h2>Education</h2>
            {schoolsList}
            {schoolForm}
            <button onClick={props.toggleAddForm}>
                {addSchool.inEdit ? 'Cancel' : 'Add School'}
            </button>
        </section>
    );
}