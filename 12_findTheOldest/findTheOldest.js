const findTheOldest = function(people) {
    let maxPerson = NaN;
    let maxAge = -1;
    for (let person of people) {
        let age;
        // calculate person's age
        if (person.yearOfDeath != undefined) {
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            age = (new Date().getFullYear()) - person.yearOfBirth;
        }
        if (age > maxAge) {
            maxAge = age;
            maxPerson = person;
        }
    }
    return maxPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
