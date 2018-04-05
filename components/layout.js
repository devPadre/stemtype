import React from 'react';
import { initGA, logPageView, logEvent } from '../utils/analytics';

export default class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView(),
    logEvent()
  }
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}