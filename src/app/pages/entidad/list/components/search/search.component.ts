import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged , debounceTime } from 'rxjs';
import { map }  from  'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent  implements OnInit {

  @Output() eventEmitter = new EventEmitter<string>();

  valueSearch = new FormControl('');

  constructor(
  ){

  }

  ngOnInit(): void {
    this.valueSearch.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        map( (data) => {
          let dataNew ;
          dataNew = data?.trim() ?? '' ;
          dataNew = data?.toLowerCase() ?? '';
          return dataNew;
        }  )
      )
      .subscribe({
        next: (value) => {
          this.sendValue(value);
        }, error: ()  => { }
      });
  }

  sendValue(value: string){
    this.eventEmitter.emit(value);
  }

}
