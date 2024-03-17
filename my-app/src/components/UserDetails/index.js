import { useState } from "react";
import { useHistory } from "react-router-dom";
import './index.css'


const UserDetails = () => {
  const [username,setUsername] = useState('');
  const [isNewUser,setIsNewUser] = useState('No')
  const [error,setError] = useState('')
  const history = useHistory();

  const submitUsernameAndStartGame= async() => {
    if (username){
        const postData = JSON.stringify({ username });
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:postData
        }
        setUsername('')
        const response = await fetch(isNewUser === 'Yes' ? "https://exploding-kitten-backend-production.up.railway.app/register" : "https://exploding-kitten-backend-production.up.railway.app/users", options);
        const data = await response.json()
        if (response.ok){
            history.push('/game', { username });
        }else{
            setError(data.message)
        }
       
    }else{
        setError("Please Enter username or Create the it") // if user not provided the name
    }
  }

    return (
        <div className="App-container">
            <h1 className='game-heading'>😸Exploding Kitten </h1>
            <div className='user-container'>
                <div className='user-form-container'>
                    <h1>User Details</h1>
                <form className='user-form'>
                    <label htmlFor='Username'>Enter Username : </label>
                    <input type="text" placeholder='Enter username here' id="Username" value={username} onChange={(e)=>setUsername(e.target.value)} /><br />
                    <label>Are You the New User : </label>
                    <select className="select" onChange={(e)=>{setIsNewUser(e.target.value)}} value={isNewUser}>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select><br />
                    <button type="button" onClick={submitUsernameAndStartGame}>Start Game</button>
                </form>
                {error!=='' && <p>{error}</p>}
                </div>
          </div>
        </div>
    )
}

export default UserDetails
