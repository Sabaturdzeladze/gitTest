import React from "react";

export const IndexPage = props => (
    <div className="index">
        <h1 className="index--heading">{props.title}</h1>
        <hr/>
        <p>
            {props.desc}
        </p>
    </div>
);