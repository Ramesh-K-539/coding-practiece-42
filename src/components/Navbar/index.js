// Write your code here

import './index.css'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onChangeTheme = () => {
        toggleTheme()
      }

      return (
        <nav
          className={
            isDarkTheme
              ? 'nav-bar-container nav-dark-theme'
              : 'nav-bar-container'
          }
        >
          <ul className="ul-list">
            <li className="list-item">
              <img
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
                }
                alt="website logo"
                className="logo"
              />
            </li>
            <li className="list-item">
              <Link to="/" className="link-item">
                <p
                  className={
                    isDarkTheme ? 'home-text nav-dark-theme-text' : 'home-text'
                  }
                >
                  Home
                </p>
              </Link>
              <Link to="/about" className="link-item">
                <p
                  className={
                    isDarkTheme ? 'home-text nav-dark-theme-text' : 'home-text'
                  }
                >
                  About
                </p>
              </Link>
            </li>
            <li className="list-item">
                <button
                  data-testid="theme"
                  type="button"
                  className="custom-btn"
                  onClick={onChangeTheme}
                >
                  <img
                    src={
                      isDarkTheme
                        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
                    }
                    alt="theme"
                    className="theme-logo"
                  />
                </button>
            </li>
          </ul>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
