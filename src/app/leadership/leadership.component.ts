import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.css']
})
export class LeadershipComponent {
  active: boolean = false
  consideration: boolean = false
  motivation: boolean = false
  stimulation: boolean = false
  influence: boolean = false

  cons(): any {
    this.active = true
    this.consideration = true
  }

  mot(): any {
    this.active = true
    this.motivation = true
  }

  stim(): any {
    this.active = true
    this.stimulation = true
  }

  inf(): any {
    this.active = true
    this.influence = true
  }

  newfunc(f: boolean) {
    this.active = f
    this.consideration = false
    this.motivation = false
    this.stimulation = false
    this.influence = false
  }
}
