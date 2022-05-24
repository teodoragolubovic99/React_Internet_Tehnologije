import { useState } from 'react'

function ProveraDostupnosti() {

    const [sifraProizvoda, setSifraProizvoda] = useState('');

    function handleSifraProizvoda(e) {
        setSifraProizvoda(e.target.value);
    }

    return (
        <div>
            <input type="text" className="form-control" id='input-check' value={sifraProizvoda} onChange={handleSifraProizvoda} placeholder='Unesite šifru proizvoda...' />
            <button type="button" className="btn btn-primary">Proveri dostupnost</button>
        </div>
    )
}

export default ProveraDostupnosti;