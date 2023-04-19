import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav class="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" onClick={() => navigate('/')}>
            YZFlix
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" onClick={() => navigate('/')}>
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={() => navigate('/Contact')}>
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
