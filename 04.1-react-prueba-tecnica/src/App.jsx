import { useEffect, useState } from 'react'

const RANDOM_FACT_FROM_API = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState('')

  useEffect(() => {
    fetch(RANDOM_FACT_FROM_API)
      .then(res => res.json())
      .then(data => setFact(data.fact))
      .catch(error => console.log(error))
  }, [])
  return (
    <>
      <h1>App de gatitos</h1>
      <h2>{fact}</h2>
    </>
  )
}
