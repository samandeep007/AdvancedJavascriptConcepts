// Promisification

// I want to create a function that can load any script
function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = (error) => callback(error);
    document.head.appendChild(script);
    
}



loadScript("test.js", (err, script) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("Script loaded");
    }});