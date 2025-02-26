function Header () {
    return <nav className="header">
        <div className="nav-wrapper">
        <a href="www.youtube.com" className="brand-logo">React Movies</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="!#">Repo</a></li>
        </ul>
        </div>
    </nav>
}

export {Header}