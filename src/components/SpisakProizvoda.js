
function SpisakProizvoda(props) {

    var brojac = 1;

    return (
        <div>
            <h1 id='spisak-naslov'>Spisak za shopping</h1>

            <div className='spisak'>
                {props.spisak.map(proizvod => {
                    return (
                        <div className='proizvod' key={proizvod.sifra}>
                            <h4>{brojac++}. Naziv:{proizvod.naziv}  Šifra:{proizvod.sifra} Cena:{proizvod.cena}RSD</h4>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SpisakProizvoda;