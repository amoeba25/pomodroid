import { useState, createContext } from 'react';

export const SettingsContext = createContext(); 

const SettingsContextProvider = (props) => {

    const [pomodoro, setPomodoro] = useState(0); //state of work,break or lbreak
    const [executing, setExecuting] = useState({}); //object that comes from settings page
    const [startAnimate, setStartAnimate] = useState(false); //animation

    


    // timer functions
    const startTimer = () => {
        setStartAnimate(true); 
    }

    const pauseTimer = () => {
        setStartAnimate(false); 
    }


    const stopTimer = () => {
        setStartAnimate(false); 
    }

    // reset button
    const SettingsBtn = () => {
        setExecuting({}); 
        setPomodoro(0)
    }

    //updates the object based on active session 
    const setCurrentTimer = (active_state) => {

        // this runs setExecution and timeertime function 
        updateExecute({
            ...executing, 
            active : active_state
        })


        setTimerTime(executing)
    }

    // updating the settings of the app
    const updateExecute = (updatedSettings) => {
        setExecuting(updatedSettings)
        setTimerTime(updatedSettings)
    }

    // changes the session depending on the value
    const setTimerTime = evalute => {
        switch(evalute.active){
            case 'work':
                setPomodoro(evalute.work)
                break;
            case 'short':
                setPomodoro(evalute.short)
                break;
            case 'long':
                setPomodoro(evalute.long)
                break; 
            default: 
                setPomodoro(0); //if not set anything
                break;
        }
        
    }

    const children = ({remainingTime}) => {
        const minutes = Math.floor(remainingTime / 60); 
        const seconds = remainingTime% 60; 

        return `${minutes}:${seconds}`
    }

  return (
    <SettingsContext.Provider value = {{
        pomodoro,
        executing,
        startAnimate, 
        startTimer, 
        stopTimer, 
        pauseTimer, 
        SettingsBtn, 
        setCurrentTimer,
        updateExecute, 
        children
        
        }}>
        {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsContextProvider; 