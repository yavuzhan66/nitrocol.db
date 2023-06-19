module.exports =
class Products {
    constructor( id,titre, descriptions, img, dates, avis, prix) {
        this.id = id;
        this.titre = titre;
        this.description = descriptions;
        this.img = img;
        this.date = dates;
        this.avis = avis;
        this.prix = prix;
    }
};