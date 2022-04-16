import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Input() page: number=1

  @Output() newPage = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  btnLeftClicked(){
    if(this.page > 1){
      this.newPage.emit(this.page.valueOf()-1);
    }
  }

  btnRightClicked(){
    this.newPage.emit(this.page.valueOf()+1);
  }

}
