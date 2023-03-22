import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from 'src/app/shared/service/author.service';

@Component({
  selector: 'app-modify-author',
  templateUrl: './modify-author.component.html',
  styleUrls: ['./modify-author.component.scss']
})
export class ModifyAuthorComponent {
  formAddAuthor!: FormGroup;

  controlNames = {
    nameAuthor: 'nameAuthor',
    detailAuthor:'detailAuthor',
    imgAuthor: 'imgAuthor'
  }
  msgForm = {
    required: 'Please input value'
  };
  getImgAuthor= "";
  constructor(
    private builder: FormBuilder,
    private route: ActivatedRoute,
     private authorService: AuthorService,
     private router: Router,
    ) {}
  ngOnInit(): void {
    this.initForm()
  }


  private initForm():void {
    this.formAddAuthor = this.builder.group({
      [this.controlNames.nameAuthor]:['',[Validators.required]],
      [this.controlNames.detailAuthor]:['',[Validators.required]],
      [this.controlNames.imgAuthor]:['',[Validators.required]],
    })
  }

  public addAuthor():void {
      const dataAuthor = {...this.formAddAuthor.value}
      console.log(dataAuthor)
      if(this.formAddAuthor.valid) {
          this.authorService.postAuthor(dataAuthor).subscribe({
            next: (res) => {
              this.router.navigate(['doctors']);
              alert('Product added successfully');
            
            },
            error: () => {
              alert('Error while adding product');
            },
          }
            
          )
      }
  }
  public getLinkImgAuthor(event: any) {
      this.getImgAuthor = event.target.value
  }
}
