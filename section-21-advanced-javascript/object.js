// const job = {
//     title: 'Developer',
//     location: 'Korea',
//     salary: 50000,
// };

// console.log(new Date().toISOString());

// const job2 = {
//     title: 'freelansor',
//     location: 'Japan',
//     salary: 35000,
// };

class Job {
    constructor(jobTitle, place, salary) {
        this.title = jobTitle;
        this.location = place;
        this.salary = salary;
    }

    describe() {
        console.log(
            `I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`
        );
    }
}

const developer = new Job('Developer', 'Korea', 50000);
const cook = new Job('Cook', 'Munich', 35000);

developer.describe();
cook.describe();