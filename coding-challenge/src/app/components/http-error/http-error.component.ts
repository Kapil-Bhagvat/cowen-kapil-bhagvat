import { Component, Input, OnInit } from '@angular/core';
import { HttpError } from '../../interfaces/HttpError';

@Component({
  selector: 'app-http-error',
  templateUrl: './http-error.component.html',
  styleUrls: ['./http-error.component.less']
})
export class HttpErrorComponent implements OnInit {

  @Input("error") errorInfo : HttpError = <HttpError>{};

  constructor() { }

  ngOnInit(): void {
  }

}
