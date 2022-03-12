import { AfterContentChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.less']
})
export class PaginatorComponent implements AfterContentChecked {

  page: number = 1;

  pageSize: number = 4;

  @Output() _onPageChange: EventEmitter<any[]> = new EventEmitter();

  @Input("list") actualList: any[] = [];

  constructor() { }

  ngAfterContentChecked() {
    this.Paginate();
  }

  Paginate() {
    let tempDisplayList = this.actualList
      .map((item, i) => ({id: i + 1, ...item}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);

    this._onPageChange.emit(tempDisplayList);
  }

}
