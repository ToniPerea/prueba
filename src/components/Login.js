import './Login.css'

const Login = (props) => {
    return (
        <div className="pepe">
            <h1>Inicie Sesion</h1>
            <form action="/my-handling-form-page" method="post">

                <label for="mail">Correo electrónico:</label>
                <input type="email" id="mail" name="user_mail"/>
  
            </form>
        </div>
        )  
}

export default Login;