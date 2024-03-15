
'use client';

import { Button, Navbar } from 'flowbite-react';

function NavBarComponent() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="">
        <img src="https://imgs.search.brave.com/5aUnxeoHEe9Oyd1gN1-On8N4hBXrPz03SbEW7i7wlJ8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMw/NDc5NjI1MS9waG90/by9kb2ctYW5kLWNh/dC10b2dldGhlci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/dFpPVEVYOVB0UURp/aFg2emdCYktrSEhX/NGxpTW5jMnBPaEtI/eE5LRmloVT0" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default  NavBarComponent;
