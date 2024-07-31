// Let's create a function that can load any script without using Promises

//Let's promisify this loadScript function
function promisify(fn){
    return function(...args){
        return new Promise((resolve, reject) => {
            return fn(args, (error, result) => {
                if(error) return reject(error);
                else return resolve(result)
            })
        })
    }
}


function loadScript(src, callback){
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = (err) => callback(err);
    document.head.appendChild(script);
}

const loadScriptNew = promisify(loadScript);
(async() => {
    try {
        await loadScriptNew('test.js');
        console.log('Done')
    } catch (error) {
        console.error("Error aa gya")
    }
})();


// loadScript("test.js", (error, script) => {
//     if(error){
//         console.log(error);
//     }
//     else {
//         console.log("Script loaded successfully");
//     }
// })