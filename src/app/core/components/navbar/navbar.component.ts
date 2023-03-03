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
        opacity: 1
      })),
      state('closed', style({
        opacity: 0,
        pointerEvents: 'none',
        transform: 'translateY(-10px)'
      })),
      transition('open => closed', [
        animate('150ms ease-out', style({
          opacity: 0,
          height: '0px',
          transform: 'translateY(-10px)'
        }))
      ]),
      transition('closed => open', [
        animate('150ms ease-in', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ])
    ])
  ]
})
export class NavbarComponent {
  @ViewChild('dropdownbtn') dropdownbtn: ElementRef;
  @ViewChild('dropdownmenu') dropdownmenu: ElementRef;
  @ViewChild('mobilebtn') mobilebtn: ElementRef;
  @ViewChild('mobilemenu') mobilemenu: ElementRef;

  constructor(private renderer: Renderer2){
    this.renderer.listen('window', 'click',(e:Event)=>{
      if(e.target !== this.dropdownbtn.nativeElement && e.target!== this.dropdownmenu.nativeElement){
        this.isDropdownActive = false;
      }
      if(e.target !== this.mobilebtn.nativeElement && e.target!== this.mobilemenu.nativeElement && !this.mobilebtn.nativeElement.contains(e.target) && !this.mobilemenu.nativeElement.contains(e.target)){
        this.isMblMenuActive = false;
      }
    })
  }

  public isDropdownActive:boolean = false;
  public isMblMenuActive:boolean = false;
  public switchDropdownActive(){
    this.isDropdownActive = !this.isDropdownActive;
  }
  public switchMobileMenu(){
    this.isMblMenuActive = !this.isMblMenuActive;
  }
}
