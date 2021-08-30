import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'imageSan'
})
export class ImageSanPipe implements PipeTransform {

  constructor(private dom: DomSanitizer){
  }
  transform(value: any, ...args: unknown[]): unknown {
    return this.dom.bypassSecurityTrustResourceUrl(value);
  }

}
