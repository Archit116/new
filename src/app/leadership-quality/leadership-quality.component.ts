import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-leadership-quality',
  templateUrl: './leadership-quality.component.html',
  styleUrls: ['./leadership-quality.component.css']
})
export class LeadershipQualityComponent implements OnChanges{

  @Input() type: any

  @Output() newItemEvent = new EventEmitter<boolean>();

  return(): any {
    this.newItemEvent.emit(false);
  }

  leadership = ""

  ngOnChanges():any {
    if (this.type == "transformational") {
      this.leadership = "transformational"
    }

    if (this.type == "servant") {
      this.leadership = "servant"
    }

    if (this.type == "situational") {
      this.leadership = "situational"
    }
  }



}
