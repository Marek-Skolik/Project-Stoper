import styles from './Container.module.scss';
import Timer from '../Timer/Timer';
import Buttons from '../Buttons/Buttons';
import { useState } from 'react';
import { useEffect } from 'react';

const Container = () =>{

    const [start, setStart] = useState(false);
    const [stop, setStop] = useState(true);
    const [clock, setClock] = useState(0);

    useEffect (() => {
        let interval = null;
    
        if (start && stop === false) {
          interval = setInterval(() => {
            setClock((clock) => clock + 10);
          }, 10);
        } else {
          clearInterval(interval);
        }
        return () => {
          clearInterval(interval);
        };
      }, [start, stop]);

    const timeStart = () => {
        setStart(true);
        setStop(false);
    };

    const timeStop = () => {
        setStart(false);
        setStop(true);
    }

    const timeReset = () => {
        setStart(false);
        setClock(0);
    };

    return (
        <div className={styles.container}>
           <Timer time={clock} /> 
           <div className={styles.buttons}>
                <Buttons onClick={timeStart}>START</Buttons>
                <Buttons onClick={timeStop}>STOP</Buttons>
                <Buttons onClick={timeReset}>RESET</Buttons>
           </div>
        </div>
    );
};

export default Container;