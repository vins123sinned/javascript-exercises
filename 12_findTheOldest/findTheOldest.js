const findTheOldest = function(people) {
    people.sort((person1, person2) => {
        const currentYear = (new Date()).getFullYear();
        let person1Age;
        let person2Age;

        if (person1.hasOwnProperty('yearOfDeath')) {
            person1Age = person1.yearOfDeath - person1.yearOfBirth;
        } else {
            person1Age = currentYear - person1.yearOfBirth;
        }
        if (person2.hasOwnProperty('yearOfDeath')) {
            person2Age = person2.yearOfDeath - person2.yearOfBirth;
        } else {
            person2Age = currentYear - person2.yearOfBirth;
        }

        return person2Age - person1Age;
    });

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
