import { useState } from 'react';

function LoginPage({ userLoggedIn }){
    const [username, setUsername] = useState("");

    function _handleUserLogin(event){
        event.preventDefault();
        userLoggedIn(username)
    }

    function _handleInputChange(event){
        setUsername(event.target.value)
    }    

    return (
        <>
            <h1>LoginPage</h1>
            <div className="loginPage">
            <form>
                <label>Choose user name</label><br/>
                <input 
                    type="text" 
                    placeholder="username" 
                    value={username}
                    onChange={_handleInputChange}></input>&nbsp;
                <input type="submit" onClick={_handleUserLogin}></input>
            </form>
            </div>
        </>
    )
}

export default LoginPage;