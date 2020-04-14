import React, { memo, useContext } from 'react';
import SingleContext from "../Contexts/SingleContext";

const ComponentB = () => {
    const { b } = useContext(SingleContext);
    console.log('ComponentB rendered');
    return (
        <div style={{ border: '1px solid #000' }}>
            <h2>Component B</h2>
            <div>Value from SingleContext.b "{b}"</div>
        </div>
    );
};

export default memo(ComponentB);
