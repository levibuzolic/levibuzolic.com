import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/global.scss'

export default class DefaultLayout extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    children: PropTypes.func,
  }

  static childContextTypes = {
    setPosts: PropTypes.func,
  }

  getChildContext() {
    return {
      setPosts: posts => {
        this.posts = posts
      },
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children()}
        <Footer />
      </div>
    )
  }
}
