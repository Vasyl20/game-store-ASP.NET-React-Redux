import * as React from 'react';
import { connect } from 'react-redux';

export class ApiResponse {
    public code!: number;
    public message!: string;
    public token!: string;
    public errors: any;
    
}

export default ApiResponse;