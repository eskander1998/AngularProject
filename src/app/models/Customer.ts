import { Facture } from "./Facture";

export class Customer{
    idClient: number;
    nom: string;
    prenom: string;
    dateNaissance: string;
    email: string;
    profession: string;
    categorieClient: string;
    facture!: Facture;
    }
    