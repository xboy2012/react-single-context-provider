import React, { memo, useContext } from 'react';
import SingleContext from "../Contexts/SingleContext";

const ComponentA = () => {
    const { a } = useContext(SingleContext);
    console.log('ComponentA rendered');
    return (
        <div style={{ border: '1px solid #000' }}>
            <h2>Component A</h2>
            <div>Value from SingleContext.a "{a}"</div>
        </div>
    );
};

export default memo(ComponentA);
