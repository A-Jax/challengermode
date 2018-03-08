import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 /**
   * Method to handle drag and drop capability of team elements on screen
   * Create array of slots on screen to hold elements
   */
  targetList: Widget[] = [];
  // Create team name dummy data for test
  listTeams: Array<string> = ['Wolverines', 'Flying Ponies', 'Anhilators', 'Death Pandas', 'Killer SEALS', 'Care Bears', 'Vikings', 'CELTS'];
  slotOne: Array<string> = [];
  slotTwo: Array<string> = [];
  slotThree: Array<string> = [];
  slotFour: Array<string> = [];
  slotFive: Array<string> = [];
  slotSix: Array<string> = [];
  slotSeven: Array<string> = [];
  slotEight: Array<string> = [];
  slotNine: Array<string> = [];
  slotTen: Array<string> = [];
  slotEleven: Array<string> = [];

  // handle order of elements inside of leaderboards.
  sourceList = []

  /**
   * Method ran on page load 
   */
  ngOnInit() {
    this.leaderBoard()
  }
  
  /**
   * Loop through the array of teams and add each element to the leaderboard, which is interactive and can reposition the elements inside it.
   */
  leaderBoard() {
    this.listTeams.forEach(element => {
      this.sourceList.push(new Widget(element))
    });
  }

  /**
   * Push new teamname to array of list teams
   * @param teamName pass in team name variable from HTML form
   */
  addTeam(teamName) {
   this.listTeams.push(teamName);

  }

 /**
  * 
  * @param event handle on screen drag event 
    push dragged element into position array on screen.
  */
  addTo($event: any) {
    this.targetList.push($event.dragData);
  }
}

class Widget {
  constructor(public name: string) { }
}








