import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  videos =  [
    {
      id: 1,
      src: '<iframe width="560" height="315" src="https://www.youtube.com/embed/D0zYJ1RQ-fs" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
      id: 2,
      src: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=1roy4o4tqQM" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
      id: 3,
      src: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=bILE5BEyhdo" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
      id: 4,
      src: '<iframe width="560" height="315" src="https://www.youtube.com/watch?v=uBYORdr_TY8" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
