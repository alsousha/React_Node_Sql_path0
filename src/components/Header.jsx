import React from 'react'
import { NavLink, Link } from 'react-router-dom';

import logo from '../assets/imgs/logo.svg'

function Header() {
  return (
	<header>
		<div className="container">
			<div className="header__wrap">
				<div className="logo">

					<Link to='/'>
						<img src={logo} alt='logo' />
						<span className='slogan'>Test project</span>
					</Link>
				</div>
				<nav>
					<ul className="menu">
						<li>
							<NavLink
								to="/"
								className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
								end
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about"
								className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contact"
								className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
							>
								Contact
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>

  )
}

export default Header
