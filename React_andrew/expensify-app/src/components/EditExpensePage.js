import React from 'react';

const EditExpensePage = (props) => {
  return (
    <div>
      Editing The expenses with id {props.match.params.id}
    </div>
  );
}

export default EditExpensePage;
