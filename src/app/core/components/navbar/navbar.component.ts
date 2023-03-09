import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { AppRoutingModule } from 'app/app-routing.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('dropdown', [
      state('open', style({
        display: 'block'
      })),
      state('closed', style({
        display: 'none'
      })),
      transition('open => closed', [
        animate('145ms ease-out', style({
          opacity: 0,
          transform: 'translateY(-10px)'
        }))
      ])
    ])
  ]
})
export class NavbarComponent {
  @ViewChild('dropdownbtn') dropdownbtn: ElementRef;
  @ViewChild('mobilebtn') mobilebtn: ElementRef;
  @ViewChild('mobilemenu') mobilemenu: ElementRef;

  constructor(private renderer: Renderer2){
    this.renderer.listen('window', 'click',(e:Event)=>{
      if(e.target !== this.dropdownbtn.nativeElement){
        this.isDropdownActive = false;
      }
      if(!this.mobilebtn.nativeElement.contains(e.target) && !this.mobilemenu.nativeElement.contains(e.target)){
        this.isMblMenuActive = false;
      }
    })
  }

  public isDropdownActive:boolean = false;
  public isDropdownHovered:boolean = false;
  public isMblMenuActive:boolean = false;
  public switchDropdownActive(){
    this.isDropdownActive = !this.isDropdownActive;
  }
  public switchMobileMenu(){
    this.isMblMenuActive = !this.isMblMenuActive;
  }
}
