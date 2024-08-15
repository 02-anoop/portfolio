import React from "react";
import './CSS/Project.css';

const Card = (props) => {
    return (
        <div className="card-body">
            <img src={props.img} alt={props.title} className="projectimg" />
            <div className="pro">
                <h1 className="projectname">{props.projecttitle}</h1>
                <p className="projecttext">{props.projectdet}</p>
            </div>
        </div>
    );
};

export default Card;
