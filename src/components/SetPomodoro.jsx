import { useState, useContext } from "react"
import { SettingsContext } from "../context/SettingsContext";
import Button from "./Button"

function SetPomodoro() {

    //useState timer depending on which session is active
    const [newTimer, setNewTimer] = useState({
        work: 0.3, 
        short: 0.2,
        long: 1,
        active: 'work'
    }); 

    const {updateExecute} = useContext(SettingsContext)

    // input values of sessions extracted 
    const handleChange = input => {
        const {name, value} = input.target; 

        // depending on input value passed in different field, timer changes
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer, 
                    work: parseInt(value)
                })
                break;
            
            case 'shortBreak':
                setNewTimer({
                    ...newTimer, 
                    short: parseInt(value)
                })
                break;
            
            case 'longBreak':
                setNewTimer({
                    ...newTimer, 
                    long: parseInt(value)
                })
                break;
        }
    }

    const handleSubmit = (e)=> {
        e.preventDefault(); 
        updateExecute(newTimer);
    }

  return (
    <div className="form-container">
        <form action="" noValidate onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <input type="number" className="input" name='work' onChange={handleChange} value={newTimer.work} />
                <input type="number" className="input" name='shortBreak' onChange={handleChange} value={newTimer.short} />
                <input type="number" className="input" name='longBreak' onChange={handleChange} value={newTimer.long} />
            </div>
            <button type='submit'>Set Timer</button>  
        </form>
    </div>
  )
}

export default SetPomodoro