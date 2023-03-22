import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/service/book.service';

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: ['./manage-book.component.scss'],
  providers:[]
})
export class ManageBookComponent implements OnInit {
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
