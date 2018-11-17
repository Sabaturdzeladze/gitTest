import React from 'react';
import Button from '../../Button';

const IdeasParagraph = (props) => (
    <div className="making--ideas__paragraph">
      <div className="ideas__paragraph__main">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil repellat, unde dolorem, explicabo ad
          sapiente voluptate temporibus libero accusantium animi repellendus sit quia corporis.</p>

        <Button
            className={"button case--study"}
            text={"CASE STUDY"} 
        />
      </div>

      <div className="categories">
        <div className="category">
          <h6>CATEGORY</h6>
          <p>Design & Branding</p>
          <hr/>
        </div>

        <div className="category">
          <h6>CLIENT</h6>
          <p>Cusco Barista</p>
          <hr/>
        </div>
      </div>
    </div>
);

export default IdeasParagraph;