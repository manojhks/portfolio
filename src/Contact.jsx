import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCat, faEnvelope, faLink, faPhone} from '@fortawesome/free-solid-svg-icons'

export const Contact = () => {
  return (
    <div className="contact container d-flex flex-column justify-content-center">
    <div className="contactdiv">
    <h1 className="contacttitle">Contact Details :</h1><br/>
    <h2 className="titlehead">Manojh <span className="subtitle">(Front-end/ Web Developer)</span></h2>
    <p className="iconp"><FontAwesomeIcon className="icon" icon={faPhone} /><a className="link" href="7904395871"> +91 7904395871</a></p>
      <p className="iconp"><FontAwesomeIcon className="icon" icon={faEnvelope} /><a className="link" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSBpDltNgQmdzLKfBDlpzFjdTVwnnQzXBpssvbbSMsZWwzPnQsQCgzHdZlTDTTLPWkQMzdGf"> manojh.2010015@gmail.com</a></p>
      <p className="iconp"><FontAwesomeIcon className="icon" icon={faLink} /><a className="link" href="https://www.linkedin.com/in/manojhks/"> linkedin/manojhks</a></p>
      <p className="iconp"><FontAwesomeIcon className="icon" icon={faCat} /><a className="link" href="https://github.com/manojhks"> github/manojhks</a></p>
    </div>
    </div>
  )
}
