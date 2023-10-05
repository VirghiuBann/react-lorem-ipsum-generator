import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(1)

  const handleChange = () => {
    if (count > 8) return

    setCount(count + 1)
  }

  return (
    <section>
      <h2>Tired of boring lorem ipsum?</h2>
      <form>
        <input
          type='text'
          id='count'
          name='count'
          value={count}
          onChange={handleChange}
        />
        <button type='submit'>Generate</button>
      </form>
    </section>
  )
}
export default App
