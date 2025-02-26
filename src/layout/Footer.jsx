function Footer () {
    return  <footer className="page-footer footer">
    
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()} Why would you need this?
      <a className="repo-link right" href="#!">Repo</a>
      </div>
    </div>
  </footer>
}

export {Footer}