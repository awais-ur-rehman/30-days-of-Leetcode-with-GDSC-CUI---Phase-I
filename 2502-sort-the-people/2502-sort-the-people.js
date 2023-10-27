/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
     const people = names.map((name, index) => ({ name, height: heights[index] }));
    people.sort((a, b) => b.height - a.height);
    const sortedNames = people.map(person => person.name);
    
    return sortedNames;
};

let names = ["Mary","John","Emma"];
let heights = [180,165,170];

console.log(sortPeople(names, heights));