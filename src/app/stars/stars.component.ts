import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  private stars: boolean[];

  @Input()
  private rating: number = 0;

  @Input()
  private readonly: boolean = true;

  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter();//父子之间要进行双向绑定，要通过事件，当输出属性事件 = 输入属性 + Change，时，父组件可以通过[()],来直接进行双向绑定

  constructor() { }

  ngOnInit() {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

  clickStar(i: number) {
    if (!this.readonly) {
      this.rating = i + 1;
      this.ratingChange.emit(this.rating);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

}
