import '../src/css/header.css';

function Header (){
    return (
        <header className="menu-head">
            <div className="menu">
                <div className="menu-logo">
                    <a href="#">StartUp.</a>
                </div>
                <nav className="menu-nav">
                    <ul>
                        <li>
                            <a href="https://vai.com">Início</a>
                        </li>

                        <li>
                            <a href="https://vai.com">Serviços</a>
                        </li>

                        <li>
                            <a href="https://vai.com">Contato</a>
                        </li>

                        <li>
                            <a className="login-btn" href="https://vai.com">Login</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header