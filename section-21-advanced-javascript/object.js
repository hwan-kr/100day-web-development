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
}

const developer = new Job('Developer', 'Korea', 50000);
console.log(developer);