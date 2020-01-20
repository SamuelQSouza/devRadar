exports.parseStringAsArray = (arrayAsString) => {
    return arrayAsString.toLowerCase().split(', ').map(tech => tech.trim());
};