import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Employee} from './employee.model';
@Injectable()
export class EmployeeService {
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  constructor(private firebase :AngularFireDatabase ) { }

  getData(){
    this.employeeList = this.firebase.list('mysteryWeekends');
    return this.employeeList;
  }

  insertEmployee(employee : Employee)
  {
    this.employeeList.push({
      name: employee.name,
      activity: employee.activity,
      location: employee.location,
      cost: employee.cost
    });
  }

  updateEmployee(employee : Employee){
    this.employeeList.update(employee.$key,
      {
        name: employee.name,
        activity: employee.activity,
        location: employee.location,
        cost: employee.cost
      });
  }

  deleteEmployee($key : string){
    this.employeeList.remove($key);
  }

}
