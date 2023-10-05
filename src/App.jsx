import { useState } from 'react'
import { nanoid } from 'nanoid'

import data from './data.js'

const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

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
          type='number'
          id='count'
          name='count'
          min='1'
          max='8'
          step='1'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>
      <article className='lorem-text '>
        {text.map((paragraph) => {
          const id = nanoid()
          return <p key={id}>{paragraph}</p>
        })}
      </article>
    </section>
  )
}
export default App
