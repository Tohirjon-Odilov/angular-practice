import { AfterViewInit, Directive, ElementRef, EventEmitter, inject, Input, Output } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';

@Directive({
  selector: '[debounceInput]',
  // standalone: true
})
export class DebounceInputDirective implements AfterViewInit{
  @Input()
  debounceTime: number = 1000;

  @Output()
  search = new EventEmitter<string>();

  private elementRef = inject(ElementRef)

  public get value(): string{
    return this.elementRef.nativeElement.value;
  }

  ngAfterViewInit(): void {
    fromEvent(this.elementRef.nativeElement, "input")
    .pipe(debounceTime(this.debounceTime))
    .subscribe(() => {
      this.search.emit(this.value)
    })
  }
}
