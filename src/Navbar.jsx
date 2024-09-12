import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Theme } from './Theme';
import Resume from './images/ManojhResume.pdf'

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='container pt-2'>
      <Navbar {...args} expand="lg" className='header'>
        <h1 className='fs-1 navbrand' to="/">PORTFOLIO</h1>
        <NavbarToggler onClick={toggle} />
      <div className='container'>
        <Collapse isOpen={isOpen} navbar className='collapse'>
          <Nav className="d-flex align-items-baseline fs-4" navbar>
              <Link className='navlink' to="/">About</Link>
              <Link className='navlink' to="/project">Project</Link>
              <Link className='navlink' to="/contact">Contact</Link>
              <a className='navlink resume' href={Resume} download="ManojhKS.pdf">Resume</a>
    <Theme/>
          </Nav>
        </Collapse>
        </div>
        </Navbar>
    </div>
  );
}

export default Example;
