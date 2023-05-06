// Write your code here

import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          <div
            className={
              isDarkTheme ? 'home-container dark-bg-color' : 'home-container'
            }
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-icon"
            />
            <h1
              className={
                isDarkTheme
                  ? 'not-found-container-heading white-color'
                  : 'not-found-container-heading'
              }
            >
              Lost Your way?
            </h1>
            <p
              className={
                isDarkTheme
                  ? 'not-found-description white-color'
                  : 'not-found-description'
              }
            >
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
