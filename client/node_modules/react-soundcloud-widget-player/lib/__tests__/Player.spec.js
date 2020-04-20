"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Player = _interopRequireDefault(require("../Player"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* setup enzyme */
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
/* setup jsdom */

var jsdom = require('jsdom');

var JSDOM = jsdom.JSDOM;
var window = new JSDOM('').window;
global.window = window;
global.document = window.document;
test('Player renders correctly and matches snapshot', function () {
  var component = _reactTestRenderer.default.create(_react.default.createElement(_Player.default, {
    title: "EASYFUN - Be Your USA feat. Iiris",
    audioUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/449016357"
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Player renders the correct elements and props', function () {
  var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Player.default, {
    title: "EASYFUN - Be Your USA feat. Iiris",
    audioUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/449016357"
  }));
  expect(wrapper.instance().props.title).toEqual('EASYFUN - Be Your USA feat. Iiris');
  expect(wrapper.instance().props.audioUrl).toEqual('https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/449016357');
  expect(wrapper.find('#sc-widget').props().allow).toEqual('autoplay'); // console.log(wrapper.debug())
});