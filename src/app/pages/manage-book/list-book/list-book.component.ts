import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/service/book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  listBook: any;
  constructor(private bookService: BookService) {}
  ngOnInit(): void {
    this.getBook()
  }
  public getBook() {
    this.bookService.getBook().pipe().subscribe(res => {
      this.listBook = res as any
      console.log(this.listBook)
    })
  }
}
