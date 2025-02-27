import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://localhost:8080/api/v1/employees"

  getAll(): Observable<Employee []> {
    return this.http.get<Employee[]>(this.baseUrl)
  }

  getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + '/' + id)
  }

  create(employee: Employee): Observable<Object> {
    return this.http.post<Employee>(this.baseUrl, employee)
  }

  updateById(id: number, employee: Employee): Observable<Object> { 
    return this.http.put<Employee>(this.baseUrl + '/' + id, employee)
  }

  deleteById(id: number): Observable<Object> { 
    return this.http.delete<Employee>(this.baseUrl + "/" + id)
  }

}
