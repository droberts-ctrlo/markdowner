import {Pipe, PipeTransform} from '@angular/core';
import {marked} from 'marked';

@Pipe({
  name: 'markdowner'
})
export class MarkdownerPipe implements PipeTransform {

  transform(value: string|undefined, ...args: unknown[]): string | undefined {
    if(value && value.length && args[0]==true) {
      return marked(value);
    }
    return value?.replace(/\r\n|\n+/,"<br>")
  }

}
