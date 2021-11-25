import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
	const router = useRouter();

	return(
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
		  <Link href='/'>
		  	<a className='navbar-brand'>
		  		Navbar
		  	</a>
		  </Link>
		  <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
		    <span className='navbar-toggler-icon'></span>
		  </button>
		  <div className='collapse navbar-collapse' id='navbarNav'>
		    <ul className='navbar-nav'>
		        <li className='nav-item active'>
			      	<Link href='/'>
			      		<a className={ router.pathname === '/' ? 'nav-link active' : 'nav-link' }>
			      			Home 
			      		</a>
			      	</Link>
		        </li>
		        <li className='nav-item'>
			      	<Link href='/register'>
			      		<a className={ router.pathname === '/register' ? 'nav-link active' : 'nav-link' }>
			      			Register 
			      		</a>
			      	</Link>
		        </li>
		        <li className='nav-item'>
			      	<Link href='/login'>
			      		<a className={ router.pathname === '/login' ? 'nav-link active' : 'nav-link' }>
			      			Login 
			      		</a>
			      	</Link>
		        </li>
		    </ul>
		  </div>
		</nav>
	)
}
export default Navbar;
