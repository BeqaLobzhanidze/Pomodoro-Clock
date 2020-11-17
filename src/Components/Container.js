import React , {Component} from 'react'
import './container.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStop , faReply } from '@fortawesome/free-solid-svg-icons'

export default class Container extends Component {
   render() {
     return(
       <section id="block">
         <div className = "container" id="timer-label" style = {(this.props.valueS < 60)? this.props.styles : this.props.beforeStyles}>
          <h1 id="title">{this.props.title}</h1>
     <h2 id="time-left"> {this.props.timer(this.props.valueS)}
     </h2>
         </div>
         <button onClick = {this.props.countD} id="start_stop"><FontAwesomeIcon icon={faStop}/></button>
         <button onClick = {this.props.reset} id="reset"><FontAwesomeIcon icon={faReply}/></button>
         
       </section>
     )
   }
}