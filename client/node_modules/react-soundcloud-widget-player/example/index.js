import Player from '../lib/Player' // 'react-soundcloud-widget-player'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

class TestComponent extends Component {
  render() {
    return (
      <div>
        <Player
          title='EASYFUN - Be Your USA feat. Iiris'
          audioUrl="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/449016357"
        />
      </div>
    )
  }
}

ReactDOM.render(<TestComponent />, document.getElementById('root'))
