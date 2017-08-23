import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { LanguagePipe } from './language.pipe';
import { MarkdownToHtmlComponent } from './markdown-to-html.component';
import { MarkdownToHtmlPipe } from './markdown-to-html.pipe';
import { MarkdownToHtmlService } from './markdown-to-html.service';

@NgModule({
  imports: [
    HttpModule,
  ],
  declarations: [
    LanguagePipe,
    MarkdownToHtmlComponent,
    MarkdownToHtmlPipe,
  ],
  exports: [
    LanguagePipe,
    MarkdownToHtmlComponent,
    MarkdownToHtmlPipe,
  ],
})
export class MarkdownToHtmlModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MarkdownToHtmlModule,
      providers: [MarkdownToHtmlService],
    };
  }
  static forChild(): ModuleWithProviders {
    return {
      ngModule: MarkdownToHtmlModule,
    };
  }
}
