var findMaxDuplicateChar = function (string) {
    var keyValue = {};
    var n = string.length;
    for (var i = 0; i < n; i++) {
        if (keyValue[string[i]])
            keyValue[string[i]]++;
        else
            keyValue[string[i]] = 1;
    }
    var max = -1;
    var result = null;
    Object.keys(keyValue).forEach(function (key) {
        if (keyValue[key] > max) {
            max = keyValue[key];
            result = key;
        }
    });
    console.log("====================================");
    console.log(result);
    console.log("====================================");
    return result;
};
findMaxDuplicateChar("jnpkjmspigjidsifjdiiii");
