import React, { useEffect, useState } from 'react'

const PaisLista = () => {

    const [paises, setPais] = useState([])
    const [paisPorPagina, setPaisPorPagina] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)

    const paisList = async() => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const paises = await data.json()
        
        setPais(paises)
    }

    useEffect(() => {
        paisList()
    },[])

  return (
    <div>
      
    </div>
  )
}

export default PaisLista