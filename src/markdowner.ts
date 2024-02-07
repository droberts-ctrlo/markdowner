import {marked} from "marked";

export default class Markdowner {
  transform(value: string|undefined|null): string | undefined {
    if(value && value.length) {
      return marked(value.replace(/^\s+/g,"").replace(/\s+$/g,"").replace(/([\r\n]+)/,"<br>$1"));
    }
    return undefined;
  }
}
