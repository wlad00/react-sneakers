

function Card(){
    return(
        <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.png" alt="img" />
            <p>
                Мужские кроссовки Nike Blazer Mid suede
            </p>
            <div className="d-flex justify-between">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>12 999</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/logo192.png" alt="img" />

                </button>
            </div>
        </div>
    );
}
export default Card;
