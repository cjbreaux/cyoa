import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.scss'],
  providers: [PlayerService]
})
export class PlayerViewComponent implements OnInit {
  playerToDisplay;


  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayer().subscribe(latestData => {
      this.playerToDisplay = latestData[latestData.length - 1]
        console.log(this.playerToDisplay)
      })
  }

}
