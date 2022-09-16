import React, { useEffect, useRef, useState } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const [person, setPerson] = useState('')
  const refContainer = useRef(null)
  const divContainer = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    const newPerson = refContainer.current.value
    setPerson(newPerson)
  }

  

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
          <div>
              <input type='text'  ref={refContainer}/>
              <button type='submit'>submit</button>
          </div>
      </form>
      <h3>{person}</h3>
    </>
  )
};

export default UseRefBasics;
