export default function General(props) {
    const generalInputs = props.data.map(input => {
        return (
            <div id={input.field} className="general--input-wrapper">
                {
                    input.inEdit ?
                    <>
                        <input 
                            type="text" 
                            value={input.value} 
                            placeholder={input.field} 
                            onChange={props.handleChange} 
                        /> 
                        <button 
                            className="general--input-submit" 
                            onClick={() => props.toggleEdit(input.field)}
                        >Submit</button>
                    </>
                    :
                    <>
                        <h3>{input.value}</h3>
                        <button
                            className="general--edit-field"
                            onClick={() => props.toggleEdit(input.field)}
                        >
                            Edit
                        </button>
                    </>
                }
            </div>
        );
    });

    return (
        <section className="general-info">
            <h2>General Information</h2>
            {generalInputs}
        </section>
    );
}