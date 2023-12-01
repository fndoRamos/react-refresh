import { useEffect, useState } from 'react'

const RANDOM_FACT_FROM_API = 'https://catfact.ninja/fact'
// const RANDOM_IMAGE_FROM_API = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(RANDOM_FACT_FROM_API)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')

        fetch(`https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red`)
          .then(res => {
            console.log(res)
            const { url } = res
            setImageUrl(url)
          })
      })
      .catch(error => console.log(error))
  }, [])

  // useEffect(() => {
  //   if (!fact) return
  //   const firstWord = fact.split(' ')[0]
  //   fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`)
  //     .then(res => console.log(res))
  //     // .then(data => console.log(data))
  // }, [fact])
  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <h2>{fact}</h2>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words of ${fact}`} loading='lazy' />}
    </main>
  )
}
