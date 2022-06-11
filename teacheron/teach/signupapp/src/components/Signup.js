import React from 'react'
import { Link } from "react-router-dom";


const Signup = () => {
  return (
    <div className="ui middle aligned center aligned grid" style={{marginTop:"150px"}}>
    <div className="column">
      <h2 className="ui teal image header">
        <img src="https://semantic-ui.com/examples/assets/images/logo.png" className="image"/>
        <div className="content">
         Signup For A New Account
        </div>
      </h2>
      <form className="ui large form">
      <div class="field">
      <div class="ui radio checkbox">
        <input type="radio" name="frequency"/>
        <label>2-3 times a week</label>
        <input type="radio" name="frequency"/>
        <label>Once a day</label>
      </div>
    </div>
  
        <div className="ui stacked segment">
          

        <div className="field">
            <div className="ui left icon input">
              <i className="pencil icon"></i>
              <input type="text" name="name" placeholder="Name"/>
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="clipboard icon"></i>
              <input type="text" name="company" placeholder="Company"/>
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="user icon"></i>
              <input type="text" name="email" placeholder="E-mail address"/>
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <i className="lock icon"></i>
              <input type="password" name="password" placeholder="Password"/>
            </div>
          </div>
          <div className="ui fluid large teal submit button">Login</div>
        </div>
  
        <div className="ui error message"></div>
  
      </form>
  
      <div className="ui message">
       Already A Member? <Link to="/login">Login</Link>
      </div>
    </div>
  </div>
  )
}

export default Signup