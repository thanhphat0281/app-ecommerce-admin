import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/shared/service/author.service';

@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.scss']
})
export class ListAuthorComponent implements OnInit {
  listAuthor: any
  constructor(private authorService: AuthorService) {}
  ngOnInit(): void {
    this.getAuthor()
  }

  public getAuthor() {
      this.authorService.getAuthor().pipe().subscribe (res => {
          this.listAuthor = res as any
      console.log(this.listAuthor)

      })
  }
}
