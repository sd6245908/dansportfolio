// import React from 'react'
// import { Progress } from 'semantic-ui-react'

// const PortfolioProgress = () => <Progress percent={70} />

// export default PortfolioProgress;

import React, { Component } from 'react'
import { Button, Progress } from 'semantic-ui-react'

export default class PortfolioProgress extends Component {
  state = { percent: 77 }

  increment = () =>
    this.setState((prevState) => ({
      percent: prevState.percent >= 100 ? 0 : prevState.percent + 20,
    }))

  render() {
    return (
      <div>
        <Progress percent={77} Active indicating inverted size='tiny' color='red' >This portfolio is still undergoing</Progress>
        {/* <Button onClick={this.increment}>Increment</Button> */}
      </div>
    )
  }
}