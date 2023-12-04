
import React, {useState, useEffect } from 'react'
// curl -X "GET" "https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer XXX"

const TopSongs = () => {
  
  const [data, setData] = useState([{}])

  useEffect(() => {
      fetch("/members").then(
        res => res.json()
      ).then(
        data => {
          setData(data)
          console.log(data)
        }
      )
    }, [])


  return (
    <div>TopSongs

    {(typeof data.members === 'undefined') ? (
            <p> Loading... </p>
          ) : (
            data.members.map((member, i) => (
              <p key ={i}>{member}</p>
            ))
          )}
    </div>
  )
}

export default TopSongs