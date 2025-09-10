/// <reference path="./Teacher.ts"/>
/// <reference path="./Subject.ts"/>
/// <reference path="./Cpp.ts"/>
/// <reference path="./React.ts"/>


namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }
}

namespace Subjects {
  export class java {
    teacher?: Teacher;

		getrequirements(): string {
			return "Here is the list of requirements for Cpp";
		}
		getAvailableTeacher(): string {
			if (!this.teacher || this.teacher.experienceTeachingJava === undefined || this.teacher.experienceTeachingJava <= 0)
				return "No available teacher";
			return `Available Teacher: ${this.teacher.firstName}`;
		}
  }
}
