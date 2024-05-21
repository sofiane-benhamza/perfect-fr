import React, { useState, useEffect } from 'react';

const Counter = () => {

    const initialTime = {
        days: 4,
        hours: 7,
        minutes: 49,
        seconds: 47,
    };

    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => {
                let { days, hours, minutes, seconds } = prevTime;

                if (seconds > 0) {
                    seconds -= 1;
                } else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes -= 1;
                    } else {
                        minutes = 59;
                        if (hours > 0) {
                            hours -= 1;
                        } else {
                            hours = 23;
                            if (days > 0) {
                                days -= 1;
                            } else {
                                // Stop the Form
                                clearInterval(intervalId);
                            }
                        }
                    }
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <div className="col-md-7 col-xs-12">
            <div className="continer centerIt">
                <div>
                    <h4>
                        Take <em>any online course</em> and win $100 for your next class
                    </h4>
                    <div className="counter">
                        <div className="days">
                            <div className="value">{String(timeLeft.days).padStart(2, '0')}</div>
                            <span>Days</span>
                        </div>
                        <div className="hours">
                            <div className="value">{String(timeLeft.hours).padStart(2, '0')}</div>
                            <span>Hours</span>
                        </div>
                        <div className="minutes">
                            <div className="value">{String(timeLeft.minutes).padStart(2, '0')}</div>
                            <span>Minutes</span>
                        </div>
                        <div className="seconds">
                            <div className="value">{String(timeLeft.seconds).padStart(2, '0')}</div>
                            <span>Seconds</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Counter;
