import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export default function App () {
  const [fact, setFact] = useState(null)

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(res => setFact(res.fact))
  }, [])

  return (
    <>
      <h1>App de gatitos</h1>
      <h2>{fact}</h2>
    </>
  )
}
