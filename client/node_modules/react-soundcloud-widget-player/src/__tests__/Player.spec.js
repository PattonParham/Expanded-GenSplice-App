/* setup enzyme */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

/* setup jsdom */
var jsdom = require('jsdom')
const { JSDOM } = jsdom
const window = new JSDOM('').window
global.window = window
global.document = window.document

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Player from '../Player'

test('Player renders correctly and matches snapshot', () => {
  const component = renderer.create(
    <Player
      title="EASYFUN - Be Your USA feat. Iiris"
      audioUrl="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/449016357"
    />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Player renders the correct elements and props', () => {
  const wrapper = shallow(
    <Player
      title="EASYFUN - Be Your USA feat. Iiris"
      audioUrl="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/449016357"
    />
  )
  expect(wrapper.instance().props.title).toEqual(
    'EASYFUN - Be Your USA feat. Iiris'
  )
  expect(wrapper.instance().props.audioUrl).toEqual(
    'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/449016357'
  )
  expect(wrapper.find('#sc-widget').props().allow).toEqual('autoplay')
  // console.log(wrapper.debug())
})
