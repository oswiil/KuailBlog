import React from "react"
import { graphql } from "gatsby"
import { useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      avatar: file(absolutePath: { regex: "/twitter.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      avata: file(absolutePath: { regex: "/Face.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Image
      fixed={data.avatar.childImageSharp.fixed}
      style={{
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        minWidth: 50,
        borderRadius: `100%`,
      }}
      imgStyle={{
        borderRadius: `50%`,
      }}
      fixed={data.avata.childImageSharp.fixed}
      style={{
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        minWidth: 50,
        borderRadius: `100%`,
      }}
      imgStyle={{
        borderRadius: `50%`,
      }}
    ></Image>
  )
}
export default ComponentName
