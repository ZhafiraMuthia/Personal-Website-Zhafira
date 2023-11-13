import './styles.css';

const Header = () => {
  return (
        <header>
            <div className="site-title">Japz.</div>

            <nav className="nav">
                <div className="container">
                    <ul>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/gallery">Gallery</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
  );
}

export default Header;