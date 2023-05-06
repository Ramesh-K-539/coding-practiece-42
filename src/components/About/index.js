// Write your code here

import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          <div
            className={
              isDarkTheme ? 'home-container about-dark-theme' : 'home-container'
            }
          >
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
              }
              alt="about"
              className="home-icon"
            />
            <h1
              className={
                isDarkTheme
                  ? 'home-container-heading white-text-color'
                  : 'home-container-heading'
              }
            >
              About
            </h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
