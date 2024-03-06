
'use client';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
export default function Navbars() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png" className="mr-3 h-6 sm:h-9" alt="Flowbite " />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-md">Bonnie Green</span>
            <span className="block truncate text-md font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse >
        <Navbar.Link href="#" active className="text-white text-xl">
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className="text-xl">About</Navbar.Link>
        <Navbar.Link href="#" className="text-xl">Services</Navbar.Link>
        <Navbar.Link href="#" className="text-xl">Pricing</Navbar.Link>
        <Navbar.Link href="#" className="text-xl">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
