import { Component } from '@angular/core';
import { Mineral } from './models/minerals';
import { MineralsService } from './services/minerals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Minerals.UI';
  minerals: Mineral[] = [];

  constructor(private mineralsService : MineralsService){}

  ngOnInit() : void{
    this.minerals = this.mineralsService.getMinerals();
    console.log(this.minerals);
  }
}
