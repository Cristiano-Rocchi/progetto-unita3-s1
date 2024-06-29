const Header = (props) => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img height="50px" src="" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link text-light active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Tv Shows
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Movies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    Recently added
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="#">
                    My List
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav me-1 mb-2 mb-lg-0">
                <li className="nav-item d-none d-lg-block">
                  <a className="nav-link text-light" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                  </a>
                </li>
                <li className="nav-item d-none d-lg-block">
                  <a className="nav-link text-light" href="#">
                    KIDS
                  </a>
                </li>
                <li className="nav-item d-none d-lg-block">
                  <a className="nav-link text-light" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bell-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                    </svg>
                  </a>
                </li>
              </ul>
              <div>
                <button
                  className="btn btn-dark dropdown-toggle d-lg-block d-none"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    width="20px"
                    src="./Netflix-assets/Netflix-assets/assets/avatar.png"
                    alt=""
                  />
                </button>
                <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="./edit-profile.html">
                      Edit Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="./settings.html">
                      Settings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section className="d-flex align-items-center">
        <h1 class="me-4 mb-3">Film</h1>
        <div>
          <button
            class="btn btn-dark dropdown-toggle border border-secondary"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Genres
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li>
              <a NclassNameclassName="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            NclassName
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
export default Header;
