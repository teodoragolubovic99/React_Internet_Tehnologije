import { useState } from 'react'

function ProveraDostupnosti(props) {

    const [sifraProizvoda, setSifraProizvoda] = useState('');

    function handleSifraProizvoda(e) {
        setSifraProizvoda(e.target.value);
    }

    return (
        <div>
            <input type="text" className="form-control" id='input-check' value={sifraProizvoda} onChange={handleSifraProizvoda} placeholder='Unesite šifru proizvoda...' />
            <button type="button" onClick={() => props.dostupnost(sifraProizvoda)} className="btn btn-primary">Proveri dostupnost</button>
        </div>
    )
}

export default ProveraDostupnosti;