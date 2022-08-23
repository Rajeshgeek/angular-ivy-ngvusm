import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  public personarray = [
    {
      empid: 1,
      personName: 'rajesh',
      firstName: 'Banala',
      lastName: 'Rajesh',
      age: 25,
      email: 'rajesh@gmail.com',
    },
    {
      empid: 2,
      personName: 'tony',
      firstName: 'Stark',
      lastName: 'Tony',
      age: 28,
      email: 'tony@yahoo.com',
    },
    {
      empid: 3,
      personName: 'steve',
      firstName: 'Rogers',
      lastName: 'Steve',
      age: 40,
      email: 'CA@protonmail.com',
    },
    {
      empid: 4,
      personName: 'Bruce',
      firstName: 'Banner',
      lastName: 'Bruce',
      age: 45,
      email: 'smash@hotmail.com',
    },
    {
      empid: 5,
      personName: 'natasha',
      firstName: 'Romanoff',
      lastName: 'Natasha',
      age: 22,
      email: 'Bw@gmail.com',
    },
  ];

  public action: any;
  public actionbtn;

  constructor() {}

  ngOnInit() {}

  // public getLetter() {
  //   this.personarray.filter((e) => {
  //     var a = e.email.split('@');
  //     var b = a[1].split('.');
  //     var c = b[0];
  //     var d = c.charAt(0);
  //     this.action = e.email.split('@')[1].split('.')[0].charAt(0)
  //   });
  // }

  getColor(mail: any) {
    let data = mail.split('@')[1];
    switch (data) {
      case 'gmail.com':
        return 'red';
      case 'yahoo.com':
        return 'blue';
      case 'hotmail.com':
        return 'yellow';
      case 'protonmail.com':
        return 'green';
    }
  }
}
