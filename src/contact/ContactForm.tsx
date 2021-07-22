/* eslint-disable no-unused-expressions */
import * as React from 'react'
import { useState, useRef } from 'react'
import axios from 'axios'
import './ContactForm.scss'

const API_URL = 'https://j8f18cozk9.execute-api.ap-northeast-2.amazonaws.com/default/ses'

const ContactForm = ({ isMobile }) => {
  const NameInput = useRef()
  const EmailInput = useRef()
  const MessageInput = useRef()

  const [loading, setLoading] = useState(false)

  const sendEmail = async () => {
    if (!checkText(NameInput) || !checkEmail() || !checkText(MessageInput)) {
      return 0
    }
    const { data } = await axios.post(API_URL, 
    {
      name: '',
      email: '',
      message: '',
    }, 
    {
      headers: {
        'x-api-key': 'O1xPstMeKV8qPgNiLrQyVMItz9ert6A5yFpuSQH7'
      }
    })
    return 0
  }

  const checkText = (input, minLen=1) => {
    const target = (input.current as HTMLInputElement)
    const result = target.value.length >= minLen
    result ? target.classList.remove('invalid') : target.classList.add('invalid')
    return result
  }

  const checkEmail = () => {
    const regex = /^([\w\\.\\_\\-])*[a-zA-Z0-9]+([\w\\.\\_\\-])*([a-zA-Z0-9])+([\w\\.\\_\\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/
    const target = (EmailInput.current as HTMLInputElement)
    const result = regex.test(target.value)
    result ? target.classList.remove('invalid') : target.classList.add('invalid')
    return result
  }

  return (
    <div className='contact_form'>
      <div className={`contact_form_field ${!isMobile && 'half'}`}>
        <span className='contact_form_title'>Full Name</span>
        <input 
          ref={NameInput} 
          type='text' 
          className='contact_form_input'
          onChange={() => checkText(NameInput)} />
      </div>
      <div className={`contact_form_field ${!isMobile && 'half'}`}>
        <span className='contact_form_title'>Email</span>
        <input 
          ref={EmailInput} 
          type='text' 
          className='contact_form_input'
          onChange={checkEmail} />
      </div>
      <div className='contact_form_field'>
        <span className='contact_form_title'>Message</span>
        <textarea 
          ref={MessageInput} 
          className='contact_form_input'
          cols='30' rows='10' 
          onChange={() => checkText(MessageInput, 10)} />
      </div>
      <div className='contact_form_field center'>
        <button className='contact_form_button' type='button' onClick={sendEmail}>
          SEND MESSAGE
          <i className='fas fa-spinner' />
        </button>
      </div>
    </div>
  )
}

export default ContactForm
