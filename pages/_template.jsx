import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import '../css/markdown-styles'
import logo from '../images/logoWhiteTransparent.png'

import { rhythm } from '../utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <div
          style={{
            background: '#252525'
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              paddingTop: 0,
              padding: `${rhythm(1)} ${rhythm(1)}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
                <div>
                    <Link
                      to={prefixLink('/')}
                      style={{
                        color: 'white',
                        textDecoration: 'none',
                      }}
                    >
                      <img src={logo} alt="FutureGerald Logo" style={styles.logo}></img>
                    </Link>
                  <h3 style={styles.netlifyAwesome}>Netlify is Awesome! =D</h3>
              </div>
          </Container>
        </div>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
        </Container>
      </div>
    )
  },
})

const styles = {
  logo:{
    width: 500,
    height: "auto",
  },
  netlifyAwesome: {
    textAlign: "center",
    color: "white",
  }
};
