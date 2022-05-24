import Nav from "../components/Nav";


function CheckPage() {

    var proizvodi = [
        { naziv: 'NIKE DSR', sifra: 'NIKE1818', cena: 15000, prodavnice: 'USCE, DELTA CITY, GALERIJA' },
        { naziv: 'GUESS Torba', sifra: 'GUESS1313', cena: 18000, prodavnice: 'USCE, GALERIJA' },
        { naziv: 'ZARA Majica', sifra: 'ZARA777', cena: 1750, prodavnice: 'BIG, AVIV, BEO' },
        { naziv: 'Gucci Parfem', sifra: 'GUCCI444', cena: 12500, prodavnice: 'DELTA CITY, WEST65, GALERIJA' },
        { naziv: 'Prada Naočare', sifra: 'PRADA333', cena: 25000, prodavnice: 'BIG, USCE, WEST65' },
    ];

    return (
        <div>
            <Nav />
        </div>
    );
}

export default CheckPage;
