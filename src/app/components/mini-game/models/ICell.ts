export interface ICell {
  signature: symbol;
  isAvailable: boolean;
  inUse: boolean;
  color: string;

  setDefault(): void;
  setActive(): void;
  setCaught(): void;
  setMissed(): void;
}
