import './CompleteIcon.css';
import { FaCheck } from "react-icons/fa";
import React from "react";

function CompleteIcon({completed, onComplete}) {
    return <FaCheck 
        className="CompleteIcon"
        color={completed ? 'gray' : 'green'}
        size={'30px'}
        onClick={onComplete}
    />;
}

export { CompleteIcon };