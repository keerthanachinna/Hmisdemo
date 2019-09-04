import { Component, OnInit, Input } from '@angular/core';
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";
import { Router } from '@angular/router';
@Component({
 selector: 'app-employee-list',
 templateUrl: './employee-list.component.html',
 styleUrls: ['./employee-list.component.css'],
 providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
private employees: Employee[];
constructor(private router: Router,
 private employeeService: EmployeeService) { }
ngOnInit() {
 this.getAllEmployees();
 }
getAllEmployees() {
 this.employeeService.findAll().then(
 employees => {
 this.employees = employees;
 },
 err => {
 console.log(err);
 }
);
 }
createEmployee() {
 let firstName = (<HTMLInputElement>document.getElementById('firstName')).value;
 let phoneNo = (<HTMLInputElement>document.getElementById('phoneNo')).value;
 let email = (<HTMLInputElement>document.getElementById('email')).value;
 let employee = new Employee(0, firstName, Number(phoneNo), email);
 this.employeeService.createEmployee(employee).then(
 employees => {
 this.employees = employees;
 },
 err => {
 console.log(err);
 }
 );
 }
deleteEmployee(employee: Employee) {
 this.employeeService.deleteEmployeeById(employee.id).then(
 employees => {
 this.employees = employees;
 },
 err => {
 console.log(err);
 }
 );
 }
}