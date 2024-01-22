import * as React from 'react'

function Hello() {
  // delete this variable declaration and replace it with a React.useState call
  const name = ''

  function handleChange(event) {
    // update the name here based on event.target.value
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Hello />
}

export default App
