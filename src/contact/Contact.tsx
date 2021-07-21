import * as React from 'react'
import './Contact.scss'

import ContentTitle from '../common/ContentTitle'

const Contact = ({ className, isMobile }) => {
  return (
    <div id="contact" className={className}>
      <ContentTitle title="CONTACT" />
      <div className="contact_container">
        Contact
      </div>
    </div>
  )
}

export default Contact