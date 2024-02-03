import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import logo from "../logo.svg";

export const Navigation = () => {
  const configActiveLink = ({ isActive }: { isActive: boolean }): string =>
    isActive ? "nav-active" : "";

  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            <li>
              <NavLink to="/home" className={configActiveLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={configActiveLink}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={configActiveLink}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="about" element={<h1>About page</h1>} />
          <Route path="users" element={<h1>Users page</h1>} />
          <Route path="home" element={<h1>Home page</h1>} />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
