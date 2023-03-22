import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/shared/service/author.service';

@Component({
  selector: 'app-manage-author',
  templateUrl: './manage-author.component.html',
  styleUrls: ['./manage-author.component.scss']
})
export class ManageAuthorComponent implements OnInit {
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
