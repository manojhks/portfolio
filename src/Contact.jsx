import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCat, faEnvelope, faLink, faPhone} from '@fortawesome/free-solid-svg-icons'

export const Contact = () => {
  return (
    <div className="contact container d-flex flex-column justify-content-center">
    <div className="contactdiv">
    <h1 className="contacttitle">Contact Details :</h1><br/>
    <h2 className="titlehead">Manojh<span className="subtitle">(Front-end/ Web Developer)</span></h2>
    <h4><FontAwesomeIcon className="icon" icon={faPhone} /><a className="link" href="7904395871"> +91 7904395871</a></h4>
      <h4><FontAwesomeIcon className="icon" icon={faEnvelope} /><a className="link" href="manojh.2010015@gmail.com"> manojh.2010015@gmail.com</a></h4>
      <h4><FontAwesomeIcon className="icon" icon={faLink} /><a className="link" href="www.linkedin.com/in/manojhks"> linkedin/manojhks</a></h4>
      <h4><FontAwesomeIcon className="icon" icon={faCat} /><a className="link" href="https://github.com/manojhks"> github/manojhks</a></h4>
    </div>
    </div>
  )
}
