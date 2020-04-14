import React, { useState, useCallback, useMemo } from "react";
import SingleContext from "./Contexts/SingleContext";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
import ComponentAB from "./Components/ComponentAB";
import ComponentC from "./Components/ComponentC";
import ComponentD from "./Components/ComponentD";

export default function App() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    const value = useMemo(() => {
        return { a, b, c };
    }, [a, b, c]);

    const onClickA = useCallback(() => {
        setA(Math.random());
    }, []);
    const onClickB = useCallback(() => {
        setB(Math.random());
    }, []);
    const onClickC = useCallback(() => {
        setC(Math.random());
    }, []);

    return (
        <div>
            <h1>React Single Context Provider</h1>
            <SingleContext.Provider value={value}>
                <ComponentA />
                <ComponentB />
                <ComponentAB />
                <ComponentC />
                <ComponentD />
            </SingleContext.Provider>
            <button onClick={onClickA}>Change A</button>
            <button onClick={onClickB}>Change B</button>
            <button onClick={onClickC}>Change C</button>
        </div>
    );
}
