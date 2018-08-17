import { Component } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  templateUrl: "./league-page.component.html",
  styleUrls: ["./league-page.component.css"],
  selector: "app-league-page"
})
export class LeaguePageComponent { 

  public readonly teams: { name: string }[] = [
    { name: "Warriors" },
    { name: "Lakers" },
    { name: "Houston" }
  ];

  public readonly players: { firstName: string, lastName: string }[] = [
    { firstName: "Steph", lastName: "Curry" },
    { firstName: "LeBron", lastName: "James" },
    { firstName: "Chris", lastName: "Paul" }
  ];
}
