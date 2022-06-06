import { types, flow, onSnapshot } from "mobx-state-tree";

export const countArr = types
  .model("countArr", {
    counter: types.number,
    asycnCount: types.number,
  })
  .actions((self) => ({
    Add: () => {
      onSnapshot(countArr, (path) => {});
      self.counter++;
    },
    asyncAdd: flow(function* z(): any {
      yield new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 2000);
      });

      self.counter++;
      return;
    }),
  }))
  .views((self) => ({
    get computedCounter() {
      return self.counter * self.counter;
    },
  }))
  .create({ counter: 1, asycnCount: 1 });
