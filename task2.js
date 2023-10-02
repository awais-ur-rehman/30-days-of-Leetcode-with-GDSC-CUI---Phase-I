let names = ["Awais", "Haadi", "Waheed", "Bilal", "Ayesha", "Malaika", "Asrah", "Manal"];
console.log(names);

let shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let shuffledNames = shuffleArray(names);
console.log(shuffledNames); 
