import { IMovie } from './../../shared/models/Movie';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.css']
})
export class CardFilmeComponent implements OnInit {

  @Input() public movie!: IMovie;

  constructor() { }

  ngOnInit(): void {
  }

}
