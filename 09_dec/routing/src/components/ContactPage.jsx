import React from "react";

export const ContactPage = props => (
    <div className="contact">
        <h1 className="contact--heading">{props.title}</h1>
        <hr />
        <p>
            {props.desc}
        </p>
    </div>
);