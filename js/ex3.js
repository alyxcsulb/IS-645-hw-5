//Declare studentList Array
const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];
// TO DO - Write higher order functions / There are many solutions

const lastnameC = array => array.lastName[0].toLowerCase() === "c";

function average_score(array) {
    return array.reduce((sum, value) => sum + value, 0) / array.length;
}

const max_score = arr => arr.reduce(function(a,b) {
    return Math.max(a,b)
});

const min_score = arr => arr.reduce(function(a,b) {
    return Math.min(a,b)
});

//Declare cLastNameResults.  Use functions and map a new array of objects

const cLastNameResults = studentList.filter(lastnameC).map(arr => {
    return { 
    firstname: arr.firstName,
    lastname: arr.lastName,
    min_score: min_score(arr.scores),
    max_score: max_score(arr.scores),
    average_score: average_score(arr.scores)
    }
})

//Output
console.log(cLastNameResults);
