export default function Education(props) {
    const {addSchool, schoolList} = props.data;
    
    const List = schoolList.map(school => {
        return (
            <div id={school.id} className='education--school'>
                <h3>{school.schoolName}</h3>
                <p>{school.dates}</p>
            </div>
        );
    });

    let schoolForm;

    if (addSchool) {
        schoolForm = 
            <div className="education--input-wrapper">
                <input type="text" placeholder="Schoolname" />
                <input type="text" placeholder="Dates Attended" />
                <button className="education--submit-school">Submit</button>
            </div>
    } else {
        schoolForm = null
    }

    return (
        <section className="education-info">
            <h2>Education</h2>
            <div id="1" className="education--school">
                <h3>School Name</h3>
                <p>Dates Attended</p>
            </div>
            {schoolForm}
            <button onClick={(e) => props.toggleAddForm(e)}>
                {addSchool ? 'Cancel' : 'Add School'}
            </button>
        </section>
    );
}