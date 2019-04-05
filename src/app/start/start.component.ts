import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  providers: [PlayerService]
})
export class StartComponent implements OnInit {
 playerToDisplay;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayer().subscribe(latestData => {
       this.playerToDisplay = latestData[latestData.length - 1];

       console.log(this.playerToDisplay)
     })

     // this.playerService.updatePlayer(this.playerToDisplay);
  }

}
