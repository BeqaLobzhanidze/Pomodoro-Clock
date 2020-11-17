import React , {Component} from 'react' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp , faArrowDown } from '@fortawesome/free-solid-svg-icons'
import "./Arrow.css"

export default class Arrow extends Component {


  render() {
    return (
      <div className = "arrow">
        <section className = "Break">
          <h1 id="break-label"> Break Length</h1>
          <div id="one">
          <button onClick = {this.props.Binc} id="break-increment"><FontAwesomeIcon icon={faArrowUp}/></button>
    <span id="break-length">{this.props.valueB}</span>
          <button  onClick = {this.props.Bdec} id="break-decrement"><FontAwesomeIcon icon={faArrowDown}/></button>
          </div>
        </section>
        <section className = "Session">
          <h1 id="Session-label"> Session Length</h1>
          <div id="two">
          <button onClick = {this.props.Sinc} id="Session-increment"><FontAwesomeIcon icon={faArrowUp}/></button>
    <span id="session-length">{this.props.valueS}</span>
          <button onClick = {this.props.Sdec} id="Session-decrement"><FontAwesomeIcon icon={faArrowDown}/></button>
          </div>
        </section>
      </div>
    )
  }
}