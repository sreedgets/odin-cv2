import { useState } from "react";
import General from './Components/General';
import Education from './Components/Education';

export default function App() {
    const [generalInfo, setGeneralInfo] = useState([
        {
            field: 'name',
            value: '',
            inEdit: true
        },
        {
            field: 'phone',
            value: '',
            inEdit: true
        },
        {
            field: 'email',
            value: '',
            inEdit: true
        }
    ]);

    const [educationInfo, setEducationInfo] = useState({
        schoolList: [
            {
                id: 1,
                schoolName: 'Creston High School',
                dates: 'for a time',
                inEdit: false
            }
        ],
        addSchool: false
    });

    function toggleGeneralEdit(e) {
        const target = e.target.parentNode.id;

        setGeneralInfo(prev => {
            return prev.map(obj => {
                return obj.field === target ? {...obj, inEdit: !obj.inEdit} : obj;
            });
        });
    }

    function toggleAddForm() {
        setEducationInfo(prev => {
            return {...prev, addSchool: !prev.addSchool}
        });
    }

    function handleGeneralChange(e) {
        const value = e.target.value;
        const field = e.target.parentNode.id

        setGeneralInfo(prev => {
            return prev.map(obj => {
                return obj.field === field ? {...obj, value: value} : obj;
            });
        });
    }

    return (
        <main className="App">
            <General 
                data={generalInfo}
                toggleEdit={toggleGeneralEdit}
                handleChange={handleGeneralChange} 
            />
            <Education 
                data={educationInfo}
                toggleAddForm={toggleAddForm}
            />
            <section>
                <h2>Experience</h2>
                <div className="experience--input-wrapper">
                    <input type="text" placeholder="Name of Company" />
                    <input type="text" placeholder="Position Title" />
                    <input type="text" placeholder="Dates Worked" />
                    <button className="experience--submit-work">Submit</button>
                </div>
                <button>Add Employment</button>
            </section>
        </main>
    )
}