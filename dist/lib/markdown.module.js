var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { LanguagePipe } from './language.pipe';
import { MarkdownComponent } from './markdown.component';
import { MarkdownService } from './markdown.service';
var MarkdownModule = /** @class */ (function () {
    function MarkdownModule() {
    }
    MarkdownModule_1 = MarkdownModule;
    MarkdownModule.forRoot = function () {
        return {
            ngModule: MarkdownModule_1,
            providers: [MarkdownService],
        };
    };
    MarkdownModule.forChild = function () {
        return {
            ngModule: MarkdownModule_1,
        };
    };
    MarkdownModule = MarkdownModule_1 = __decorate([
        NgModule({
            exports: [
                MarkdownComponent,
                LanguagePipe,
            ],
            imports: [HttpModule],
            declarations: [
                MarkdownComponent,
                LanguagePipe,
            ],
        })
    ], MarkdownModule);
    return MarkdownModule;
    var MarkdownModule_1;
}());
export { MarkdownModule };
//# sourceMappingURL=markdown.module.js.map