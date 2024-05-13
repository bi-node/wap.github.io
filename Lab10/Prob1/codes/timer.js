process.nextTick(() => console.log("this is process.nextTick 1"));
setTimeout(() => {
    console.log("this is setTimeout 2");
    process.nextTick(() =>
        console.log("this is inner nextTick inside setTimeout")
    );
}, 0);

Promise.resolve().then(() => {
    console.log("Promise Microtask");
});

console.log("Start");
process.nextTick(() => {
    console.log("Next Tick");
});