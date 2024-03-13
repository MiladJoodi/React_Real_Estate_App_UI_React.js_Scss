import "./navbar.scss"

const Navbar = () => {
    return (
        <nav>
            {/* Navbar -> Left */}
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>Real Estate</span>
                </a>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Agents</a>
            </div>

            {/* Navbar -> Right */}
            <div className="right">
                <a href="/">Sign in</a>
                <a href="/" className="register">Sign up</a>

                {/* Hamburger Icon */}
                <div className="menuIcon">
                    <img src="/menu.png" alt="" />
                </div>

                {/* Mobile Menu */}
                <div className="menu">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                    <a href="">Agents</a>
                    <a href="">Sign in</a>
                    <a href="">Sign up</a>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;