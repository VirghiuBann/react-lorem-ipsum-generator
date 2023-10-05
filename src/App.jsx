import { useState } from 'react'

import data from './data.js'

const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

  const handleChange = () => {
    if (count > 8) return

    setCount(count + 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const sliceData = data.slice(0, count)
    setText([...sliceData])
  }

  return (
    <section className='section-center'>
      <h4>Tired of boring lorem ipsum?</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='count'>Paragraph:</label>
        <input
          type='text'
          id='count'
          name='count'
          value={count}
          onChange={handleChange}
        />
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>
    </section>
  )
}
export default App
