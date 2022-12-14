import { useState } from 'react'
import './App.css';
import Commit from './Commit';

const App = (props) => {
  const [state, setState] = useState({
    data: [],
    error: false,
  })
  const [isLoading, setLoading] = useState(false)

  const request = async () => {
    setState({ ...state })
    setLoading(true)
    const response = await fetch('/api')
    const data = await response.json()
    setState({ data })
    setLoading(false)
  }

  return(
    <div>
      <button onClick={request}>Request GitHub data</button>
      {isLoading && <img src='spinner.gif' />}
      {state.data.map(com => {
        return <Commit key={com.date} name={com.name} data={com.date} message={com.message}/>
      })}
    </div>
  )
}

export default App;
