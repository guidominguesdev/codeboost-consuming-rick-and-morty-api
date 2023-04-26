import { useEffect, useState } from 'react'
import axios from 'axios'
import { ContainerApp, ContentCharacters, HeaderApp, Loader } from './styles'
import { CardCharacter } from '../CardCharacter'

import IconLoader from '../../assets/loader.gif'

export function Application() {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [countPages, setCountPages] = useState('')
  const [numberOfCharacters, setNumberOfCharacters] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => {
        const array = [...characters, ...response.data.results]
        setCharacters(array)
        setCountPages(response.data.info.pages)
        setNumberOfCharacters(response.data.info.count)
        setIsLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <>
      {isLoading && (
        <Loader>
          <img src={IconLoader} alt="Loading" />
        </Loader>
      )}

      <ContainerApp>
        <HeaderApp>
          <h1>Rick and Morty</h1>
          <span>N° de Personagens: {numberOfCharacters}</span>
        </HeaderApp>

        <ContentCharacters>
          <div>
            {characters &&
              characters.map(({ image, name, gender, species }, index) => {
                return (
                  <CardCharacter
                    key={index}
                    image={image}
                    name={name}
                    gender={gender}
                    specie={species}
                  />
                )
              })}
          </div>

          {!(page === countPages) && (
            <button onClick={() => setPage(page + 1)}>Carregar mais</button>
          )}
        </ContentCharacters>
      </ContainerApp>
    </>
  )
}
