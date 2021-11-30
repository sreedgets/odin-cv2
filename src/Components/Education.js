export default function Education(props) {
    const {addSchool, schoolList} = props.data;
    
    const list = schoolList.map(school => {
        let schoolDisplay;
        if (!school.inEdit) {
            schoolDisplay = 
                <div key={school.id} id={school.id} className='education--school'>
                    <h3>{school.schoolName}</h3>
                    <p>{school.dates}</p>
                    <button 
                        className="education--edit-school"
                        onClick={(e) => props.toggleSchoolEdit(e)}
                    >
                        Edit
                    </button>
                    <button className="education--delete-school">Delete</button>
                </div>;
        } else {
            schoolDisplay = 
                <div key={school.id} id={school.id} className='education--school'>
                    <div className="education--input-wrapper">
                        <input type="text" placeholder="School Name" value={school.schoolName} />
                    </div>
                    <div className="education--input-wrapper">
                        <input type="text" placeholder="Dates" value={school.dates} />
                    </div>
                    <button 
                        className="education--submit-edit"
                        onClick={(e) => props.toggleSchoolEdit(e)}
                    >
                        Submit
                    </button>
                    <button className="education--cancel-school">Cancel</button>
                </div>
        }

        return schoolDisplay;
    });

    let schoolForm;

    if (addSchool.inEdit) {
        schoolForm = 
            <div className="education--input-wrapper">
                <input 
                    type="text" 
                    placeholder="Schoolname" 
                    onChange={(e) => props.educationChange(e)}
                    value={addSchool.schoolName}
                    name="schoolName"
                />
                <input 
                    type="text" 
                    placeholder="Dates Attended" 
                    onChange={(e) => props.educationChange(e)}
                    value={addSchool.dates}
                    name="dates"
                />
                <button 
                    className="education--submit-school"
                    onClick={() => props.submitSchool()}
                >
                    Submit
                </button>
            </div>
    } else {
        schoolForm = null
    }

    return (
        <section className="education-info">
            <h2>Education</h2>
            {list}
            {schoolForm}
            <button onClick={(e) => props.toggleAddForm(e)}>
                {addSchool.inEdit ? 'Cancel' : 'Add School'}
            </button>
        </section>
    );
}