module.exports = function parseStringAsArray(arrayAsString){
    arrayAsString.split(',').map(tech => tech.trim())
}