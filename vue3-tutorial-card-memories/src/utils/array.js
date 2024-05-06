export const arrayProcess = {
  shuffle: function (list) {
    return list.sort(() => Math.random() - 0.5);
  },
};
