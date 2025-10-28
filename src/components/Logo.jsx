import logo from '../assets/img/logo.png'
import {Link} from 'react-scroll'

export default function Logo() {
  return (
    <Link className="logo block cursor-pointer" to="banner" spy={true} smooth={true} duration={600} offset={0}>
        <img className=' w-[95px] lg:w-[100px] h-10 ' src={logo} alt="site-logo" />
    </Link>
  )
}