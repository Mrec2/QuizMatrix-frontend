import React, { Component } from "react";

import "./Login.css";


export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usuario: "",
            password: "",
            errorText: "El usuario no es correcto"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        });
    }

    handleSubmit() {

    }

    render() {

        return (

            <div className="login">
                <div className="login-contenedor">
                    <div className="login-contenedor-texto">
                        <h2>LOGIN</h2>
                    </div>

                    <div className="login-contenedor-error">{this.state.errorText}</div>

                    <form className="login-contenedor-form" onSubmit={this.handleSubmit}>
                        <div className="one-column">
                            <input
                                type="text"
                                name="usuario"
                                required autoFocus
                                placeholder="Usuario"
                                value={this.state.usuario}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="one-column">
                            <input
                                type="password"
                                name="password"
                                required
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="btn-contenedor">
                            <button className="btn" type="submit">Login</button>
                        </div>
                    </form>
                </div>    
            </div>
        )
    }
}