/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ContactFoto from '../componentes/ContactFoto'
import emailjs from '@emailjs/browser'
import Footer from '../componentes/footer'
export default function Contact () {
  const [nombre, setNombre] = useState()
  const [email, setEmail] = useState()
  const [texto, setTexto] = useState()

  function onChangeNombre (e) {
    setNombre(e.target.value)
  }
  function onChangeEmail (e) {
    setEmail(e.target.value)
  }
  function onChangeTexto (e) {
    setTexto(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    emailjs
      .send(
        'service_dgb1qjh',
        'template_vq49jdd',
        {
          name: nombre,
          email: email,
          message: texto
        },
        'ZQyLcO-tYUgeLscBp'
      )
      .then(
        response => {
          console.log('Correo enviado', response)
          alert('Correo enviado')
        },
        error => {
          console.error('Error al enviar el correo:', error)
          alert('Error al enviar el correo. Inténtalo de nuevo.')
        }
      )
  }
  //grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2
  return (
    <div>
      <div className=' flex flex-col lg:flex-row-reverse'>
        <div className='w-fit mx-auto col-start-1 mt-7 sm:mt-7 lg:col-start-2'>
          <ContactFoto />
          <Footer />
          <p className='w-fit mx-auto  my-8 mont'>
            Hazme saber cualquier cosa!
          </p>
        </div>
        <div className='w-fit mx-auto col-start-1 pl-7 flex'>
          <div className='w-fit md:w-lg'>
            <form className=' shadow-md rounded px-8 pt-6 pb-8 mb-4'>
              <div className='mb-4'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='username'
                >
                  Nombre
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='username'
                  type='text'
                  placeholder='Username'
                  onChange={e => onChangeNombre(e)}
                />
              </div>
              <div className='mb-6'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='password'
                >
                  Correo
                </label>
                <input
                  type='email'
                  name='floating_email'
                  id='floating_email'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  placeholder='Escribe tu correo electronico'
                  required
                  onChange={e => onChangeEmail(e)}
                />
              </div>
              <div className='mb-6'>
                <label
                  className='block text-gray-700 text-sm font-bold mb-2'
                  htmlFor='password'
                >
                  Mensaje
                </label>
                <input
                  type='text'
                  name='floating_email'
                  id='floating_email'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  placeholder='Escribe el mensaje que me queires enviar!'
                  required
                  onChange={e => onChangeTexto(e)}
                />
              </div>
              <button
                type='submit'
                onClick={e => handleSubmit(e)}
                className='text-white  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
