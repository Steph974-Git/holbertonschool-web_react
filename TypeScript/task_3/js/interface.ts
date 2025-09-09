type RowID = number;

interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

const row1: RowElement = { firstName: "Lucas", lastName: "bobo", age: 32 };