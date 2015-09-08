var toCamelCase = function(string) {
    return string.replace(/^([A-Z])|\s(\w)/g, function(match, p1, p2, offset) {
        if (p2) return p2.toUpperCase();
        return p1.toLowerCase();        
    });
};

module.exports = {
    toCamelCase: toCamelCase
};