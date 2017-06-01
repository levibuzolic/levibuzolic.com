import React from 'react'
import DocumentTitle from 'react-document-title'
import logo from '!file-loader!../static/images/logo.png'

let stylesStr
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require('!raw-loader!../public/styles.css')
  } catch (e) {
    console.log(e)
  }
}

export default class HTML extends React.Component {
  render() {
    const title = DocumentTitle.rewind()
    let css
    if (process.env.NODE_ENV === 'production')
      css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{__html: stylesStr}} />

    return (
      <html lang="en">
        <head>
          {/*
          <link
            rel="preload"
            href={'/static/space-mono-latin-700.eadcd2d5.woff2'}
            as="font"
            crossOrigin
          />
          */}
          {this.props.headComponents}
          <meta charset="utf-8" />
          <meta name="description" content="alt" />
          <meta httpequiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" type="image/png" href={logo} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>alt</title>
          {css}
        </head>
        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{__html: this.props.body}} />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
