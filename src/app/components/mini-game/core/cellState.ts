export const CellState = {
  default: {
    isAvailable: true,
    inUse: false,
    color: 'lightblue',
  },
  inUse: {
    isAvailable: false,
    inUse: true,
    color: 'yellow',
  },
  caught: {
    isAvailable: false,
    inUse: false,
    color: 'lightgreen',
  },
  missed: {
    isAvailable: false,
    inUse: false,
    color: 'lightcoral',
  },
};
