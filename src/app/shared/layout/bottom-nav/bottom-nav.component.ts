import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  scrollTop()
  {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
});

  }
}
