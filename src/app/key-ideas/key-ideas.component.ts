import { Component } from '@angular/core';

@Component({
  selector: 'app-key-ideas',
  templateUrl: './key-ideas.component.html',
  styleUrls: ['./key-ideas.component.css']
})
export class KeyIdeasComponent {

  active: boolean = false
  hope: boolean = false
  attitude: boolean = false
  fears: boolean = false

  ho(): any {
    this.active = true
    this.hope = true
  }

  at(): any {
    this.active = true
    this.attitude = true
  }

  fe(): any {
    this.active = true
    this.fears = true
  }


  close(f: any): any {
    this.active = f
    this.hope = false
    this.attitude= false
  }

}
