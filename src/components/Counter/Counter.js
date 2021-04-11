import React, {useEffect, useState} from 'react';

const Counter = () => {
    const [timerDays, setTimeDays] = useState('00');
    const [timerHours, setTimeHours] = useState('00');
    const [timerMinutes, setTimeMinutes] = useState('00');
    const [timerSeconds, setTimeSeconds] = useState('00');

    useEffect(() => {
        const countDownDate = new Date('April 13 2021 00:00:00').getTime();
        
        const interval = setInterval(()=> {
           
            const now = new Date().getTime();
            
            const distance = countDownDate - now;

            const days = Math.floor((distance / (1000 * 60 * 60 * 24)));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ));
            const seconds = Math.floor((distance % (1000 * 60)) / (1000));

        setTimeDays(days);
        setTimeHours(hours);
        setTimeMinutes(minutes);
        setTimeSeconds(seconds);

        if(distance <= 0) {
            clearInterval (interval);
        }
        }, 1000);
       

    },[]); 

    return(
       <div>
           <div className="count-body">
               <div class="count-body-2">
           <p>The Countdown Begins.</p>
           <div className="count-container">
           <div className="count-content">
               <div>
               <p>{timerDays}</p>
               </div>
                   <p><small>DAYS</small></p>
               </div>

               <div className="count-content">
               <div>
               <p>{timerHours}</p>
               </div>
                   <p><small>HOURS</small></p>
               </div>

               <div className="count-content">
                <div>
               <p>{timerMinutes}</p>
               </div>
               <p><small>MINUTES</small></p>
               </div>

               <div className="count-content">
               <div>
               <p>{timerSeconds}</p>
               </div>
               <p><small>SECONDS</small></p>
               </div>
           </div>
           </div>
           </div>
       </div>
    )
};

export default Counter;