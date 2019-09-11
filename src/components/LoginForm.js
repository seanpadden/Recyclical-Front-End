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
    this.props.handleSubmit(this.state.user)
  }

  render(){
    console.log(this.props)
    return(
      <div style={{textAlign: 'center'}}>
        <form style={{textAlign: 'center'}} >
          <p style={{fontFamily: 'courier', color: 'white', textAlign: 'center'}} >Getting dizzy? Log in.</p>
           <div className="question">
            <input 
              type="text" 
              required className="form" 
              style={{textAlign: 'center'}} 
              name="username"
              value={this.state.username}
              onChange={this.handleChange}/>
            <label style={{textAlign: 'center'}}>username</label>
          </div>
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
    //   <div className="form" style={{display: 'block', textAlign: 'center'}}>
    //   <br />
    //     Sign In!
    //     <form>
    //       <input 
    //         type="text" 
    //         placeholder="username" 
    //         name="username" 
    //         value={this.state.username}
    //         onChange={this.handleChange}
    //       />
    //     <br />
    //       <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange}/>
    //     </form>
    //     <br />

    //   <input className="btn-success" type="submit" name="submit" onClick={this.handleSubmit}/>
    // </div>
    )
  }
}