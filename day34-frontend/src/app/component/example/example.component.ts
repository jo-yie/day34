import { Component } from '@angular/core';

import { from } from 'rxjs'; 
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-example',
  standalone: false,
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {

  numbersArray = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  multiplyBy3() { 
    this.numbersArray
    .pipe(map(data => { return data * 3 }))
    .subscribe(data => { console.log(data) })
    
  }

  foodArray = from(["Pizza", "Burger", "Sandwich", "Pasta", "Biryani"])

  toUpperCase() { 
    this.foodArray
    .pipe(map(data => { return data.toUpperCase() }))
    .subscribe(data => { console.log(data) })
  }

  nameArray = from([
    { fname: "John", lname: "Smith" }, 
    { fname: "Dever", lname: "Joe" }, 
    { fname: "Smith", lname: "Will" }
  ])

  concatToFullName() { 
    this.nameArray
    .pipe(map(data => { return data.fname + data.lname }))
    .subscribe(data => { console.log(data) })
  }

  ngOnInit(): void { 

    this.multiplyBy3()
    this.toUpperCase() 
    this.concatToFullName()

  }

}
