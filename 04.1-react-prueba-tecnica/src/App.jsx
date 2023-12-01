import { useEffect, useState } from 'react'
import './App.css'

const RANDOM_FACT_FROM_API = 'https://catfact.ninja/fact'
// const RANDOM_IMAGE_FROM_API = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(RANDOM_FACT_FROM_API)
      .then(res => {
        if (!res.ok) throw new Error('Error fetching data')
        return res.json()
      })
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
      .catch(error => {
        // tanto si hay un error en la peticion
        // como si hay un error en la respuesta
        // el catch con el fetch solo detecta errores en la peticion(no en la respuesta)
        console.log(error)
      })
  }, [])

  useEffect(() => {
    if (!fact) return

    const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')

    fetch(`https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=green`)
      .then(res => {
        if (!res.ok) throw new Error('Error fetching data')
        const { url } = res
        setImageUrl(url)
      })
      .catch(error => console.log(error))
  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      <section>
        {fact && <h2>{fact}</h2>}
        {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words of ${fact}`} loading='lazy' />}
      </section>
    </main>
  )
}
