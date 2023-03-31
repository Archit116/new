import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent {

  @Input() type: any

  @Output() newItemEvent = new EventEmitter<boolean>();

  return(): any {
    this.newItemEvent.emit(false);
  }

  idea = ""

  ngOnChanges():any {
    if (this.type == "1") {
      this.idea = "1"
    }

    if (this.type == "2") {
      this.idea = "2"
    }

    if (this.type == "3") {
      this.idea = "3"
    }
  }

}
