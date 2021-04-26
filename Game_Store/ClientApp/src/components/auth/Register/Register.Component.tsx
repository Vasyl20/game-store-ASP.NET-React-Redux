import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import RegisterModel from '../../Model/register.model';
import 'react-notifications-component/dist/theme.css'
import AuthService from '../../Services/Auth.service';




class RegisterComponent extends Component {
   
    private router!: Router;
    private authService!: AuthService;
    
    confirmPassword!: string;
    model = new RegisterModel();


    subitRegister() {
        console.log(this.model)
        if(!this.model.isValid()) {
          alert("error\n" + "Please, enter all fields!")
        }
        else if(this.confirmPassword != this.model.Password) {
          alert("error\n" + "Password dont't match!")
        }
        else if(!this.model.isEmail()) {
           alert("error\n" + "Please, enter correct email!")
        }
        else{
          this.authService.register(this.model).subscribe(data => {
            console.log(data)
            if(data.code == 200){
                alert("success\n" + "You success register in system!");
              //this.router.navigate(['/login'])
            } else {
              for(var i = 0; i < data.errors.length; i++) {
                 alert("error \n" + data.errors[i]);
              }
            }
          })
        }
      }
      ngOnInit() {
      }

    render() {

        return (
            <Fragment>
                <form className="form-register">
                    <h1 className="h1">Register</h1>
                    <input type="text" className="input-st" placeholder="Email" />
                    <input type="password" className="input-st" placeholder="Password" />
                    <input type="password" className="input-st" placeholder="Password" />
                    <input type="text" className="input-st" placeholder="Full name" />
                    <input type="text" className="input-st" placeholder="Phone number" />
                    <input type="text" className="input-st" placeholder="Address" />
                    <input type="number" className="input-st inp-numder" placeholder="Age" />
                    <button className="btSubmit">Submit</button>
                    <p  className="p-Register">Alredy register? login</p>
                </form>
  
            </Fragment>
            
        )
    }
} 

export default RegisterComponent;