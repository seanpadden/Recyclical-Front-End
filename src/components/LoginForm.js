import React, { Component} from 'react'

export default class LoginForm extends Component {

  state = {
    user: {
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = () => {
    this.props.history.push('/home')
    this.props.handleSubmit(this.state.user)
  }

  render(){
    return(
      <div style={{textAlign: 'center'}}>
        <h1 className="mainHeader" >RECYCLEATOR</h1><br/><br/>
        <form>
          <p style={{fontFamily: 'courier', color: 'white', textAlign: 'center'}} >Getting dizzy? Log in or sign up.</p>
           <br />
           <br />
           <div className="question">
            <input 
              type="text" 
              required className="form" 
              style={{textAlign: 'center'}} 
              name="username"
              value={this.state.username}
              onChange={this.handleChange}/>
            <label style={{textAlign: 'center'}}>username</label>
          </div><br/><br/>
          <div className="question">
            <input 
              type="password" 
              required className="form" 
              style={{textAlign: 'center'}} 
              name="password"
              value={this.state.password}
              onChange={this.handleChange}/>
            <label style={{textAlign: 'center'}}>password</label>
          </div>
        </form>
      <div>
        <br />
        <input className="btn" type="submit" name="submit" onClick={this.handleSubmit}/>
      </div>
    </div>
    
    )
  }
}