import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="sticky">
      <ul className={'nav'}>
        <li className={'nav__item'}><Link href="/">All Gifs</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
