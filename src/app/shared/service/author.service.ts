import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/environment';
import { Author } from '../model/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  author!: Author
  authors!: Author[]
  constructor(private http: HttpClient) { }

  public getAuthor() {
    const url = environment.api + 'authors'
    return this.http.get(url)
  }

  public putAuthor(author: Author) {
    const url = environment.api + `/${author.id}`
    return this.http.put(url, author)
  }

  getAuthorById(id: String) {
    const url = environment.api + `/${id}`
    return this.http.get(url);
  }
  postAuthor(author: Author) {
    const url = environment.api+'authors'
    return this.http.post(url, author);
  }
}
