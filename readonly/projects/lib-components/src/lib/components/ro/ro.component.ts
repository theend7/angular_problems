import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'libc-ro',
  templateUrl: './ro.component.html',
  styleUrls: ['./ro.component.scss']
})
export class RoComponent implements OnInit {

  @Input() public value: string | undefined;
  @Output() public valueChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
