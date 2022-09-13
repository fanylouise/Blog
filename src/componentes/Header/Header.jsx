import '../Header/Header.css'

import logo from '../../svg/Logo.svg'

const Header = () =>{

  const descLogo = 'Essa é a logo do blog.'
  return(
   <>
      <header>
        <div className='logo'>
          <img src={logo} alt={descLogo} />
        </div>
        <div className='search'>
          <input type="text" name='search' className='input-search' />
        </div>
          <ul className='menu'>
            <li><a className='nav-link' href="#">Categories</a>
            </li>
            <li><a className='nav-link'href="#">About</a>
            </li>
            <li><a className='nav-link'href="#">Contact</a>
            </li>
          </ul>
      </header>
   </>
  )
}

export default Header;