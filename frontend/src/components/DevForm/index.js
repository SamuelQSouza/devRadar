import React, { useState, useEffect }from 'react'
import './styles.css';

function DevForm({onSubmit}){
    const [github_username, setGithub_username] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude ]= useState('')
    const [longitude, setLongitude] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const {latitude, longitude} =position.coords
    
            setLatitude(latitude)
            setLongitude(longitude)
            
          },
          (err) => {
            console.log(err)        
          },
          {
            timeout: 3000
          }
        )
      }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,
        })

        setGithub_username('')
        setTechs('')
    }

    return(
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="github_username">Usúario do Github</label>
            <input 
              name="github_username" 
              id="github_username"
              placeholder= "ex.: FulanoDeTal"
              required
              value={github_username}
              onChange={e => setGithub_username(e.target.value)}
              
            />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
              name="techs" 
              id="techs"
              placeholder= "ex.: php, html5, css, javascript" 
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                name="latitude"
                id="latitude"
                placeholder= "ex.: -18.9125012" 
                required 
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                name="longitude" 
                id="longitude"
                placeholder= "ex.: -48.2591407"
                required 
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
    )
}

export default DevForm