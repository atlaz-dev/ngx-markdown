import { Pipe, PipeTransform, ChangeDetectorRef } from '@angular/core';
import { MarkdownToHtmlService } from './markdown-to-html.service';

import * as Prism from 'prismjs';

@Pipe({
  name: 'markdownToHtml',
})
export class MarkdownToHtmlPipe implements PipeTransform {

  constructor(
    private changeDetector: ChangeDetectorRef,
    private mthService: MarkdownToHtmlService,
  ) { }

  transform(value: string): string {
    if (typeof value !== 'string') {
      console.error(`MarkdownToHtmlPipe has been invoked with an invalid value type [${value}]`);
      return '';
    }

    const markdown = this.mthService.compile(value);

    // glitch in the UI: NEED BETTER WAY TO HANDLE THIS!!!
    setTimeout(() => Prism.highlightAll(false));

    return markdown;
  }
}
