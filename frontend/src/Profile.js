import React, { Component } from 'react';
import './Profile.css'

class Profile extends Component {
    render() {
        return (
            <div class="login-form">
                <form>
                    <h2 class="text-center">Log In</h2>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Username" required="required" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password" required="required" />
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary btn-block">Submit</button>
                    </div>
                    <div class="clearfix">
                        <label class="pull-left checkbox-inline"><input type="checkbox" /> Remember Me</label>
                        <br></br>
                        <a href="#" class="pull-right">Forgot Password?</a>
                    </div>
                </form>
                <p class="text-center"><a href="#">Create an Account!</a></p>
            </div>
        );
    }
}

export default Profile;