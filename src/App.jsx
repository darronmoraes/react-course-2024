import React from 'react'

const App = () => {

  const name = 'Darron'

  const names = ['Brad', 'Jo', 'Gavin', 'Sara']

  const loggedIn = false;

  // if (loggedIn) {
  //   return <>Hello member</>
  // }

  const styles = {
    color: 'red',
    fontSize: '55px'
  }

  return (
    <>
    <div className='text-5xl'>Hello Jobs 2024</div>
    <p style={ styles } >Hello  { name }</p>
    <ul>
      { names.map((name, index) => (
        <li key={ index }>{ name }</li>
      ))}
    </ul>
    { loggedIn ? <>Hello member</> : <>Hello Guest</>}
    { loggedIn && <>Hello member</>}
    </>
  )
}

export default App