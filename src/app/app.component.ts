import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-form-practice';
  accountType = ['Personal', 'Business'];
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'accountType': new FormControl('Personal', Validators.required),
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'streetAddress': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'country': new FormControl(null, Validators.required),
      'zipCode': new FormControl(null, [Validators.pattern("[0-9]*"), Validators.maxLength(6)]),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
