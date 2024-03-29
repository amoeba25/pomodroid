import { useContext } from 'react';
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import { SettingsContext } from '../context/SettingsContext';


const CountdownAnimation = ({key, timer, animate, children}) => {

  const {stopTimer} = useContext(SettingsContext); // stop timer function 
  
  return (
    // countdown circle component 
    <CountdownCircleTimer 
        isPlaying = {animate}
        duration = {timer * 60}
        colors={
          ['#FE6F6B', 0.33]
          
        }
        strokeWidth={6}
        size={220}
        trailColor = '#151932'
        onComplete={()=> {

            stopTimer()
        }
        }
    >
        {children}
    </CountdownCircleTimer >
  )
}

export default CountdownAnimation