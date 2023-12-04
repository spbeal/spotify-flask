import {useState, useEffect} from 'react'
import CLIENT_ID from "./.env"
import { Container } from 'react-bootstrap'

//const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`


 const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=fe1e3de44a6448a1adb90f23b4aa80c2&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
 {/* We have many scopes use '%20' for spaces and find the scopes you need, need to set the client id as well*/}

export const Login = () => {
  const [data, setData] = useState([{}])

  // useEffect(() => {
  //     fetch("/").then(
  //       res => res.json()
  //     ).then(
  //       data => {
  //         setData(data)
  //         console.log(data)
  //       }
  //     )
  //   }, [])

  return (
    <Container 
    className=' d-flex justify-content-center align-items-center'
    style={{minHeight: "20vh"}}>
          <a className='btn btn-success btn-lg' href={AUTH_URL}>Login with Spotify</a>
    </Container>
  )
}

export default Login;


  // {(typeof data.members === 'undefined') ? (
  //   <p> Loading... </p>
  // ) : (
  //   data.members.map((member, i) => (
  //     <p key ={i}>{member}</p>
  //   ))
  // )}