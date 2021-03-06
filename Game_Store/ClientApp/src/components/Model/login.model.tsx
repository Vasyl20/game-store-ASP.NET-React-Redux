import * as React from 'react';
import { connect } from 'react-redux';

export class LoginModel {
    public Email!: string;
    public Password!: string;

    isValid(): boolean {
        if(this.Email != "" && this.Password != "") {
            return true;
        } else {
            return false;
        }
    }

    isEmail(){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(this.Email).toLowerCase());
    }
}

export default LoginModel;