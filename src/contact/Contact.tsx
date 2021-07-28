/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import { useContext } from 'react'
import './Contact.scss'

import ContentTitle from '../common/ContentTitle'
import ContactForm from './ContactForm'
import { MainContext } from '../providers/mainProvider'

const contactInfo = [
  {
    icon: 'fas fa-map-marked-alt',
    value: 'Yongsan-gu, Seoul, Korea',
  },
  {
    icon: 'far fa-envelope',
    value: 'ji584738@gmail.com',
  },
  {
    icon: 'fas fa-mobile-alt',
    value: '+82 10-9878-3059',
  },
  {
    icon: 'fab fa-github',
    value: 'devplutus',
  },
]

const Contact = ({ className }) => {
  const { isMobile, language } = useContext(MainContext)

  return (
    <div id="contact" className={className}>
      <ContentTitle title={language === 'ko' ? '연락처' : 'CONTACT'} />
      <div className="contact_container">
        <div className="contact_content">
          {contactInfo.map((contact, i) => (
            <div className="contact" key={new Date().getTime() + i}>
              <div className="contact_icon">
                <i className={contact.icon} />
              </div>
              <div className="contact_value">{contact.value}</div>
            </div>
          ))}
        </div>
        <div className="contact_content">
          <ContactForm isMobile={isMobile} />
        </div>
      </div>
    </div>
  )
}

export default Contact
