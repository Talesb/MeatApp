import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": '70px',
        "margin-top": '20px'
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {


  searchBarState = 'hidden';

  searchForm: FormGroup
  searchControl: FormControl

  restaurants: Restaurant[];
  constructor(private restaurantsService: RestaurantsService, private fb: FormBuilder) { }

  ngOnInit() {

    this.searchControl = this.fb.control('');
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    // this.searchControl.valueChanges
    //   .subscribe(searchTerm =>
    //     this.restaurantsService.restaurants(searchTerm)
    //   .subscribe(restaurants => this.restaurants = restaurants))

    this.searchControl.valueChanges
      .debounceTime(560)
      .distinctUntilChanged()
      .switchMap(searchTerm =>
        this.restaurantsService
        .restaurants(searchTerm)
        .catch(error=>Observable.from([])))
        .subscribe(restaurants => this.restaurants = restaurants)






    this.restaurantsService.restaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

  toggleSearch() {
    return this.searchBarState = this.searchBarState === 'visible' ? 'hidden' : 'visible';
  }

}
