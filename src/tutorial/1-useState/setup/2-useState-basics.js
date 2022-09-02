import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('random title')
  return (
    <React.Fragment>
        <h1>{text}</h1>
        <button onClick={() => text === 'random title' ? setText('hello world') : setText('random title')} type='button' className='btn'>
          Change Title
        </button>
    </React.Fragment>
  )
};

export default UseStateBasics;
