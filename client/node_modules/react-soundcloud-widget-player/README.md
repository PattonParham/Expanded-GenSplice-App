# react-soundcloud-widget-player

[![npm version](https://badge.fury.io/js/react-soundcloud-widget-player.svg)](https://badge.fury.io/js/react-soundcloud-widget-player)

![](https://raw.githubusercontent.com/react-z/react-soundcloud-widget-player/master/example/screenshot.gif)

react-soundcloud-widget-player is a simple SoundCloud player using the [Widget API](https://developers.soundcloud.com/docs/api/html5-widget)

## Installation

`yarn add react-soundcloud-widget-player`

## Usage

Ensure you include the soundcloud widget player API

`<script type="text/javascript" src="https://w.soundcloud.com/player/api.js"></script>`

Then init your player

```javascript
import Player from 'react-soundcloud-widget-player'
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
```

## Styles

Uses styled-components 💅 for the base styling.

## Development
    yarn
    yarn dev

## Test
    yarn test

## Build
    yarn
    yarn build

## Publish
    npm login
    npm version patch
    git add -A
    git push origin master
    npm publish

## License

[MIT](http://isekivacenz.mit-license.org/)
