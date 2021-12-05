import { Facture } from "./Facture";

export class DetailFacture {
    idDetailFacture: number;
    qte: number;
    prixTotal: number;
    pourcentageRemise: number;
    montantRemise: number;
    //produit: Produit;
    facture: Facture;
}