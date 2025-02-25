import { IDashboard } from "@/interface/dashboard";
import { Voltage } from "./Voltage";
import { Current } from "./Current";
import { Frequency } from "./Frequency";
import { ActivePower } from "./ActivePower";
import { EnergyActive } from "./EnergyActive";
import { EnergyReactive } from "./EnergyReactive";
import { EnergyApparent } from "./EnergyApparent";
import { PowerFactor } from "./PowerFactor";
import { PowerQuality } from "./PowerQuality";
import { EnergyCost } from "./EnergyCost";

export class Dashboard implements IDashboard {
  timestamp = "";
  voltage = new Voltage();
  current = new Current();
  frequency = new Frequency();
  activePower = new ActivePower();
  energyActive = new EnergyActive();
  energyReactive = new EnergyReactive();
  energyApparent = new EnergyApparent();
  powerFactor = new PowerFactor();
  powerQuality = new PowerQuality();
  energyCost = new EnergyCost();

  get voltageL1() {
    const { vu1N, vu2N, vu3N } = this.voltage;
    const voltage = [
      vu1N,
      vu2N,
      vu3N,
      vu1N,
      vu2N,
      vu3N,
      vu1N,
      vu2N,
      vu3N,
      vu1N,
      vu2N,
    ];
    return {
      voltage,
      labels: voltage.map((_, idx) => (idx + 1).toString()),
    };
  }

  get voltageL2() {
    const { vu1N, vu2N, vu3N } = this.voltage;
    const voltage = [
      vu2N,
      vu1N,
      vu3N,
      vu1N,
      vu2N,
      vu3N,
      vu1N,
      vu2N,
      vu3N,
      vu1N,
      vu2N,
    ];

    return {
      voltage,
      labels: voltage.map((_, idx) => (idx + 1).toString()),
    };
  }

  get voltageL3() {
    const { vu1N, vu2N, vu3N } = this.voltage;
    const voltage = [
      vu1N,
      vu2N,
      vu3N,
      vu1N,
      vu2N,
      vu1N,
      vu2N,
      vu3N,
      vu3N,
      vu1N,
      vu2N,
    ];

    return {
      voltage,
      labels: voltage.map((_, idx) => (idx + 1).toString()),
    };
  }
}
