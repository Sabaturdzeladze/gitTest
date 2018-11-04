import React from 'react';

const Company = (props) => (
    <div>
        {!!props.company && (
            <div>
                <p>Company's name - {props.company.name}</p>
                <p>Company's catch Phrase - "{props.company.catchPhrase}."</p>
            </div>
        )}
    </div>
)

export default Company;