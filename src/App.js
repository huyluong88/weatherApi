import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import NavBar from './NavBar';
import Footer from './footer';
import moment from 'moment';
import Dialog from 'material-ui/Dialog';

const style = {
    underlineStyle: {
        borderColor: 'white',
    },
    floatingLabelStyle: {
        color: 'white',
    },
    color: 'black'
}
class App extends Component {
    constructor() {
        super()
        this.state = {
            city: '',
            data: [],
            openDay1: false,
            openDay2: false,
            openDay3: false,
            openDay4: false,
            openDay5: false
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
    openDay1 = () => {
        this.setState({
            openDay1: true
        });
    }
    closeDay1 = () => {
        this.setState({
            openDay1: false
        })
    }
    openDay2 = () => {
        this.setState({
            openDay2: true
        });
    }
    closeDay2 = () => {
        this.setState({
            openDay2: false
        })
    }
    openDay3 = () => {
        this.setState({
            openDay3: true
        });
    }
    closeDay3 = () => {
        this.setState({
            openDay3: false
        })
    }
    openDay4 = () => {
        this.setState({
            openDay4: true
        });
    }
    closeDay4 = () => {
        this.setState({
            openDay4: false
        })
    }
    openDay5 = () => {
        this.setState({
            openDay5: true
        });
    }
    closeDay5 = () => {
        this.setState({
            openDay5: false
        })
    }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <div className="App">
              <NavBar />
              <div className='form'>
                  <p className="App-intro">
                      <TextField ref={input=> this.zip = input} floatingLabelText="enter a zipcode" type="text" floatingLabelStyle={style.floatingLabelStyle} underlineFocusStyle={style.underlineStyle}/>&nbsp;
                          <RaisedButton label="Get your weather" primary={true} onClick={this.getForecast.bind(this)}/>
                  </p>
              </div>
              <h2>
              {
                (this.state.city === '')
                ? 'Enter a zipcode to see your forecast'
                : <p>Your forecast for <h1>{this.state.city}</h1></p>
              }
              </h2>
              <div>
              {
                (this.state.city === '')
                ? ''
                :              <div>
                                <div className='main'>
                                  <div className='day'>
                                      <FlatButton label="Day 1" primary={true} style={style} onClick={this.openDay1.bind(this)}/>
                                      <h5>3 by 3 hour forecast</h5>
                                      <div className='hourByhour'>
                                          <ul>
                                              <span>{this.state.data.map(date=>{return <li><span className='dateNtime'>{moment(date.dt_txt).format('lll')}</span></li>}).splice(0,7)}</span>
                                          </ul>
                                          <ul>
                                              <span>{this.state.data.map(temp=>{return <li>{(Math.floor(((temp.main.temp-273)*1.8)+32))}&deg;</li>}).splice(0,7)}</span>
                                          </ul>
                                      </div>
                                      <Dialog open={this.state.openDay1}>
                                        <div>
                                            <h5>Wind speed:</h5>
                                            <ul>
                                                {this.state.data.map(day=>{return <li><span className='dateNtime'>{moment(day.dt_txt).format('lll')}</span>:&nbsp;{day.wind.speed} mph</li>}).splice(0,7)}
                                            </ul>
                                            <h5>Humidity:</h5>
                                            <ul>
                                                {this.state.data.map(hum=>{return <li><span className='dateNtime'>{moment(hum.dt_txt).format('lll')}</span>:&nbsp;{hum.main.humidity}&deg;</li>}).splice(0,7)}
                                            </ul>
                                        </div>
                                        <FlatButton label="Close" primary={true} style={style} onClick={this.closeDay1.bind(this)}/>
                                      </Dialog>
                                  </div>


                                  <div className='day'>
                                  <FlatButton label="Day 2" primary={true} style={style} onClick={this.openDay2.bind(this)}/>
                                      <h5>3 by 3 hour forecast</h5>
                                      <div className='hourByhour'>
                                          <ul>
                                              <span>{this.state.data.map(date=>{return <li><span className='dateNtime'>{moment(date.dt_txt).format('lll')}</span></li>}).splice(8,7)}</span>
                                          </ul>
                                          <ul>
                                              <span>{this.state.data.map(temp=>{return <li>{(Math.floor(((temp.main.temp-273)*1.8)+32))}&deg;</li>}).splice(8,7)}</span>
                                          </ul>
                                      </div>
                                      <Dialog open={this.state.openDay2}>
                                        <div>
                                            <h5>Wind speed:</h5>
                                            <ul>
                                                {this.state.data.map(day=>{return <li><span className='dateNtime'>{moment(day.dt_txt).format('lll')}</span>:&nbsp;{day.wind.speed} mph</li>}).splice(8,7)}
                                            </ul>
                                            <h5>Humidity:</h5>
                                            <ul>
                                                {this.state.data.map(hum=>{return <li><span className='dateNtime'>{moment(hum.dt_txt).format('lll')}</span>:&nbsp;{hum.main.humidity}&deg;</li>}).splice(8,7)}
                                            </ul>
                                        </div>
                                        <FlatButton label="Close" primary={true} style={style} onClick={this.closeDay2.bind(this)}/>
                                      </Dialog>
                                  </div>


                                  <div className='day'>
                                  <FlatButton label="Day 3" primary={true} style={style} onClick={this.openDay3.bind(this)}/>
                                      <h5>3 by 3 hour forecast</h5>
                                      <div className='hourByhour'>
                                          <ul>
                                              <span>{this.state.data.map(date=>{return <li><span className='dateNtime'>{moment(date.dt_txt).format('lll')}</span></li>}).splice(16,7)}</span>
                                          </ul>
                                          <ul>
                                              <span>{this.state.data.map(temp=>{return <li>{(Math.floor(((temp.main.temp-273)*1.8)+32))}&deg;</li>}).splice(16,7)}</span>
                                          </ul>
                                      </div>

                                      <Dialog open={this.state.openDay3}>
                                        <div>
                                            <h5>Wind speed:</h5>
                                            <ul>
                                                {this.state.data.map(day=>{return <li><span className='dateNtime'>{moment(day.dt_txt).format('lll')}</span>:&nbsp;{day.wind.speed} mph</li>}).splice(16,7)}
                                            </ul>
                                            <h5>Humidity:</h5>
                                            <ul>
                                                {this.state.data.map(hum=>{return <li><span className='dateNtime'>{moment(hum.dt_txt).format('lll')}</span>:&nbsp;{hum.main.humidity}&deg;</li>}).splice(16,7)}
                                            </ul>
                                        </div>
                                        <FlatButton label="Close" primary={true} style={style} onClick={this.closeDay3.bind(this)}/>
                                      </Dialog>
                                  </div>

                              </div>
                                <div className='mainLower'>
                                <div className='day'>
                                <FlatButton label="Day 4" primary={true} style={style} onClick={this.openDay4.bind(this)}/>
                                    <h5>3 by 3 hour forecast</h5>
                                    <div className='hourByhour'>
                                        <ul>
                                            <span>{this.state.data.map(date=>{return <li><span className='dateNtime'>{moment(date.dt_txt).format('lll')}</span></li>}).splice(24,7)}</span>
                                        </ul>
                                        <ul>
                                            <span>{this.state.data.map(temp=>{return <li>{(Math.floor(((temp.main.temp-273)*1.8)+32))}&deg;</li>}).splice(24,7)}</span>
                                        </ul>
                                    </div>
                                    <Dialog open={this.state.openDay4}>
                                      <div>
                                          <h5>Wind speed:</h5>
                                          <ul>
                                              {this.state.data.map(day=>{return <li><span className='dateNtime'>{moment(day.dt_txt).format('lll')}</span>:&nbsp;{day.wind.speed} mph</li>}).splice(24,7)}
                                          </ul>
                                          <h5>Humidity:</h5>
                                          <ul>
                                              {this.state.data.map(hum=>{return <li><span className='dateNtime'>{moment(hum.dt_txt).format('lll')}</span>:&nbsp;{hum.main.humidity}&deg;</li>}).splice(24,7)}
                                          </ul>
                                      </div>
                                      <FlatButton label="Close" primary={true} style={style} onClick={this.closeDay4.bind(this)}/>
                                    </Dialog>
                                </div>


                                <div className='day'>
                                <FlatButton label="Day 5" primary={true} style={style} onClick={this.openDay5.bind(this)}/>
                                    <h5>3 by 3 hour forecast</h5>
                                    <div className='hourByhour'>
                                        <ul>
                                            <span>{this.state.data.map(date=>{return <li><span className='dateNtime'>{moment(date.dt_txt).format('lll')}</span></li>}).splice(32,7)}</span>
                                        </ul>
                                        <ul>
                                            <span>{this.state.data.map(temp=>{return <li>{(Math.floor(((temp.main.temp-273)*1.8)+32))}&deg;</li>}).splice(32,7)}</span>
                                        </ul>
                                    </div>
                                    <Dialog open={this.state.openDay5}>
                                      <div>
                                          <h5>Wind speed:</h5>
                                          <ul>
                                              {this.state.data.map(day=>{return <li><span className='dateNtime'>{moment(day.dt_txt).format('lll')}</span>:&nbsp;{day.wind.speed} mph</li>}).splice(32,7)}
                                          </ul>
                                          <h5>Humidity:</h5>
                                          <ul>
                                              {this.state.data.map(hum=>{return <li><span className='dateNtime'>{moment(hum.dt_txt).format('lll')}</span>:&nbsp;{hum.main.humidity}&deg;</li>}).splice(32,7)}
                                          </ul>
                                      </div>
                                      <FlatButton label="Close" primary={true} style={style} onClick={this.closeDay5.bind(this)}/>
                                    </Dialog>
                                </div>
                              </div>
                            </div>
              }
              </div>
              <Footer />
          </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
