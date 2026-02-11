import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-layout',
  template: ` <iframe [src]="safeUrl" width="100%" height="600"></iframe> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {
  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://stackblitz.com/edit/angular-wdpsps84?file=src%2Fapp%2Ftodo%2Ftodo.service.ts',
    );
  }
}
