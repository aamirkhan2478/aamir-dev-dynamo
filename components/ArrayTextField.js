import React, { useState } from "react";

const ArrayTextField = ({ setData, data }) => {
  const [text, setText] = useState("");

  const handleButtonPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (text.trim() !== "") {
        setData([...data, text]);
        setText("");
      }
    }
  };

  const handleBadgeRemove = (e, index) => {
    e.preventDefault();
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  const renderBadge = (item, index) => {
    return (
      <div key={index} className='flex items-center mt-2'>
        <span className='bg-blue-500 text-white px-3 py-1 rounded mr-2'>
          {item}
        </span>
        <button
          className='bg-red-500 w-6 h-6 rounded-full flex items-center justify-center'
          onClick={(e) => handleBadgeRemove(e, index)}
        >
          X
        </button>
      </div>
    );
  };
  return (
    <div>
      <div className='relative'>
        <input
          className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orangeColor focus:outline-none focus:ring-0 focus:border-orangeColor peer'
          type='text'
          value={text}
          id='languages'
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleButtonPress}
          placeholder=''
        />
        <label
          for='languages'
          class='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-orangeColor 
          peer-focus:dark:bg-darkColor
          peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'
        >
          Programming Languages
        </label>
      </div>
      <div className='flex flex-wrap gap-3'>
        {data?.map((item, index) => renderBadge(item, index))}
      </div>
    </div>
  );
};

export default ArrayTextField;
