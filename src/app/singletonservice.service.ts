import { Injectable, Optional, SkipSelf } from '@angular/core';

@Injectable()
export class SingletonserviceService {
  students: any[] = [];

  constructor(
    @Optional() @SkipSelf() sharedService?: SingletonserviceService
    // student: any[] = []
  ) {
    if (sharedService) {
      throw new Error('Service is already loaded');
    }
    // this.students = student;
    console.info('Service is created');
  }

  createStudents(data: any) {
    this.students.push(data);
    console.warn(this.students);
  }
}
