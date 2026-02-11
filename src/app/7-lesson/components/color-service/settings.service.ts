import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class SettingsService{
  private themeColor = new BehaviorSubject<string>("bg-white");
  themeColor$ = this.themeColor.asObservable();

  changeStatus(newVal: string) {
    this.themeColor.next(`bg-${newVal}-400`)
  }
}
