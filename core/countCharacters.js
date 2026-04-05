

//Pattern: Frequency Counter (Hash Map / Object)

function countCharacters(str){
    let freq = {}

    for(let char of str.toLowerCase()){
        if(char === " ") continue;
        
        // cleaner way
        freq[char] = (freq[char] || 0)+ 1;
        
        // if(freq[char]){
        //     freq[char]++;
        // }else{
        //     freq[char] = 1;
        // }
    }

    return freq;

}

// let str = "google"
// const result = countCharacters(str);
// console.log(result)

export default countCharacters;