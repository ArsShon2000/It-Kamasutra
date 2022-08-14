import React from "react"

const LoginForm = (props) => {
    return <form>
        <div>
            <input placeholder={"Login"} />
        </div>
        <div>
            <input placeholder={"Password"} />
        </div>
        <div>
            <input type={"checkbox"} /> remember me
        </div>
        <div>
            <button>Log In</button>
        </div>

    </form>
}

const Login = (props) => {
    return <div>
        <h1>login</h1>
        <LoginForm />
    </div>
}


export default Login