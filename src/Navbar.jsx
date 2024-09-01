import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='container pt-2'>
      <Navbar {...args} light expand="lg" className='header'>
        <NavbarBrand className='fs-1 navbrand' href="/">PORTFOLIO</NavbarBrand>
        <NavbarToggler onClick={toggle} />
      <div className='container'>
        <Collapse isOpen={isOpen} navbar className='collapse'>
          <Nav className="d-flex align-items-baseline fs-4" navbar>
            <NavItem className='navitem'>
              <NavLink className='navlink' href="/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='navlink' href="/project">Project</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='navlink me-0' href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </div>
        </Navbar>
    </div>
  );
}

export default Example;
