import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
    <div className=''>
      <header className='cabecalho'>
        <h1 className='name'>Vagas0800</h1>
        <nav>
          <ul className='menu'>
            <li><a href="#">Login</a></li>
            <li><a href="#">Empresas</a></li>
            <li><a href="#">Vagas</a></li>
          </ul>
        </nav>
      </header>
      <div className='find'>
        <h1 className='tittle'>Encontre sua vaga</h1>
          <input type="text" placeholder='cargo ou empresa' className='input'/>
          <input type="text" placeholder='cidade ou estado' className='input'/>
      </div>
    </div>
    </>
  )
}

export default Header