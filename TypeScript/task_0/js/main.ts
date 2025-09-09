interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Lucas",
  lastName: "Boyadjian",
  age: 32,
  location: "Floride",
}

const student2: Student = {
  firstName: "Guillaume",
  lastName: "Font",
  age: 33,
  location: "Cannes",
}

const studentsList: Student[] = [student1, student2]

function StudentsTable(students: Student[]): void {
  const table = document.createElement('table');

  students.forEach(student => {
    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    
    table.appendChild(row);
  });

  document.body.appendChild(table);
}

StudentsTable(studentsList);
