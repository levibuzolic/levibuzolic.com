import PropTypes from 'prop-types'
import chunk from 'lodash/chunk'
import React from 'react'
import Intro from '../components/Intro'
import Spending from '../components/Spending'
import SpendingAnimation from '../components/SpendingAnimation'
import Saving from '../components/Saving'
import SavingAnimation from '../components/SavingAnimation'
import Mission from '../components/Mission'
import Team from '../components/Team'
import Register from '../components/Register'

// This would normally be in a Redux store or some other global data store.
if (typeof window !== `undefined`) {
  window.postsToShow = 12
}

export default class Index extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    data: PropTypes.shape({
      user: PropTypes.object,
      allPostsJson: PropTypes.object,
    }),
  }

  static contextTypes = {
    setPosts: PropTypes.func,
  }

  constructor() {
    super()
    let postsToShow = 12
    if (typeof window !== `undefined`) {
      postsToShow = window.postsToShow
    }

    this.state = {
      showingMore: postsToShow > 12,
      postsToShow,
    }
  }

  update() {
    const distanceToBottom = document.documentElement.offsetHeight - (window.scrollY + window.innerHeight);
    if (this.state.showingMore && distanceToBottom < 100)
      this.setState({ postsToShow: this.state.postsToShow + 12 })
    this.ticking = false
  }

  handleScroll = () => {
    if (!this.ticking) {
      this.ticking = true
      requestAnimationFrame(() => this.update())
    }
  }

  componentDidMount() {
    window.addEventListener(`scroll`, this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener(`scroll`, this.handleScroll)
  }

  render() {
    return (
      <main>
        <SpendingAnimation />
        <SavingAnimation />
        <Intro />
        <Spending />
        <Saving />
        <Mission />
        <Register />
        <Team />
      </main>
    )
  }
}

export const pageQuery = graphql`
  query allImages {
    user: allPostsJson(limit: 1) {
      edges {
        node {
          username
        }
      }
    }
    allPostsJson {
      edges {
        node {
          id
          text
          weeksAgo: time(difference: "weeks")
          ...Post_details
          ...PostDetail_details
        }
      }
    }
  }
`
