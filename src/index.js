class Sorter {
  constructor() {
    this._collection = [];
    this._compareFunction = (a, b) => a - b;
  }

  add(element) {
    this._collection.push(element);
  }

  at(index) {
    return this._collection[index];
  }

  get length() {
    return this._collection.length;
  }

  toArray() {
    return this._collection;
  }

  sort(indices) {
    indices = indices.sort();
    const sorted = indices.map(index => this._collection[index]).sort(this._compareFunction);
    indices.map((index, i) => this._collection[index] = sorted[i]);
  }

  setComparator(compareFunction) {
    this._compareFunction = compareFunction;
  }
}

module.exports = Sorter;