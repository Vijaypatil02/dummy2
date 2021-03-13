import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-fifthteen';
  openside=true;
  contentMargin = 240;
  // @ts-ignore
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    // this.initRegForm();
  }
  toggleopen(){
    this.openside = !this.openside;
    if(!this.openside){
      this.contentMargin = 70;
    }else{
      this.contentMargin = 240;
    }
  }

  // tslint:disable-next-line:typedef
  // initRegForm() {
  //   this.registrationForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', Validators.required],
  //     confirmpassword: ['', Validators.required]
  //   });
  // }

}
