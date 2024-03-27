import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  public FirstName="Parvathi";
  public LastName='G';
  public Title="Profile";
  public title_color="red"
  public color="cyan";
  public colour="red"
  public text="Your Email-Id";
 public message="default"


 
  
  constructor() {}
  ngOnInit(): void {
      
  }
  keyup(value:string){
    this.text=value;
  }
  onchange(){
   alert("you have submitted succesfully")
  }
}
