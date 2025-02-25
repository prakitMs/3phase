import { IEnergyCost, ILine } from "@/interface/dashboard";
import { Type } from "class-transformer";

export class EnergyCost implements IEnergyCost {
  l1 = new Line();
  l2 = new Line();
  l3 = new Line();
  total = new Line();
}

export class Line implements ILine {
  energyKWh = 0;
}
