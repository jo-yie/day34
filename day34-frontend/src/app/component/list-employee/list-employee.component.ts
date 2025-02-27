import { Component } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-list-employee',
  standalone: false,
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent {

  employees: any 

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees()
  }

  getEmployees() {
    this.employeeService.getAll().subscribe((data: Employee[]) => {
      this.employees = data
    })
  }

  deleteEmployee(arg0:any) {
    this.employeeService.deleteById(arg0).subscribe((data: any) => {
      this.getEmployees()
    })
  }

}
