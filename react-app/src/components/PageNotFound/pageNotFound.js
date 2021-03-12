import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./pageNotFound.css";

const PageNotFound = () => {

    const history = useHistory();
    const [count, setCount] = useState(5)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count -1);
            console.log(count)
        }, 1000)
        return () => clearInterval(interval);
    }, [count])

    setTimeout(() => {
     history.push("/")
    }, 5000)

    return (
        <>
            <div className="not-found-background">
                <div>
                    <h2>Ooops, this isn't ready yet</h2>
                    <h4>Taking you home{" "}<span>{" "}{count}</span></h4>
                </div>
            </div>
        </>
    )
}

export default PageNotFound;
