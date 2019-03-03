import React from 'react'
import Link from 'gatsby-link'
import "./style.css"

class Template extends React.Component {
  render() {
    const { children } = this.props
    let nav
    let footer

    nav = (
      <nav>
          <ul>
              <li className="push-left"><Link to={'/'} >Campaign Library</Link></li>
              <li><Link to={'/'}>Library</Link></li>
              <li><Link to={'/about'}>About</Link></li>
          </ul>
      </nav>
    )

    footer = (
      <footer>
        A <a href="https://campaignlab.london">Campaign Lab</a> project.
      </footer>
    )

    return (
      <div>
        {nav}
        {children}
        {footer}
      </div>
    )
  }
}

export default Template
