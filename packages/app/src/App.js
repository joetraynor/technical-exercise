import { useState } from 'react'
import './App.css';
import Commit from './Commit';

const App = _ => {
  const [state, setState] = useState({
    data: [],
    error: false,
  })
  const [isLoading, setLoading] = useState(false)

  const request = async () => {
    setState({ ...state })
    setLoading(true)
    const response = await fetch(`/api`)
    const data = await response.json()
    // TODO: add error handing for api request
    setState({ data })
    setLoading(false)
  }

  return(
    <div className='App'>
      {isLoading ? <img src='spinner.gif' /> : <button onClick={request}>Request GitHub data</button>}
      {state.data.map(com => {
        return <Commit key={com.date} name={com.name} date={com.date} message={com.message}/>
      })}
    </div>
  )
}

export default App;
