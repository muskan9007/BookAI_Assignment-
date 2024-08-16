import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  modeForm:FormGroup;

  constructor(private router:Router,private fb:FormBuilder) { 
    document.body.setAttribute('data-theme', 'dark');
    this.modeForm = this.modeFormName;
    this.modeForm.get('modeBoolean')?.patchValue('true')
    this.modeForm.get('modeValue')?.patchValue('dark')
    this.onChangeEvent()
  }
  

  ngOnInit() { }

  public priceBtn(action:any) {
   
    this.router.navigate(['/price'])
  }

  private onChangeEvent() {
    this.modeForm.get('modeBoolean')?.valueChanges.subscribe(value =>{
      console.log(value)
      if(value){
        this.modeForm.get('modeValue')?.patchValue('dark');
        document.body.setAttribute('data-theme', 'dark');
        
      }
      else{
        this.modeForm.get('modeValue')?.patchValue('light');
        document.body.setAttribute('data-theme', 'light');
      }
      console.log(this.modeForm.get('modeValue')?.value)
    })
  }

  private modeFormName = this.fb.group({
    modeBoolean:[true],
    modeValue:[''],
  })

}
