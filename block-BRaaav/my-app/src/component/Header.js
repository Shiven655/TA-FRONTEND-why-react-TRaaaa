function Header() {
  return (
    <>
      <header class="navbar">
        <div class="container flex">
          <div class="flex">
            <a class="brand" href="#">
              <strong>Hydro</strong>
            </a>
            <nav>
              <ul class="flex nav-menu nav-menu-primary">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Our Work</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
              </ul>
            </nav>
          </div>
          <nav>
            <ul class="flex nav-menu nav-menu-secondary">
              <li class="social-media-item">
                <a href="#">
                  <i class="fab fa-facebook-square"></i>
                </a>
              </li>
              <li class="social-media-item">
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li class="social-media-item">
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a class="btn btn-primary" href="#">
                  {' '}
                  Sign in / Join{' '}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
