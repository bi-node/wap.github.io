const concat = (...args) => {
    return args.reduce((result, arr) => result.concat(arr), []);
};

console.log(concat('hi', [1,2,3], ['Hello','world'])); 