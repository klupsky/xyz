'use client'
import React, { useEffect, useState } from 'react'
import Slider from './components/Slider/component'
import data from './lib/data.js'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <main>{isLoading ? <p>Loading...</p> : <Slider data={data} />}</main>
    </>
  )
}
