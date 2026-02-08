import { AfterViewInit, Directive, ElementRef, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, combineLatest, debounceTime, fromEvent, map } from 'rxjs';

const a$ = new BehaviorSubject(5);
const b$ = new BehaviorSubject(10);
const c$ = combineLatest([a$, b$]).pipe(
  map(([a, b]) => a+b)
);

// BehaviorSubject
const d$ = new BehaviorSubject(0)

@Directive({
  selector: '[debounceInput]',
  standalone: true
})
export class DebounceInputDirective implements AfterViewInit, OnInit{
  @Input()
  debounceTime: number = 1000;

  @Output()
  search = new EventEmitter<string>();

  private elementRef = inject(ElementRef)


  ngOnInit(): void {
    // c$.subscribe( val => console.log(val))
    a$.next(10)
    a$.next(100);

    d$.next(1)
    d$.subscribe((a) => console.log(a))
    d$.next(2)
  }

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
