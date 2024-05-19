import React from 'react'
import logo from '../assets/imgs/logo.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
	 <footer>
		<div className="container ">
			<div className="footer__wrap d-flex jcc">
				<div className="logo">
					<Link to='/'>
						<img src={logo} alt='logo' />
						<span className='slogan'>Test project</span>
					</Link>
				</div>

			</div>
		</div>
	 </footer>
  )
}

export default Footer
