import { useState } from 'react'

function NoviProizvodForma() {

    const [proizvod, setProizvod] = useState({
        naziv: '',
        sifra: '',
        cena: '',
    });

    function handleNaziv(e) {
        setProizvod({ ...proizvod, naziv: e.value })
    }

    function handleSifra(e) {
        setProizvod({ ...proizvod, sifra: e.value })
    }

    function handleCena(e) {
        setProizvod({ ...proizvod, cena: e.value })
    }


    return (
        <div>
            <form className="add">
                <div className="field">
                    <label>Naziv: </label>
                    <input type="text" className="form-control" value={proizvod.naziv} onChange={handleNaziv} />
                </div>
                <div className="field">
                    <label>Šifra: </label>
                    <input type="text" className="form-control" value={proizvod.sifra} onChange={handleSifra} />
                </div>
                <div className="field">
                    <label>Cena: </label>
                    <input type="number" className="form-control" value={proizvod.cena} onChange={handleCena} />
                </div>
                <button type="submit" className="btn btn-primary" id='btn_add'>Dodaj</button>
            </form>
        </div>
    );
}

export default NoviProizvodForma;