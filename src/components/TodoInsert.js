import React from 'react';
import { DiApple } from "react-icons/di";
import './TodoInsert.scss';
 
const TodoInsert = () => {
  return (
    <form className="TodoInsert">
        <input placeholder="할 일을 입력하세요"/>
        <button type="submit">
            <DiApple/>
        </button>
    </form>
  );
};
 
export default TodoInsert;