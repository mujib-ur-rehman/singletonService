import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SingletonserviceService } from '../singletonservice.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
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
