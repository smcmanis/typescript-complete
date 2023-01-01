"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        const { length } = this;
        for (let leftIndex = 0; leftIndex < length; leftIndex++) {
            for (let rightIndex = 0; rightIndex < length - leftIndex - 1; rightIndex++) {
                if (this.compare(rightIndex, rightIndex + 1)) {
                    this.swap(rightIndex, rightIndex + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
