// Promisification

function promisify(fn) {
    return function(...args){
        return new Promise((resolve, reject) => {
            fn(args, (error, result) => {
                if(error) return reject(error);
                return resolve(result)
            })
        });
    }
}

// I want to create a function that can load any script
function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = (error) => callback(error);
    document.head.appendChild(script);
    
}

const loadScriptNew = promisify(loadScript);
loadScriptNew('test.js').then(() => console.log("done")).catch(error => console.log("Error ho gya"))

// loadScript("test.js", (err, script) => {
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("Script loaded");
//     }});