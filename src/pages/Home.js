import React from 'react'
import Search from '../components/HomePage/Search/Search'
import Card from '../components/HomePage/Card/Card'

const Home = () => {
  return (
    <section>
      <div className="container">
        <Search />
        <Card />
      </div>
    </section>
  )
}

export default Home