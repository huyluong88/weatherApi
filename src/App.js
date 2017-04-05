import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const style = {
    underlineStyle: {
        borderColor: 'black',
    },
    floatingLabelStyle: {
        color: 'black',
    },
    color: 'black'
}
class App extends Component {
    constructor() {
        super()
        this.state = {
            city: '',
            data: [],
            hidden1: true,
            hidden2: true,
            hidden3: true,
            hidden4: true,
            hidden5: true
        }
    }
    getForecast() {
        let zip = this.zip.input.value
        console.log('your zip is ', zip)
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&APPID=57fa201abbf55d130915ca5a9faeb709`).then(response => {
            console.log('your data is ', response.data)
            console.log(response.data.list.map(temp => {
                return temp.main.temp
            }))
            this.setState({
                city: response.data.city.name,
                data: response.data.list
            })
            console.log("data is", this.state.data)
        })
        this.zip.input.value = ''
    }
    openDay1() {
        this.setState({
            hidden1: !this.state.hidden1
        })
    }
    openDay2() {
        this.setState({
            hidden2: !this.state.hidden2
        })
    }
    openDay3() {
        this.setState({
            hidden3: !this.state.hidden3
        })
    }
    openDay4() {
        this.setState({
            hidden4: !this.state.hidden4
        })
    }
    openDay5() {
        this.setState({
            hidden5: !this.state.hidden5
        })
    }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div className="App">
              <div className='form'>
                  <p className="App-intro">
                      <h3>Weather App</h3>
                      <TextField ref={input=> this.zip = input} floatingLabelText="enter a zipcode" type="text" floatingLabelStyle={style.floatingLabelStyle} underlineFocusStyle={style.underlineStyle}/>&nbsp;
                          <RaisedButton label="Get your weather" primary={true} onClick={this.getForecast.bind(this)}/>
                  </p>
                  <h1>{this.state.city}</h1>
              </div>
              <div className='main'>
                  <div className='day'>
                      <FlatButton label="Day 1" primary={true} style={style} onClick={this.openDay1.bind(this)}/>
                      <h5>3 Hour by 3 hour forecast</h5>
                      <div className='hourByhour'>
                          <ul>
                              <span>{this.state.data.map(date=>{return <li><span className='dateNtime'>{date.dt_txt}</span></li>}).splice(0,5)}</span>
                          </ul>
                          <ul>
                              <span>{this.state.data.map(temp=>{return <li>{(Math.floor(((temp.main.temp-273)*1.8)+32))}&deg;</li>}).splice(0,5)}</span>
                          </ul>
                      </div>
                      <div hidden={this.state.hidden1}>
                          <h5>Wind speed:</h5>
                          <ul>
                              {this.state.data.map(day=>{return <li><span className='dateNtime'>{day.dt_txt}</span>:&nbsp;{day.wind.speed} mph</li>}).splice(0,5)}
                          </ul>
                          <h5>Humidity:</h5>
                          <ul>
                              {this.state.data.map(hum=>{return <li><span className='dateNtime'>{hum.dt_txt}</span>:&nbsp;{hum.main.humidity}&deg;</li>}).splice(0,5)}
                          </ul>
                      </div>
                  </div>


                  <div className='day'>
                  <FlatButton label="Day 2" primary={true} style={style} onClick={this.openDay2.bind(this)}/>
                      <h5>3 Hour by 3 hour forecast</h5>
                      <div className='hourByhour'>
                          <ul>
                              <span>{this.state.data.map(date=>{return <li><span className='dateNtime'>{date.dt_txt}</span></li>}).splice(8,5)}</span>
                          </ul>
                          <ul>
                              <span>{this.state.data.map(temp=>{return <li>{(Math.floor(((temp.main.temp-273)*1.8)+32))}&deg;</li>}).splice(8,5)}</span>
                          </ul>
                      </div>
                      <div hidden={this.state.hidden2}>
                          <h5>Wind speed:</h5>
                          <ul>
                              {this.state.data.map(day=>{return <li><span className='dateNtime'>{day.dt_txt}</span>:&nbsp;{day.wind.speed} mph</li>}).splice(8,5)}
                          </ul>
                          <h5>Humidity:</h5>
                          <ul>
                              {this.state.data.map(hum=>{return <li><span className='dateNtime'>{hum.dt_txt}</span>:&nbsp;{hum.main.humidity}&deg;</li>}).splice(8,5)}
                          </ul>
                      </div>
                  </div>


                  <div className='day'>
                  <FlatButton label="Day 3" primary={true} style={style} onClick={this.openDay3.bind(this)}/>
                      <h5>3 Hour by 3 hour forecast</h5>
                      <div className='hourByhour'>
                          <ul>
                              <span>{this.state.data.map(date=>{return <li><span className='dateNtime'>{date.dt_txt}</span></li>}).splice(16,5)}</span>
                          </ul>
                          <ul>
                              <span>{this.state.data.map(temp=>{return <li>{(Math.floor(((temp.main.temp-273)*1.8)+32))}&deg;</li>}).splice(16,5)}</span>
                          </ul>
                      </div>
                      <div hidden={this.state.hidden3}>
                          <h5>Wind speed:</h5>
                          <ul>
                              {this.state.data.map(day=>{return <li><span className='dateNtime'>{day.dt_txt}</span>:&nbsp;{day.wind.speed} mph</li>}).splice(16,5)}
                          </ul>
                          <h5>Humidity:</h5>
                          <ul>
                              {this.state.data.map(hum=>{return <li><span className='dateNtime'>{hum.dt_txt}</span>:&nbsp;{hum.main.humidity}&deg;</li>}).splice(16,5)}
                          </ul>
                      </div>
                  </div>


                  <div className='day'>
                  <FlatButton label="Day 4" primary={true} style={style} onClick={this.openDay4.bind(this)}/>
                      <h5>3 Hour by 3 hour forecast</h5>
                      <div className='hourByhour'>
                          <ul>
                              <span>{this.state.data.map(date=>{return <li><span className='dateNtime'>{date.dt_txt}</span></li>}).splice(24,5)}</span>
                          </ul>
                          <ul>
                              <span>{this.state.data.map(temp=>{return <li>{(Math.floor(((temp.main.temp-273)*1.8)+32))}&deg;</li>}).splice(24,5)}</span>
                          </ul>
                      </div>
                      <div hidden={this.state.hidden4}>
                          <h5>Wind speed:</h5>
                          <ul>
                              {this.state.data.map(day=>{return <li><span className='dateNtime'>{day.dt_txt}</span>:&nbsp;{day.wind.speed} mph</li>}).splice(24,5)}
                          </ul>
                          <h5>Humidity:</h5>
                          <ul>
                              {this.state.data.map(hum=>{return <li><span className='dateNtime'>{hum.dt_txt}</span>:&nbsp;{hum.main.humidity}&deg;</li>}).splice(24,5)}
                          </ul>
                      </div>

                  </div>


                  <div className='day'>
                  <FlatButton label="Day 5" primary={true} style={style} onClick={this.openDay5.bind(this)}/>
                      <h5>3 Hour by 3 hour forecast</h5>
                      <div className='hourByhour'>
                          <ul>
                              <span>{this.state.data.map(date=>{return <li><span className='dateNtime'>{date.dt_txt}</span></li>}).splice(32,6)}</span>
                          </ul>
                          <ul>
                              <span>{this.state.data.map(temp=>{return <li>{(Math.floor(((temp.main.temp-273)*1.8)+32))}&deg;</li>}).splice(32,6)}</span>
                          </ul>
                      </div>
                      <div hidden={this.state.hidden5}>
                          <h5>Wind speed:</h5>
                          <ul>
                              {this.state.data.map(day=>{return <li><span className='dateNtime'>{day.dt_txt}</span>:&nbsp;{day.wind.speed} mph</li>}).splice(32,6)}
                          </ul>
                          <h5>Humidity:</h5>
                          <ul>
                              {this.state.data.map(hum=>{return <li><span className='dateNtime'>{hum.dt_txt}</span>:&nbsp;{hum.main.humidity}&deg;</li>}).splice(32,6)}
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
