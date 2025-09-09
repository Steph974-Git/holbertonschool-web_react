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
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  const headerRow = document.createElement('tr');
  ["First Name", "Location"].forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  students.forEach(student => {
    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);
    
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    row.appendChild(locationCell);
    
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  document.body.appendChild(table);
}

StudentsTable(studentsList);
