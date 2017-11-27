(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/http'), require('rxjs/Observable'), require('rxjs/add/operator/catch'), require('rxjs/add/operator/map'), require('marked'), require('prismjs'), require('prismjs/prism'), require('prismjs/components/prism-c'), require('prismjs/components/prism-cpp'), require('prismjs/components/prism-csharp'), require('prismjs/components/prism-css'), require('prismjs/components/prism-diff'), require('prismjs/components/prism-java'), require('prismjs/components/prism-javascript'), require('prismjs/components/prism-perl'), require('prismjs/components/prism-php'), require('prismjs/components/prism-python'), require('prismjs/components/prism-sass'), require('prismjs/components/prism-scss'), require('prismjs/components/prism-typescript')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/http', 'rxjs/Observable', 'rxjs/add/operator/catch', 'rxjs/add/operator/map', 'marked', 'prismjs', 'prismjs/prism', 'prismjs/components/prism-c', 'prismjs/components/prism-cpp', 'prismjs/components/prism-csharp', 'prismjs/components/prism-css', 'prismjs/components/prism-diff', 'prismjs/components/prism-java', 'prismjs/components/prism-javascript', 'prismjs/components/prism-perl', 'prismjs/components/prism-php', 'prismjs/components/prism-python', 'prismjs/components/prism-sass', 'prismjs/components/prism-scss', 'prismjs/components/prism-typescript'], factory) :
	(factory((global.ngx = global.ngx || {}, global.ngx.markdown = {}),global.ng.core,global.ng.http,global.Rx,null,null,global.marked,global.prismjs));
}(this, (function (exports,core,http,Observable,_catch,map,_marked,Prism) { 'use strict';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LanguagePipe = /** @class */ (function () {
    function LanguagePipe() {
    }
    LanguagePipe.prototype.transform = function (value, language) {
        if (typeof language !== 'string') {
            console.error("LanguagePipe has been invoked with an invalid parameter [" + language + "]");
            return value;
        }
        return '```' + language + '\n' + value + '\n```';
    };
    LanguagePipe = __decorate([
        core.Pipe({
            name: 'language',
        })
    ], LanguagePipe);
    return LanguagePipe;
}());

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MarkdownService = /** @class */ (function () {
    function MarkdownService(http$$1) {
        this.http = http$$1;
    }
    MarkdownService.prototype.getSource = function (src) {
        return this.http.get(src)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MarkdownService.prototype.extractData = function (response) {
        return response.text() || '';
    };
    MarkdownService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.Observable.throw(errMsg);
    };
    MarkdownService = __decorate$2([
        core.Injectable(),
        __metadata$1("design:paramtypes", [http.Http])
    ], MarkdownService);
    return MarkdownService;
}());

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// workaround to fix rollup namespace import
// https://github.com/rollup/rollup/issues/670#issuecomment-284621537
var marked = _marked;
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
    __decorate$1([
        core.Input(),
        __metadata("design:type", String)
    ], MarkdownComponent.prototype, "data", void 0);
    __decorate$1([
        core.Input(),
        __metadata("design:type", String)
    ], MarkdownComponent.prototype, "src", void 0);
    __decorate$1([
        core.Input(),
        __metadata("design:type", Object)
    ], MarkdownComponent.prototype, "isTargetBlankLinks", void 0);
    MarkdownComponent = MarkdownComponent_1 = __decorate$1([
        core.Component({
            // tslint:disable-next-line:component-selector
            selector: 'markdown, [markdown]',
            template: '<ng-content></ng-content>',
            styles: [":host /deep/ table{border-spacing:0;border-collapse:collapse;margin-bottom:16px}:host /deep/ table td,:host /deep/ table th{padding:6px 13px;border:1px solid #ddd}:host /deep/ table tr:nth-child(2n){background-color:rgba(0,0,0,.03)}:host /deep/ blockquote{padding:0 1em;color:rgba(0,0,0,.535);border-left:.25em solid rgba(0,0,0,.11)}"],
        }),
        __metadata("design:paramtypes", [core.ElementRef,
            MarkdownService])
    ], MarkdownComponent);
    return MarkdownComponent;
    var MarkdownComponent_1;
}());

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    MarkdownModule = MarkdownModule_1 = __decorate$3([
        core.NgModule({
            exports: [
                MarkdownComponent,
                LanguagePipe,
            ],
            imports: [http.HttpModule],
            declarations: [
                MarkdownComponent,
                LanguagePipe,
            ],
        })
    ], MarkdownModule);
    return MarkdownModule;
    var MarkdownModule_1;
}());

exports.LanguagePipe = LanguagePipe;
exports.MarkdownComponent = MarkdownComponent;
exports.MarkdownModule = MarkdownModule;
exports.MarkdownService = MarkdownService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
