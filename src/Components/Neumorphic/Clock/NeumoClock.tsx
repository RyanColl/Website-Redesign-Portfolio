import React, { useEffect, useState } from "react";
import './NeumoClock.css';

const NeumoClock = (props: any) => {
    const [hDeg, setHDeg] = useState(0)
    const [mDeg, setMDeg] = useState(0)
    const [sDeg, setSDeg] = useState(0)
    const clock = () => {
        const today = new Date();
        let h = (today.getHours() % 12) + today.getMinutes() / 59; // 22 % 12 = 10pm
        let m = today.getMinutes(); // 0 - 59
        let s = today.getSeconds(); // 0 - 59
        setHDeg(h *= 30); // 12 * 30 = 360deg
        setMDeg(m *= 6);
        setSDeg(s *= 6); // 60 * 6 = 360deg
    }
    const [width, ] = useState(props.width || 200)
    useEffect(() => {
        window.onload = () => {
            setInterval(() => {
            clock()
            }, 500);
        } 
    }, [])
    return (
        <div style={{width, height: width}} className="neumo neumo-clock">
            <div style={{transform: `rotate(${hDeg}deg)`}} className="hand hours"></div>
            <div style={{transform: `rotate(${mDeg}deg)`}} className="hand minutes"></div>
            <div style={{transform: `rotate(${sDeg}deg)`}} className="hand seconds"></div>
            <div className="point"></div>
            <div className="marker">
                <span className="marker__1"></span>
                <span className="marker__2"></span>
                <span className="marker__3"></span>
                <span className="marker__4"></span>
            </div>
        </div>
    )
}
export default NeumoClock;