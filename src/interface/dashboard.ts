export interface Dashboard {
  timestamp: string;
  voltage: Voltage;
  current: Current;
  frequency: Frequency;
  activePower: ActivePower;
  energyActive: EnergyActive;
  energyReactive: EnergyReactive;
  energyApparent: EnergyApparent;
  powerFactor: PowerFactor;
  powerQuality: PowerQuality;
  energyCost: EnergyCost;
}

export interface Voltage {
  vu1N: number;
  vu2N: number;
  vu3N: number;
  vU12: number;
  vU23: number;
  vU31: number;
}

export interface Current {
  aL1: number;
  aL2: number;
  aL3: number;
}

export interface Frequency {
  freq: number;
}

export interface ActivePower {
  apL1: number;
  apL2: number;
  apL3: number;
  apTotal: number;
}

export interface EnergyActive {
  eAL1: number;
  eAL2: number;
  eAL3: number;
  eATotal: number;
}

export interface EnergyReactive {
  eRL1: number;
  eRL2: number;
  eRL3: number;
  eRTotal: number;
}

export interface EnergyApparent {
  eApL1: number;
  eApL2: number;
  eApL3: number;
  eApT: number;
}

export interface PowerFactor {
  pfL1: number;
  pfL2: number;
  pfL3: number;
  pfT: number;
}

export interface PowerQuality {
  vunb: number;
  cunb: number;
  thdv1: number;
  thdv2: number;
  thdv3: number;
}

export interface EnergyCost {
  l1: L1;
  l2: L2;
  l3: L3;
  total: Total;
}

export interface L1 {
  energyKWh: number;
}

export interface L2 {
  energyKWh: number;
}

export interface L3 {
  energyKWh: number;
}

export interface Total {
  energyKWh: number;
}
