import React, { memo } from "react";

const AddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const newHabit = inputRef.current.value;
    newHabit && props.onAdd(newHabit);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Add new habit!"
      />
      <button className="add-button">ADD</button>
    </form>
  );
});

export default AddForm;
