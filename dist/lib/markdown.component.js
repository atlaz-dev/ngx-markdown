var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Input } from '@angular/core';
import { MarkdownService } from './markdown.service';
// workaround to fix rollup namespace import
// https://github.com/rollup/rollup/issues/670#issuecomment-284621537
import * as _marked from 'marked';
var marked = _marked;
import * as Prism from 'prismjs';
import 'prismjs/prism';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-perl';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-typescript';
var MarkdownComponent = /** @class */ (function () {
    function MarkdownComponent(element, markdownService) {
        this.element = element;
        this.markdownService = markdownService;
        this.isTargetBlankLinks = false;
    }
    MarkdownComponent_1 = MarkdownComponent;
    MarkdownComponent.prototype.ngAfterViewInit = function () {
        if (this.isTargetBlankLinks) {
            var customRenderer = new marked.Renderer();
            customRenderer.link = MarkdownComponent_1.addTargetBlank;
            marked.setOptions({ renderer: customRenderer });
        }
        if (this.data) {
            this.handleData();
            return;
        }
        if (this.src) {
            this.handleSrc();
            return;
        }
        this.handleRaw(this.element.nativeElement.innerHTML);
    };
    // SimpleChanges parameter is required for AoT compilation (do not remove)
    MarkdownComponent.prototype.ngOnChanges = function (changes) {
        if ('data' in changes) {
            this.handleData();
            return;
        }
        if ('src' in changes) {
            this.handleSrc();
            return;
        }
    };
    MarkdownComponent.prototype.handleData = function () {
        this.handleRaw(this.data);
    };
    MarkdownComponent.prototype.handleSrc = function () {
        var _this = this;
        var extension = this.src
            ? this.src.split('.').splice(-1).join()
            : null;
        this.markdownService.getSource(this.src)
            .subscribe(function (data) {
            var raw = extension !== 'md'
                ? '```' + extension + '\n' + data + '\n```'
                : data;
            _this.handleRaw(raw);
        });
    };
    MarkdownComponent.prototype.handleRaw = function (raw) {
        var markdown = this.prepare(raw);
        this.element.nativeElement.innerHTML = marked(markdown);
        Prism.highlightAll(false);
    };
    MarkdownComponent.prototype.prepare = function (raw) {
        if (!raw) {
            return '';
        }
        var indentStart;
        return raw
            .replace(/\&gt;/g, '>')
            .split('\n')
            .map(function (line) {
            // find position of 1st non-whitespace character
            // to determine the markdown indentation start
            if (line.length > 0 && isNaN(indentStart)) {
                indentStart = line.search(/\S|$/);
            }
            // remove whitespaces before indentation start
            return indentStart
                ? line.substring(indentStart)
                : line;
        }).join('\n');
    };
    MarkdownComponent.addTargetBlank = function (href, title, text) {
        var out;
        out = '<a href=\"' + href + '\"';
        out += ' target="_blank"';
        if (title) {
            out += ' title=\"' + title + '\"';
        }
        return out + '>' + text + '</a>';
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MarkdownComponent.prototype, "data", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MarkdownComponent.prototype, "src", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], MarkdownComponent.prototype, "isTargetBlankLinks", void 0);
    MarkdownComponent = MarkdownComponent_1 = __decorate([
        Component({
            // tslint:disable-next-line:component-selector
            selector: 'markdown, [markdown]',
            template: '<ng-content></ng-content>',
            styles: [":host /deep/ table{border-spacing:0;border-collapse:collapse;margin-bottom:16px}:host /deep/ table td,:host /deep/ table th{padding:6px 13px;border:1px solid #ddd}:host /deep/ table tr:nth-child(2n){background-color:rgba(0,0,0,.03)}:host /deep/ blockquote{padding:0 1em;color:rgba(0,0,0,.535);border-left:.25em solid rgba(0,0,0,.11)}"],
        }),
        __metadata("design:paramtypes", [ElementRef,
            MarkdownService])
    ], MarkdownComponent);
    return MarkdownComponent;
    var MarkdownComponent_1;
}());
export { MarkdownComponent };
//# sourceMappingURL=markdown.component.js.map