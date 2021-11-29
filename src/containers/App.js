import React from 'react'
import Header from '../components/layout/header'
import Container from '../components/layout/container'

function App() {
  return (
    <div className="h-screen" data-test="app-container">
      <Header data-test="header-component"/>
      <Container data-test="container-component"/>
    </div>
  )
}

export default App
