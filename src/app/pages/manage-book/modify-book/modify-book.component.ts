import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modify-book',
  templateUrl: './modify-book.component.html',
  styleUrls: ['./modify-book.component.scss']
})
export class ModifyBookComponent implements OnInit {
  formAddBook!: FormGroup;

  controlNames = {
    nameBook: 'nameBook',
    imgBook:'imgBook',
    categoryBook:'categoryBook',
    detailBook:'detailBook',
    priceBook:'priceBook',
    quantity:'quantity',
    tryRead:'tryRead',
    author:'author',
    sale:'sale'
  }
  msgForm = {
    required: 'Please input value'
  };

  getLinkImgBook = "";
  constructor(private builder: FormBuilder){}
  ngOnInit(): void {
    this.initForm()
  }
  private initForm():void {
      this.formAddBook = this.builder.group({
        [this.controlNames.nameBook]:['',[Validators.required]],
        [this.controlNames.imgBook]:['',[Validators.required]],
        [this.controlNames.categoryBook]:['',[Validators.required]],
        [this.controlNames.detailBook]:['',[Validators.required]],
        [this.controlNames.quantity]:['',[Validators.required]],
        [this.controlNames.tryRead]:['',[Validators.required]],
        [this.controlNames.author]:['',[Validators.required]],
        [this.controlNames.sale]:['',[Validators.required]],
        [this.controlNames.priceBook]:['',[Validators.required]],
      })
  }

  public addBook() {

  }
  public getLinkImg(event: any) {
      this.getLinkImgBook = event.target.value
  }
}
