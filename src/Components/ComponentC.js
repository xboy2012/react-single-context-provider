import React, { memo, useContext } from 'react';
import SingleContext from "../Contexts/SingleContext";

const ComponentC = () => {
    console.log('ComponentC rendered');
    const { c } = useContext(SingleContext);
    return (
        <div style={{ border: '1px solid #000' }}>
            <h2>Component C</h2>
            <div>Value from SingleContext.c "{c}"</div>
        </div>
    );
};

export default memo(ComponentC);
