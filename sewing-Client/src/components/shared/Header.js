import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import ShowProfile from '../Profile/ShowProfile'
import styled from 'styled-components'
import { NavbarStyling } from '../styling//navbar.styled'



const linkStyle = {
    color: 'black',
    textDecoration: 'none'
}
const authenticatedOptions = (
	<>
		<Nav.Item className="m-2">
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item className="m-2">
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
		<Nav.Item className="m-2">
			<Link to='/tutorials' style={linkStyle}>
				Tutorials
			</Link>
		</Nav.Item>
		<Nav.Item className="m-2">
			<Link to='/profile' style={linkStyle}>
				Profile
			</Link>
			
		</Nav.Item>
		<Nav.Item className="m-2">
			<Link to='/community-Space' style={linkStyle}>
				Community Space
			</Link>
		</Nav.Item>
		<Nav.Item className="m-2">
			<Link to='/projects' style={linkStyle}>
				My Projects
			</Link>
		</Nav.Item>

	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item className="m-2">
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Item>
        <Nav.Item className="m-2">
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Link>
			<Link to='/' style={linkStyle}>
				Home
			</Link>
		</Nav.Link>
	</>
)

const Header = ({ user }) => (
<NavbarStyling>
	<Navbar bg='light' variant='light' expand='md' style={{}}>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='m-2' style={linkStyle}>Welcome, {user.email}</span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
	</NavbarStyling>
)

export default Header
