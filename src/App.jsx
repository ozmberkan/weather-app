import { useState } from 'react'
import Info from './components/Info'
import Form from './components/Form'

function App() {

  const [info, setInfo] = useState([])

  return (
    <div className='container mx-auto mt-12'>
      <Form setInfo={setInfo} info={info} />
      <hr className='my-10' />
      <Info info={info} />
    </div>
  )
}

export default App
