import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-create-employee',
  standalone: false,
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {

  fb = inject(FormBuilder)

  form !: FormGroup 

  constructor(private employeeService: EmployeeService) {}

  ngOnInit():void {
    
    this.form = this.createForm()

  }

  createForm(): FormGroup {

    return this.fb.group({
      firstName: this.fb.control<string>("", [ Validators.required ]),
      lastName: this.fb.control<string>("", [ Validators.required ]), 
      email: this.fb.control<string>("", [ Validators.required ])
    })

  }

  isCtrlValid(ctrl: string): boolean {

    const control = this.form.get(ctrl)
    return !!control && control.valid && (control.dirty || control.touched)

  }

  isCtrlInvalid(ctrl: string): boolean {

    const control = this.form.get(ctrl)
    return !!control && control.valid && (control.dirty || control.touched)

  }

  get firstNameCtrl() {
    return this.form.get('firstName')
  }

  postForm() { 

    const values = this.form.value
    console.log(">>>>Values", values)
    this.employeeService.create(this.form.value)
      .subscribe((data) => {console.log('Employee saved'), data})

  }

}
