"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _FormatTime = _interopRequireDefault(require("./FormatTime"));

var _Play = _interopRequireDefault(require("./icons/Play"));

var _Pause = _interopRequireDefault(require("./icons/Pause"));

var _Replay = _interopRequireDefault(require("./icons/Replay"));

var _Forward = _interopRequireDefault(require("./icons/Forward"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  transition: transform 0.2s;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background: #f50;\n  display: block;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  flex: 1 1 auto;\n  width: 100%;\n  display: block;\n  padding: 0.1rem 0;\n  margin: 0 0.5rem;\n  cursor: pointer;\n  display: block;\n  position: relative;\n  width: 100%;\n  background: #eee;\n  border-radius: 2px;\n  overflow: hidden;\n  transform: translateZ(0);\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.1rem;\n  letter-spacing: 0.1rem;\n  line-height: 1rem;\n  color: #444;\n  flex: 0 1 auto;\n  vertical-align: middle;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  text-align: right;\n  margin-right: 1rem;\n  margin-left: 0;\n  font-feature-settings: tnum;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n  margin: 0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: inline-block;\n  margin-right: 0.4rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  flex: 1 1 100%;\n  margin-bottom: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 1.2rem;\n  min-width: 6rem;\n  transition: fill 125ms ease-in-out;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n  max-width: 10rem;\n  opacity: 0;\n  position: absolute;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid #444;\n  transition: color 125ms ease-in-out;\n  background: white;\n  position: relative;\n  padding: 1.8rem;\n  z-index: 5;\n  font-size: 1.4rem;\n  display: flex;\n  align-items: center;\n  /* active */\n  border-color: #a2a2a2;\n  background: white;\n  z-index: 10;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * SoundCloud Player
 * A simple SoundCloud player.
 **/
var Player =
/*#__PURE__*/
function (_Component) {
  _inherits(Player, _Component);

  _createClass(Player, null, [{
    key: "propTypes",
    get: function get() {
      return {
        audioUrl: _propTypes.default.string.isRequired
      };
    }
  }]);

  function Player(props) {
    var _this;

    _classCallCheck(this, Player);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Player).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "interval", null);

    _defineProperty(_assertThisInitialized(_this), "$embedPlayer", null);

    _this.state = {
      soundcloudAvailable: false,
      played: false,
      playing: false,
      paused: false,
      currentTime: 0,
      duration: 0
    };
    return _this;
  }

  _createClass(Player, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        if (window.SC && window.SC.Widget) {
          clearInterval(_this2.interval);

          _this2.initializePlayer();
        }
      }, 1000);
    }
    /*
    componentDidMount() {
      this.setState(
        { audioPlayer: ReactDOM.findDOMNode(this.refs.audio) },
        () => {
          this.state.audioPlayer.ontimeupdate = () => {
            this.timeUpdated()
          }
          this.state.audioPlayer.onprogress = () => {
            this.progressUpdated()
          }
        }
      )
    } */

  }, {
    key: "initializePlayer",
    value: function initializePlayer() {
      var _this3 = this;

      this.setState({
        soundcloudAvailable: true
      }, function () {
        var widgetIframe = document.getElementById('sc-widget');
        widgetIframe.src = widgetIframe.dataset.src;
        _this3.$embedPlayer = window.SC.Widget(widgetIframe);
        _this3.$player = _reactDom.default.findDOMNode(_this3.refs.player);

        _this3.$player.addEventListener('play', function (e) {
          return _this3.handlePlay(e);
        });

        _this3.$player.addEventListener('pause', function (e) {
          return _this3.handlePause(e);
        });

        _this3.$embedPlayer.bind(window.SC.Widget.Events.PLAY, function () {
          _this3.$embedPlayer.getDuration(function (duration) {
            return _this3.setDuration(duration);
          });
        });

        _this3.$embedPlayer.bind(window.SC.Widget.Events.PLAY_PROGRESS, function () {
          _this3.$embedPlayer.getPosition(function (position) {
            return _this3.setTime(position);
          });
        });

        _this3.$embedPlayer.bind(window.SC.Widget.Events.FINISH, function () {
          return _this3.handleEnded();
        });
      });
    }
  }, {
    key: "play",
    value: function play() {
      this.$embedPlayer.play();
      this.handlePlay();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.$embedPlayer.pause();
      this.handlePause();
    }
  }, {
    key: "seek",
    value: function seek(time) {
      this.$embedPlayer.seekTo(this.getmilliSeconds(time));
    }
  }, {
    key: "getSeconds",
    value: function getSeconds(ms) {
      return ms / 1000;
    }
  }, {
    key: "getmilliSeconds",
    value: function getmilliSeconds(s) {
      return s * 1000;
    }
  }, {
    key: "setTime",
    value: function setTime(time) {
      this.setState({
        currentTime: this.getSeconds(time)
      });
    }
  }, {
    key: "setDuration",
    value: function setDuration(duration) {
      this.setState({
        duration: this.getSeconds(duration)
      });
    }
  }, {
    key: "handleClickPlay",
    value: function handleClickPlay(e) {
      e.preventDefault();
      this.play();
    }
  }, {
    key: "handleClickBack",
    value: function handleClickBack(e) {
      e.preventDefault();
      this.seek(Math.max(this.state.currentTime - 30, 0));
    }
  }, {
    key: "handleClickForward",
    value: function handleClickForward(e) {
      e.preventDefault();
      this.seek(Math.max(this.state.currentTime + 30, 0));
    }
  }, {
    key: "handleClickPause",
    value: function handleClickPause(e) {
      e.preventDefault();
      this.pause();
    }
  }, {
    key: "handleClickProgress",
    value: function handleClickProgress(e) {
      var elem = _reactDom.default.findDOMNode(this.refs.progress);

      var elemRect = elem.getClientRects();
      var elemWidth = elemRect[0].width;

      if (this.state.duration) {
        var x = e.pageX - e.currentTarget.offsetLeft;
        this.seek(x / elemWidth * this.state.duration);
      } else {
        this.play();
      }
    }
  }, {
    key: "handlePlay",
    value: function handlePlay() {
      this.setState({
        playing: true,
        paused: false,
        played: true
      });
    }
  }, {
    key: "handlePause",
    value: function handlePause() {
      this.setState({
        playing: false,
        paused: true
      });
    }
  }, {
    key: "handleEnded",
    value: function handleEnded() {
      this.setState({
        playing: false,
        paused: false
      });
    }
  }, {
    key: "renderPlayerIcons",
    value: function renderPlayerIcons() {
      var playing = this.state.playing;

      var skipButtons = _react.default.createElement("span", null, _react.default.createElement(PlayerControlIcon, {
        onClick: this.handleClickForward.bind(this)
      }, _react.default.createElement(_Forward.default, null)), _react.default.createElement(PlayerControlIcon, {
        onClick: this.handleClickBack.bind(this)
      }, _react.default.createElement(_Replay.default, null)));

      if (playing) {
        return _react.default.createElement("div", null, _react.default.createElement(PlayerControlIcon, {
          onClick: this.handleClickPause.bind(this)
        }, _react.default.createElement(_Pause.default, null)), skipButtons);
      }

      return _react.default.createElement("div", null, _react.default.createElement(PlayerControlIcon, {
        onClick: this.handleClickPlay.bind(this)
      }, _react.default.createElement(_Play.default, null)), skipButtons);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          soundcloudAvailable = _this$state.soundcloudAvailable,
          currentTime = _this$state.currentTime,
          duration = _this$state.duration;
      var _this$props = this.props,
          audioUrl = _this$props.audioUrl,
          title = _this$props.title;

      if (!audioUrl) {
        return null;
      }

      var time_remains = duration > 0 ? "".concat(currentTime / duration * 100, "%") : 0;
      return _react.default.createElement(PlayerWrapper, {
        ref: "player"
      }, _react.default.createElement(Iframe, {
        id: "sc-widget",
        allow: "autoplay",
        src: "",
        "data-src": audioUrl
      }), soundcloudAvailable && _react.default.createElement("div", null, _react.default.createElement(PlayerControl, null, this.renderPlayerIcons()), _react.default.createElement(PlayerDisplay, null, _react.default.createElement("div", null, _react.default.createElement("h4", null, title)), _react.default.createElement(PlayerProgress, null, _react.default.createElement(PlayerProgressTime, null, (0, _FormatTime.default)(this.state.currentTime)), _react.default.createElement(PlayerProgressBar, {
        ref: "progress",
        onClick: this.handleClickProgress.bind(this)
      }, _react.default.createElement(PlayerTimeRemains, {
        style: {
          width: time_remains
        }
      })), _react.default.createElement(PlayerProgressTime, null, (0, _FormatTime.default)(duration))))));
    }
  }]);

  return Player;
}(_react.Component);

exports.default = Player;

var PlayerWrapper = _styledComponents.default.div(_templateObject());

var Iframe = _styledComponents.default.iframe(_templateObject2());

var PlayerControl = _styledComponents.default.div(_templateObject3());

var PlayerDisplay = _styledComponents.default.div(_templateObject4());

var PlayerControlIcon = _styledComponents.default.div(_templateObject5());

var PlayerProgress = _styledComponents.default.div(_templateObject6());

var PlayerProgressPosition = _styledComponents.default.span(_templateObject7());

var PlayerProgressTime = _styledComponents.default.span(_templateObject8());

var PlayerProgressBar = _styledComponents.default.span(_templateObject9());

var PlayerTimeRemains = _styledComponents.default.span(_templateObject10());