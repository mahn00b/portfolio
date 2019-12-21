import React, { Component } from 'react'
import '../public/assets/css/index.css'

import Link from 'next/link'

export default class Index extends Component<any, any> {
  render() {
    return (
      <div>
        <div> Go to:</div><br />
        <Link href="a">
          <div className="blue-text">a</div>
        </Link>
        <Link href="b">
          <div className="blue-text">b</div>
        </Link>
      </div>
    )
  }
}