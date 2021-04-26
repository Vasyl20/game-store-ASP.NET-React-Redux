import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { NavLink } from 'reactstrap';
import LoginModel from '../../Model/login.model';
import './login.Component.css';

class LoginComponent extends Component {

    // private notifier: NotifierService,
    private router!: Router;
    // private authService: AuthService,
    // private spinner: NgxSpinnerService

    model = new LoginModel();
    token_data: any;


    // submitLogin() {
    //     this.spinner.show();
    //     if(!this.model.isValid()) {
    //       this.notifier.notify("error","Please, enter all fields!")
    //     }
    //     else if(!this.model.isEmail()) {
    //        this.notifier.notify("error", "Please, enter correct email!")
    //     }
    //     else{
    //       this.authService.login(this.model).subscribe(data => {
    //         console.log(data)
    //         if(data.code == 200){
    //           this.notifier.notify("success", "You success register in system!");
    //           localStorage.setItem("togen", data.token);
              
    //           this.authService.loginStatus.emit(true);
  
    //           this.token_data = jwt_decode(data.token);
  
    //           if(this.token_data.roles == "Admin") {
    //               this.router.navigate(['/admin-panel'])
    //           }
    //           else if(this.token_data.roles == "User") {
    //               this.router.navigate(['/user-profile'])
    //           }
    //           this.spinner.hide();
                 
    //         } else {
    //           this.spinner.hide();
    //           for(var i = 0; i < data.errors.length; i++) {
    //              this.notifier.notify("error", data.errors[i]);
    //           }
    //         }
    //       })
    //     }
      
    //   }
  
    // ngOnInit() {
    // }

   link_register = () => { '/register'};

    render() {

        return (
            <Fragment>
                 <form className="form-login">
                    <h1 className="h1">Login</h1>
                    <input className="inp-email" placeholder="Email" />
                    <input className="inp-password" placeholder="Password" />
                    <button className="btSubmit">Submit</button>
                    <p className="p-Register">Not registered yet? Register</p>
                 </form>
            </Fragment>
        )
    }
} 

export default LoginComponent;