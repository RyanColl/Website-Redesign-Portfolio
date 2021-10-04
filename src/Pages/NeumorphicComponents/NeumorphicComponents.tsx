import './NeumorphicComponents.css'
import React from 'react'
import NeumoBoard from '../../NeumoBoard/NeumoBoard';

const NeumorphicComponents = (props: any) => {
    return(
        <div className='neumorphic-components'>
            <div className='neumorphic-components-top'>
                <div className='neumorphic-components-h1-container'>
                    <h1 className='neumorphic-components-h1'>NEUMORPHIC COMPONENTS</h1>
                </div>
            </div>
            <NeumoBoard />
        </div>
    )
}
export default NeumorphicComponents;