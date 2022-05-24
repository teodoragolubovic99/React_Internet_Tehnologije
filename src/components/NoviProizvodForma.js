import { useState } from 'react'
import SpisakProizvoda from './SpisakProizvoda';

function NoviProizvodForma() {

    const [proizvod, setProizvod] = useState({
        naziv: '',
        sifra: '',
        cena: '',
    });

    const [spisak, setSpisak] = useState([]);

    function handleNaziv(e) {
        setProizvod({ ...proizvod, naziv: e.target.value })
    }

    function handleSifra(e) {
        setProizvod({ ...proizvod, sifra: e.target.value })
    }

    function handleCena(e) {
        setProizvod({ ...proizvod, cena: e.target.value })
    }

    function dodajUSpisak(e) {
        e.preventDefault();
        setSpisak(spisak => [...spisak, proizvod]);
    }


    return (
        <div>
            <form onSubmit={dodajUSpisak} className="add">
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

            <SpisakProizvoda spisak={spisak} />

        </div>
    );
}

export default NoviProizvodForma;