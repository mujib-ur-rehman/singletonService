import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SingletonserviceService } from '../singletonservice.service';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {
  constructor(
    private router: Router,
    private service: SingletonserviceService
  ) {}
  profileForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  });

  navigationDetails: string[] = ['/dashboard'];

  onclick(): void {
    this.router.navigate(this.navigationDetails);
  }

  createStudent() {
    this.service.createStudents(this.profileForm.value);
  }

  ngOnInit(): void {}
}
