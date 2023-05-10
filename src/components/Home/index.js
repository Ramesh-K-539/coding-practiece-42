// Write your code here

import './index.css'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
          <div
            className={
              isDarkTheme ? 'home-bg-container dark-home' : 'home-bg-container'
            }
          >
            <Navbar />
            <div className="home-container">
              <img
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
                }
                alt="home"
                className="home-icon"
              />
              <h1
                className={
                  isDarkTheme
                    ? 'home-container-heading white-color'
                    : 'home-container-heading'
                }
              >
                Home
              </h1>
            </div>
          </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
