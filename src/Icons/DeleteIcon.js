import './DeleteIcon.css';
import { FaDeleteLeft } from "react-icons/fa6";
import React from "react";

function DeleteIcon({onDelete}) {
    return <FaDeleteLeft
        className="deleteIcon"
        size={'30px'}
        onClick={onDelete}
    />;
}

export { DeleteIcon };