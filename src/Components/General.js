export default function General(props) {
    let nameSection;
    if (props.data[0].inEdit) {
        nameSection = 
            <div id="name" className="general--input-wrapper">
                <input type="text" value={props.data[0].value} placeholder="Name" onChange={(e) => props.handleChange(e)} />
                <button className="general--input-submit" onClick={(e) => props.toggleEdit(e)}>Submit</button>
            </div>;
    } else {
        nameSection = 
            <div id="name" className="general--input-wrapper">
                <h3>{props.data[0].value}</h3>
                <button className="general--edit-field" onClick={(e) => props.toggleEdit(e)}>Edit</button>
            </div>;
    }

    let phoneSection;
    if (props.data[1].inEdit) {
        phoneSection =
            <div id="phone" className="general--input-wrapper">
                <input type="email" value={props.data[1].value} placeholder="Phone" onChange={(e) => props.handleChange(e)}/>
                <button className="general--input-submit" onClick={(e) => props.toggleEdit(e)}>Submit</button>
            </div>;
    } else {
        phoneSection =
            <div id="phone" className="general--input-wrapper">
                <h3>{props.data[1].value}</h3>
                <button className="general--edit-field" onClick={(e) => props.toggleEdit(e)}>Edit</button>
            </div>;  
    }

    let emailSection;
    if (props.data[2].inEdit) {
        emailSection = 
            <div id="email" className="general--input-wrapper">
                <input type="text" value={props.data[2].value} placeholder="Email" onChange={(e) => props.handleChange(e)}/>
                <button className="general--input-submit" onClick={(e) => props.toggleEdit(e)}>Submit</button>
            </div>;
    } else {
        emailSection =
            <div id="email" className="general--input-wrapper">
                <h3>{props.data[2].value}</h3>
                <button className="general--edit-field" onClick={(e) => props.toggleEdit(e)}>Edit</button>
            </div>;  
    }

    return (
        <section className="general-info">
            <h2>General Information</h2>
            {nameSection}
            {phoneSection}
            {emailSection}
        </section>
    );
}