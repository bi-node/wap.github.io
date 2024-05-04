 const getNewArray =function resultset(arr){
    let newarray=[];
    let j=0;
    for(let i=0; i<arr.length; i++)
        {
            if(arr[i].length>=5 && arr[i].toLowerCase().includes('a'))
                {
                    newarray.push(arr[i]);
                }
        }
        return newarray;

};

let myArray=["Watermelon", "Banana", "Apricot", "Mango", "Lichi", "pear"];
console.log(getNewArray(myArray));
