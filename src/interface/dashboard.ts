export interface IDashboard {
  timestamp: string;
  voltage: IVoltage;
  current: ICurrent;
  frequency: IFrequency;
  activePower: IActivePower;
  energyActive: IEnergyActive;
  energyReactive: IEnergyReactive;
  energyApparent: IEnergyApparent;
  powerFactor: IPowerFactor;
  powerQuality: IPowerQuality;
  energyCost: IEnergyCost;
}

export interface IVoltage {
  vu1N: number;
  vu2N: number;
  vu3N: number;
  vU12: number;
  vU23: number;
  vU31: number;
}

export interface ICurrent {
  aL1: number;
  aL2: number;
  aL3: number;
}

export interface IFrequency {
  freq: number;
}

export interface IActivePower {
  apL1: number;
  apL2: number;
  apL3: number;
  apTotal: number;
}

export interface IEnergyActive {
  eAL1: number;
  eAL2: number;
  eAL3: number;
  eATotal: number;
}

export interface IEnergyReactive {
  eRL1: number;
  eRL2: number;
  eRL3: number;
  eRTotal: number;
}

export interface IEnergyApparent {
  eApL1: number;
  eApL2: number;
  eApL3: number;
  eApT: number;
}

export interface IPowerFactor {
  pfL1: number;
  pfL2: number;
  pfL3: number;
  pfT: number;
}

export interface IPowerQuality {
  vunb: number;
  cunb: number;
  thdv1: number;
  thdv2: number;
  thdv3: number;
}

export interface IEnergyCost {
  l1: ILine;
  l2: ILine;
  l3: ILine;
  total: ILine;
}

export interface ILine {
  energyKWh: number;
}
