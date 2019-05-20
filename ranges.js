class Ranges {
  constructor() {
    this.rangeList = [];
  }

  merge() {
    this.rangeList.sort(([startA], [startB]) => startA - startB);

    this.rangeList = this.rangeList.reduce((acc, range) => {
      if (acc[acc.length - 1][1] + 1 < range[0]) {
        acc.push(range);
      } else if (acc[acc.length - 1][1] < range[1]) {
        acc[acc.length - 1][1] = range[1];
      }

      return acc;
    }, [this.rangeList[0]]);
  }

  add(newRange) {
    this.rangeList.push(newRange);
    this.merge();
  }

  remove(deletedRange) {
    this.rangeList = this.rangeList.reduce((acc, [start, end]) => {
      if (deletedRange[0] < start && deletedRange[1] > end) {
        return acc;
      }

      if (start < deletedRange[0] && deletedRange[1] < end) {
        acc.push([start, deletedRange[0] - 1]);
        acc.push([deletedRange[1] + 1, end]);
      } else if (deletedRange[0] <= start) {
        acc.push([deletedRange[1] + 1, end]);
      } else if (deletedRange[0] <= end) {
        acc.push([start, deletedRange[0] - 1]);
      } else {
        acc.push([start, end]);
      }

      return acc;
    }, []);
  }

  print() {
    return this.rangeList
        .map((range) => `[${range.join(', ')}]`)
        .join(' ');
  }
}

module.exports = {Ranges};
