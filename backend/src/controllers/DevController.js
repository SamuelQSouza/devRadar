const axios = require('axios')
const Dev = require('../models/Dev')

module.exports = {
    async index(req, res) {
	const devs = await Dev.find()
    return res.json(devs)
    },

    async store(req, res) {
    const { github_username, techs, latitude, longitude} = req.body        
	const dev = await Dev.findOne({github_username})
	if(!dev){
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
        
        const {name = login, bio, avatar_url } = apiResponse.data
        console.log('techs:', techs);
        const techsArray = techs.split(',').map(tech => tech.trim())
        console.log('techsArray:', techsArray);
        
        
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }
        
        const dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,                
            })        
        
        return res.json(dev)
        }
    }
}
