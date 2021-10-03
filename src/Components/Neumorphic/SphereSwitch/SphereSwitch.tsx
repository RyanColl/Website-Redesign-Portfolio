import React, {useState} from "react";
import './SphereSwitch.css'
const SphereSwitch = (props: any) => {
    const id = props.id || 1;
    const [isChecked, setChecked] = useState(props.isChecked || false);
    const [color, setColor] = useState('#9BAACF')
    const [inset, setInset] = useState(props.isChecked ? 'sphere-inset' : 'sphere-set')
    return (
        <div 
        className={`neumo sphere-switch-${id} ${inset}`}
        onMouseOver={() => {setColor('#396FF9')}}
        onMouseOut={() => {setColor('#9BAACF')}}
        onClick={() => {
            isChecked ? setInset('sphere-set') : setInset('sphere-inset')
            if(isChecked) {
                setInset('sphere-set')
                setChecked(false)
            }
            else {
                setInset('sphere-inset')
                setChecked(true)
            }
        }}
        >
            <div 
            className={`inner-sphere-${id}`}
            style={isChecked ? {backgroundColor: '#396FF9'} : {backgroundColor: color}}
            ></div>
        </div>
    )
}
export default SphereSwitch;