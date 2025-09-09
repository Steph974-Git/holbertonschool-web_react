interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "Alice",
  lastName: "Martin",
  location: "Paris",
  fullTimeEmployee: true,
  numberOfReports: 12
};

console.log(director1);