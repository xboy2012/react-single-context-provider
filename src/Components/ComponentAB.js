import React, { memo, useContext } from 'react';
import SingleContext from "../Contexts/SingleContext";

const ComponentAB = () => {
    const { a, b } = useContext(SingleContext);
    console.log('ComponentAB rendered');
    return (
        <div style={{ border: '1px solid #000' }}>
            <h2>Component AB</h2>
            <div>Value from SingleContext.a "{a}"</div>
            <div>Value from SingleContext.b "{b}"</div>
        </div>
    );
};

export default memo(ComponentAB);
