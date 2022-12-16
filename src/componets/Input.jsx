import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function Input({ setTodos }) {
  const handleSubmitClick = (event) => {
    event.preventDefault();
    console.log("here!");
    const newTodo = {
      title: title,
      contents: contents,
      isDone: false,
      id: uuidv4(),
    };
    //지금 세팅된 title와 contents를 todos에 넣어주는 작업
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentsChange = (event) => {
    setContents(event.target.value);
  };

  return (
    <section>
      <form onSubmit={handleSubmitClick}>
        제목: <input value={title} onChange={handleTitleChange} />
        내용: <input value={contents} onChange={handleContentsChange} />
        <button>추가</button>
      </form>
    </section>
  );
}

export default Input;
