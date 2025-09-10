/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

const teacher: Subjects.Teacher = {
  firstName: "Ada",
  lastName: "Lovelace",
  experienceTeachingC: 5,
  experienceTeachingJava: 2,
  experienceTeachingReact: 0
};

const cpp = new Subjects.Cpp();
cpp.setTeacher(teacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const java = new Subjects.Java();
java.setTeacher(teacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

const react = new Subjects.React();
react.setTeacher(teacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
