import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public readonly teams: { name: string}[] = [
    { name: "Warriors" },
    { name: "Lakers" },
    { name: "Houston" }
  ];

  public readonly players: { firstName: string, lastName:string }[] = [
    { firstName: "Steph", lastName: "Curry" },
    { firstName: "LeBron", lastName: "James" },
    { firstName: "Chris", lastName: "Paul" }
  ];
}
