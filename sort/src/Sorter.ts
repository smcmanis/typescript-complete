interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter implements Sortable {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let leftIndex = 0; leftIndex < length; leftIndex++) {
      for (
        let rightIndex = 0;
        rightIndex < length - leftIndex - 1;
        rightIndex++
      ) {
        if (this.compare(rightIndex, rightIndex + 1)) {
          this.swap(rightIndex, rightIndex + 1);
        }
      }
    }
  }
}
