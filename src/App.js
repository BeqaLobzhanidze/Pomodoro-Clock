import Arrow from './Components/Arrow'
import React from 'react'
import Header from './Components/Header'
import Container from './Components/Container'
import Footer from './Components/footer'
import './App.css'

class App extends React.Component {

  constructor(props){
    super(props)
    this.pomodoro = undefined ;
    this.state = {
      break : 5 , 
      session : 25 ,
      startingTimes : undefined ,
      shearingTitle : "Session" ,
      isPlay : false , 
      changeTimer : true , 
      lastMinute : false
    }
  }
  componentWillMount() {
      if(this.state.changeTimer){
        this.setState({
          startingTimes: this.state.session*60
        })
      }else {
        this.setState({
          startingTimes: this.state.break*60
        })
      }
  }
   
  handleClick = () => {
    const {isPlay} = this.state;
    if(isPlay) {
      this.setState({
        isPlay:false
      })
       clearInterval(this.pomodoro);
    } else {
      this.setState({
        isPlay:true
      })
      this.pomodoro = setInterval(()=> {this.setState({
        startingTimes:this.state.startingTimes -1
      })
    }, 1000)
    }
    
  }
  componentDidUpdate(){
    console.log(this.state.break , this.state.startingTimes)
    if(this.state.startingTimes < 1) {
      this.setState({
        changeTimer: !this.state.changeTimer
      })
      if(!this.state.changeTimer) {
        this.setState({
          startingTimes : this.state.session*60 ,
          shearingTitle: "Session"
        })
      }else {
        this.setState({
          startingTimes : this.state.break*60 , 
          shearingTitle: "Break"
        })
      }
      
    }
    
  }

  BreakIncrement = () => {
    if(!this.state.isPlay){
      if(this.state.break < 60) {
        this.setState({
          break:this.state.break +1
          
        })
        if(!this.state.changeTimer){
          this.setState({
            startingTimes: this.state.startingTimes+60
          })

        
        }
      }
    }
  }
  BreakDecrement = () => {
    if(!this.state.isPlay){
      if(this.state.break > 0) {
        this.setState({
          break: this.state.break -1
        })
      }
      if(!this.state.changeTimer){
        this.setState({
          startingTimes: this.state.startingTimes-60
        })
      }
    }
  }
  SessionIncrement = () => {
    if(!this.state.isPlay){
      if(this.state.session < 60) {
        this.setState({
          session:this.state.session +1
        })
      
      if(this.state.changeTimer){
        this.setState({
          startingTimes: this.state.startingTimes+60
        })
      }
      }
    }
  }
  SessionDecrement = () => {
    if(!this.state.isPlay){
      if(this.state.session > 0) {
        this.setState({
          session: this.state.session -1 
        })
        if(this.state.changeTimer){
          this.setState({
            startingTimes: this.state.startingTimes-60
          })
        }
      }
    }
    
  }
  
  countDown = (count) => {
    let minutes = Math.floor(count/60);
    let seconds = count%60;
    seconds = seconds < 10 ? `0${seconds}` : seconds ;
    minutes = minutes < 10 ? `0${minutes}` : minutes ;

    return `${minutes}:${seconds}`
  }
  
  refresh = () => {
    this.setState({
      break: 5 ,
      session: 25 , 
      startingTimes: 25*60
    })
    if(this.state.isPlay){
      this.setState({
        isPlay: !this.state.isPlay
      })
      clearInterval(this.pomodoro);
    }
  }

 render(){
   const styling = {
     backgroundColor:"yellow" , 
     color: "red"
   }
   const beforeStyling = {
     backgroundColor:"#3B3B98",
     color:'white'
   }
  return (
    <section className="main">
      <div className="App">
      <Header />
      <Arrow 
      valueB = {this.state.break} 
      Binc = {this.BreakIncrement} 
      Bdec = {this.BreakDecrement} 
      Sinc = {this.SessionIncrement} 
      Sdec = {this.SessionDecrement} 
      valueS = {this.state.session}  
      />
      <Container 
      valueS = {this.state.startingTimes}
       timer = {this.countDown} 
       countD = {this.handleClick}
       title = {this.state.shearingTitle}
       reset = {this.refresh}
       check = {this.state.lastMinute}
       styles = {styling}
       beforeStyles = {beforeStyling}
       />
      <Footer />
      </div>
    </section>
  );
 }
}

export default App;
