import React, { useState } from "react";
import './NeumoTabs.css'
const NeumoTabs = (props: any) => {
    const id = props.id || 1;
    const [selected, setSelected] = useState({
        tab1: true,
        tab2: false,
        tab3: false
    })
    const {tab1, tab2, tab3} = selected;
    const tabOneClass = tab1 ? `tabs-${id}-tab-1 selected` : `tabs-${id}-tab-1`;
    const tabTwoClass = tab2 ? `tabs-${id}-tab-2 selected` : `tabs-${id}-tab-2`;
    const tabThreeClass = tab3 ? `tabs-${id}-tab-3 selected` : `tabs-${id}-tab-3`;
    return (
        <div style={{color: '#9DABD0'}} className={`neumo neumo-tabs-${id}`}>
            <a onClick={() => {setSelected({tab1: true, tab2: false, tab3: false})}} >
            <span 
            className={`tab ${tabOneClass}`}>Tab 1</span></a>
            <span 
            onClick={() => {setSelected({tab1: false, tab2: true, tab3: false})}}
            className={`tab ${tabTwoClass}`}>Tab 2</span>
            <span 
            onClick={() => {setSelected({tab1: false, tab2: false, tab3: true})}}
            className={`tab ${tabThreeClass}`}>Tab 3</span>
        </div>
    )
}
export default NeumoTabs;