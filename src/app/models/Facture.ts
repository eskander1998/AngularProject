import { Customer } from "./Customer";
import { DetailFacture } from "./DetailFacture";


export class Facture {
  idFacture !: number;
  montantRemise!: number;
  montantFacture!: number;
  dateFacture !: Date;
  active!: Boolean;
  client !: Customer;
  detailFacture !: Array<DetailFacture>;
}