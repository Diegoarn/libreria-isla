import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  books = [
    {
      title: 'El Gran Gatsby',
      author: 'F. Scott Fitzgerald',
      description:
        'La historia del misterioso Jay Gatsby y su amor por Daisy Buchanan.',
      imageUrl: './assets/gatsby.jpg',
    },
    {
      title: 'El Gran Gatsby',
      author: 'F. Scott Fitzgerald',
      description:
        'La historia del misterioso Jay Gatsby y su amor por Daisy Buchanan.',
      imageUrl: './assets/gatsby.jpg',
    },
    {
      title: 'El Gran Gatsby',
      author: 'F. Scott Fitzgerald',
      description:
        'La historia del misterioso Jay Gatsby y su amor por Daisy Buchanan.',
      imageUrl: './assets/gatsby.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
