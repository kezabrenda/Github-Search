import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {

  /*searchInfo = new Search('');
  @Output() getName = new EventEmitter<Search>();

  searchFor(data){
      this.getName.emit(data.value.find);
      console.log(data.value.find)
      data.reset();
  }*/

  constructor() { }

  ngOnInit(): void {
  }

}
