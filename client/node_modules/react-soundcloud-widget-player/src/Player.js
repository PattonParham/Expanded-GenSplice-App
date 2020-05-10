import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FormatTime from './FormatTime'
import Play from './icons/Play'
import Pause from './icons/Pause'
import Replay from './icons/Replay'
import Forward from './icons/Forward'

/**
 * SoundCloud Player
 * A simple SoundCloud player.
 **/
export default class Player extends Component {
  static get propTypes() {
    return {
      audioUrl: PropTypes.string.isRequired
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      soundcloudAvailable: false,
      played: false,
      playing: false,
      paused: false,
      currentTime: 0,
      duration: 0
    }
  }

  interval = null
  $embedPlayer = null

  componentDidMount() {
    this.interval = setInterval(() => {
      if (window.SC && window.SC.Widget) {
        clearInterval(this.interval)
        this.initializePlayer()
      }
    }, 1000)
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

  initializePlayer() {
    this.setState({ soundcloudAvailable: true }, () => {
      const widgetIframe = document.getElementById('sc-widget')
      widgetIframe.src = widgetIframe.dataset.src
      this.$embedPlayer = window.SC.Widget(widgetIframe)

      this.$player = ReactDOM.findDOMNode(this.refs.player)
      this.$player.addEventListener('play', e => this.handlePlay(e))
      this.$player.addEventListener('pause', e => this.handlePause(e))

      this.$embedPlayer.bind(window.SC.Widget.Events.PLAY, () => {
        this.$embedPlayer.getDuration(duration => this.setDuration(duration))
      })

      this.$embedPlayer.bind(window.SC.Widget.Events.PLAY_PROGRESS, () => {
        this.$embedPlayer.getPosition(position => this.setTime(position))
      })

      this.$embedPlayer.bind(window.SC.Widget.Events.FINISH, () =>
        this.handleEnded()
      )
    })
  }

  play() {
    this.$embedPlayer.play()
    this.handlePlay()
  }

  pause() {
    this.$embedPlayer.pause()
    this.handlePause()
  }

  seek(time) {
    this.$embedPlayer.seekTo(this.getmilliSeconds(time))
  }

  getSeconds(ms) {
    return ms / 1000
  }

  getmilliSeconds(s) {
    return s * 1000
  }

  setTime(time) {
    this.setState({ currentTime: this.getSeconds(time) })
  }

  setDuration(duration) {
    this.setState({ duration: this.getSeconds(duration) })
  }

  handleClickPlay(e) {
    e.preventDefault()
    this.play()
  }

  handleClickBack(e) {
    e.preventDefault()
    this.seek(Math.max(this.state.currentTime - 30, 0))
  }

  handleClickForward(e) {
    e.preventDefault()
    this.seek(Math.max(this.state.currentTime + 30, 0))
  }

  handleClickPause(e) {
    e.preventDefault()
    this.pause()
  }

  handleClickProgress(e) {
    let elem = ReactDOM.findDOMNode(this.refs.progress)
    let elemRect = elem.getClientRects()
    let elemWidth = elemRect[0].width

    if (this.state.duration) {
      const x = e.pageX - e.currentTarget.offsetLeft
      this.seek((x / elemWidth) * this.state.duration)
    } else {
      this.play()
    }
  }

  handlePlay() {
    this.setState({ playing: true, paused: false, played: true })
  }

  handlePause() {
    this.setState({ playing: false, paused: true })
  }

  handleEnded() {
    this.setState({ playing: false, paused: false })
  }

  renderPlayerIcons() {
    const { playing } = this.state

    let skipButtons = (
      <span>
        <PlayerControlIcon onClick={this.handleClickForward.bind(this)}>
          <Forward />
        </PlayerControlIcon>
        <PlayerControlIcon onClick={this.handleClickBack.bind(this)}>
          <Replay />
        </PlayerControlIcon>
      </span>
    )

    if (playing) {
      return (
        <div>
          <PlayerControlIcon onClick={this.handleClickPause.bind(this)}>
            <Pause />
          </PlayerControlIcon>
          {skipButtons}
        </div>
      )
    }

    return (
      <div>
        <PlayerControlIcon onClick={this.handleClickPlay.bind(this)}>
          <Play />
        </PlayerControlIcon>
        {skipButtons}
      </div>
    )
  }

  render() {
    const { soundcloudAvailable, currentTime, duration } = this.state
    const { audioUrl, title } = this.props

    if (!audioUrl) {
      return null
    }

    const time_remains = duration > 0 ? `${(currentTime / duration) * 100}%` : 0

    return (
      <PlayerWrapper ref="player">
        <Iframe id="sc-widget" allow="autoplay" src="" data-src={audioUrl} />

        {soundcloudAvailable && (
          <div>
            <PlayerControl>{this.renderPlayerIcons()}</PlayerControl>

            <PlayerDisplay>
              <div>
                <h4>{title}</h4>
              </div>
              <PlayerProgress>
                <PlayerProgressTime>
                  {FormatTime(this.state.currentTime)}
                </PlayerProgressTime>
                <PlayerProgressBar
                  ref="progress"
                  onClick={this.handleClickProgress.bind(this)}
                >
                  <PlayerTimeRemains style={{ width: time_remains }} />
                </PlayerProgressBar>
                <PlayerProgressTime>{FormatTime(duration)}</PlayerProgressTime>
              </PlayerProgress>
            </PlayerDisplay>
          </div>
        )}
      </PlayerWrapper>
    )
  }
}

const PlayerWrapper = styled.div`
  border: 1px solid #444;
  transition: color 125ms ease-in-out;
  background: white;
  position: relative;
  padding: 1.8rem;
  z-index: 5;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  /* active */
  border-color: #a2a2a2;
  background: white;
  z-index: 10;
`

const Iframe = styled.iframe`
  display: none;
  max-width: 10rem;
  opacity: 0;
  position: absolute;
`

const PlayerControl = styled.div`
  margin-right: 1.2rem;
  min-width: 6rem;
  transition: fill 125ms ease-in-out;
`

const PlayerDisplay = styled.div`
  flex: 1 1 100%;
  margin-bottom: 0;
`

const PlayerControlIcon = styled.div`
  cursor: pointer;
  display: inline-block;
  margin-right: 0.4rem;
`

const PlayerProgress = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin: 0;
`

const PlayerProgressPosition = styled.span`
  text-align: right;
  margin-right: 1rem;
  margin-left: 0;
  font-feature-settings: tnum;
`

const PlayerProgressTime = styled.span`
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  line-height: 1rem;
  color: #444;
  flex: 0 1 auto;
  vertical-align: middle;
`

const PlayerProgressBar = styled.span`
  flex: 1 1 auto;
  width: 100%;
  display: block;
  padding: 0.1rem 0;
  margin: 0 0.5rem;
  cursor: pointer;
  display: block;
  position: relative;
  width: 100%;
  background: #eee;
  border-radius: 2px;
  overflow: hidden;
  transform: translateZ(0);
`

const PlayerTimeRemains = styled.span`
  transition: transform 0.2s;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: #f50;
  display: block;
`
