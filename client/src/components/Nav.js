
  import React from 'react'
  import {useDarkMode} from '../hooks/useDarkMode'
  
  
  const Nav = () => {
      const [darkMode, setDarkMode] = useDarkMode("Dark Mode", false)
      const toggle = (e) =>{
          e.preventDefault();
          setDarkMode(!darkMode)
      }
      return (
          <nav className = 'navbar'>
          <button onClick = {toggle}>Toggle</button>
          </nav>
      )
  }
  export default Nav;