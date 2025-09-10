/// <reference path="./Teacher.ts"/>
/// <reference path="./Subject.ts"/>
/// <reference path="./Cpp.ts"/>

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number
  }
}

namespace Subjects {
	export class React {
		teacher?: Teacher;

			getrequirements(): string {
			return "Here is the list of requirements for Cpp";
		}
		getAvailableTeacher(): string {
			if (!this.teacher || this.teacher.experienceTeachingReact === undefined || this.teacher.experienceTeachingReact <= 0)
				return "No available teacher";
			return `Available Teacher: ${this.teacher.firstName}`;
		}
  }
}
