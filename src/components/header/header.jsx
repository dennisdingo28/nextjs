import Link from "next/link"
import Image from "next/image"
export const Header = () => {
  return (
    <header>
      <div className="topNav">
        <Image alt="logo" src={"/images/logo_black.png"} width={50} height={50}/>
        <nav>
          <Link href='/' passHref>
            <div>Home</div>
          </Link>
          <Link href='/events' passHref><div>Events</div></Link>
          <Link href='/about-us' passHref><div>About Us</div></Link>
        </nav>
      </div>
      <p className="title">Lorem ipsum dolor sit amet.</p>
    </header>
  )
}

