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
                inEdit: true
            },
            {
                id: 2,
                schoolName: 'SWCC',
                dates: 'for a time',
                inEdit: true
            }
        ],
        addSchool: {
            inEdit: false,
            schoolName: '',
            dates: ''
        }
    });

    function toggleGeneralEdit(e) {
        const target = e.target.parentNode.id;

        setGeneralInfo(prev => {
            return prev.map(obj => {
                return obj.field === target ? {...obj, inEdit: !obj.inEdit} : obj;
            });
        });
    }

    function toggleSchoolEdit(e) {
        let target = e.target.parentNode.id - 1;
        let newState = {...educationInfo};
        newState.schoolList[target] = {
            ...newState.schoolList[target],
            inEdit: !newState.schoolList[target].inEdit
        }

        
    }

    function toggleAddForm() {
        setEducationInfo(prev => {
            return {
                ...prev, 
                addSchool: {...prev.addSchool, inEdit: !prev.addSchool.inEdit}
            }
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

    function addSchool() {
        const newSchool = {
            id: educationInfo.schoolList.length + 1,
            schoolName: educationInfo.addSchool.schoolName,
            dates: educationInfo.addSchool.dates,
            inEdit: false
        }

        setEducationInfo(prev => {
            return {
                addSchool: {inEdit: false, schoolName: '', dates: ''},
                schoolList: [...prev.schoolList, newSchool]
            }
        });
    }

    function handleEducationChange(e) {
        if (e.target.name === 'schoolName') {
            setEducationInfo(prev => {
                return {
                    ...prev,
                    addSchool: {
                        ...prev.addSchool,
                        schoolName: e.target.value
                    }
                }
            });
        } else {
            setEducationInfo(prev => {
                return {
                    ...prev,
                    addSchool: {
                        ...prev.addSchool,
                        dates: e.target.value
                    }
                }
            });
        }
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
                submitSchool={addSchool}
                educationChange={handleEducationChange}
                toggleSchoolEdit={toggleSchoolEdit}
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