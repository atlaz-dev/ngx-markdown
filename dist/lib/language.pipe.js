var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
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
        Pipe({
            name: 'language',
        })
    ], LanguagePipe);
    return LanguagePipe;
}());
export { LanguagePipe };
//# sourceMappingURL=language.pipe.js.map