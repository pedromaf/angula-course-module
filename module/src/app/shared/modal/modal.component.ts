import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy{
  @Output() close = new EventEmitter();


  constructor(private elementRef: ElementRef) {}
  
  ngOnInit() {
    document.body.appendChild(this.elementRef.nativeElement);
  }
  
  ngOnDestroy() {
    this.elementRef.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }
}
