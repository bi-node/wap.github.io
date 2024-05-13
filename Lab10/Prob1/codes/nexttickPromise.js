setTimeout(()=>console.log("this is timer")
,0);

Promise.resolve().then(() => {
    console.log("Promise Microtask");
});

console.log("Start");
process.nextTick(() => {
    console.log("Next Tick");
});

console.log("End");
