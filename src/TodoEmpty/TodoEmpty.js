import React from "react";
import './TodoEmpty.css';

function TodoEmpty() {
    return (
        <div className="empty-container">
            <p className="empty-message">Crea nuevas tareas</p>
            <div className="arrow-container">
                <div className="arrow-body"></div>
                <div className="arrow-head"></div>
            </div>
        </div>
    );
}

export { TodoEmpty };
