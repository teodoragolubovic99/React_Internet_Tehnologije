import Nav from "../components/Nav";
import ProveraDostupnosti from "../components/ProveraDostupnosti";


function CheckPage() {

    var proizvodi = [
        { naziv: 'NIKE DSR', sifra: 'NIKE1818', cena: 15000, prodavnice: 'USCE, DELTA CITY, GALERIJA' },
        { naziv: 'GUESS Torba', sifra: 'GUESS1313', cena: 18000, prodavnice: 'USCE, GALERIJA' },
        { naziv: 'ZARA Majica', sifra: 'ZARA777', cena: 1750, prodavnice: 'BIG, AVIV, BEO' },
        { naziv: 'Gucci Parfem', sifra: 'GUCCI444', cena: 12500, prodavnice: 'DELTA CITY, WEST65, GALERIJA' },
        { naziv: 'Prada Naočare', sifra: 'PRADA333', cena: 25000, prodavnice: 'BIG, USCE, WEST65' },
    ];

    function proveriDostupnost(sifra) {
        var dostupan = false;
        proizvodi.forEach(proizvod => {
            if (proizvod.sifra.toLowerCase() === sifra.toLowerCase()) {
                alert("Proizvod je dostupan u: " + proizvod.prodavnice + ".")
                dostupan = true;
            }
        });
        if (!dostupan) {
            alert("Trazeni proizvod nije dostupan!")
        }
    }


    return (
        <div>
            <Nav />
            <ProveraDostupnosti dostupnost={proveriDostupnost} />
        </div>
    );
}

export default CheckPage;
