import { doSomething } from "./utils.js";


// doSomething().then((resolve) => {console.log(resolve)})
async function promiseWithAsyncAwait() {
    try {
        console.log('start')
    
        const result = await doSomething();
        console.log(result)
    
        console.log('end')
    } catch (error){
        console.log(error.message);
    }
}

promiseWithAsyncAwait()
