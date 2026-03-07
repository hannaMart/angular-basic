import { Component, OnInit } from '@angular/core';
import { Country } from '../../MyClasses/country';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directories',
  imports: [CommonModule],
  templateUrl: './directories.html',
  styleUrl: './directories.css',
})
export class Directories implements OnInit {
  info = "Countries"

  countries = new Array();

  showCard = false;


  public constructor() {

  }
  ngOnInit(): void {
    this.countries.push(new Country("Italy", "Rome", 302068));
    this.countries.push(new Country("Iran", "Teheran", 1648195));
    this.countries.push(new Country("Kenya", "Nairobi", 50367));
    this.countries.push(new Country("Turkey", "Ankara", 783562));
    this.countries.push(new Country("France", "Paris", 643801));
    this.countries.push(new Country("Ukraine", "Kiev", 603550))
  }

  getColor(index: number) {
    if (index % 3 == 0) return 'red';
    if (index % 3 == 1) return 'green';
    return 'blue';
  }

  sortCountries() {
    this.countries.sort((a, b) => (a.name < b.name ? -1 : 1))
  }

  toggleCard() {
    this.showCard = !this.showCard
  }
}


