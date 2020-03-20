import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  let html
  let body
  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }

  return (
    <html
      style={{
        backgroundImage: `url(Background.png)`,
        backgroundSize: `cover`,
        overflow: `hidden`,
      }}
    >
      <div
        style={{
          backgroundImage: `url(Background.png)`,
          color: `white`,
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built By Farpotshket using
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          <div>
            <a href="https://www.Facebook.com">
              <img src="Face.png" alt="facebook"></img>
            </a>
            <a href="">
              {" "}
              <img src="twitter.png" alt="twitter" />
            </a>
            <a href="">
              {" "}
              <img src="mail.png" alt="mail" />
            </a>
          </div>
        </footer>
      </div>
    </html>
  )
}

export default Layout
