import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='secao'>
      <div className='container'>
        <div className='div-form'>
            <h2 class="login">Login</h2>
            <p class="paragraph">Já tem cadastro?</p>

            <form action="" className='form'>
                <input type="text" name='email' placeholder='email' className='input-email'/>
                <div className='div-password'>
                    <input type="password" name="senha" placeholder='senha' className='input-senha'/>
                </div>
                <button className='button'>Login</button>
            </form>

            <div className='separation'>
              <p className='palavra-separacao'>OU</p>
            </div>

            <button className='button-google'>Login com Google</button>

            <button className='button-linkedin'>Login com Linkedin</button>

            <div className='btn-forget-register'>
              <button className='button-forget'>Esqueci minha senha</button>
              <button className='button-register'>Registre-se</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Form