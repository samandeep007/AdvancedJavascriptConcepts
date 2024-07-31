// Let's create a function that can load any script without using Promises

function loadScript(src, callback){
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = (err) => callback(err);
    document.head.appendChild(script);
}

loadScript("test.js", (error, script) => {
    if(error){
        console.log(error);
    }
    else {
        console.log("Script loaded successfully");
    }
})