import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {
  @Input() valorInicial: number = 10

  constructor() {
    this.log('constructor')
   }

   ngOnChanges(){
     this.log('OnChanges')
   }

  ngOnInit(){
    this.log('OnInit')
  }

  ngDoCheck(){
    this.log('DoCheck')
  }

  ngAfterContentInit(){
    this.log('AfterContentInit')
  }

  ngAfterContentChecked(){
    this.log('AfterContentChecked')
  }

  ngAfterViewChecked(){
    this.log('AfterViewChecked')
  }

  ngOnDestroy(){
    this.log('OnDestroy')
  }

  private log(hook: string){
    console.log(hook)
  }

}
