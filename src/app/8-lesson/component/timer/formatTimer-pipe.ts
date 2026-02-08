import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFormatTimer',
})
export class FormatTimerPipe implements PipeTransform {
  transform(value: unknown): string {
    let hours: number | string = Math.floor((value as number) / 3600);
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes: number | string = Math.floor(((value as number) % 3600) / 60);
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let seconds: number | string = (value as number) % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${hours}:${minutes}:${seconds}`;
  }
}
