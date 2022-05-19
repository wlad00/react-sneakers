function Drawer(){
    return(
        <div style={{display:'none'}} className="korzina">
        <div className="drawer">

            <h2 className="d-flex justify-between">
                Korzina
                <img className="cu-p" src="/img/logi192.png" alt=""/>
            </h2>

            <div className="items">

                <div className="cartItemImg d-flex align-center">
                    <div
                     style={{backgroundImage:'url(/img/one.png)'}}
                        className="carItemImg"
                    >
                    </div>

                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские кроссовки</p>
                        <b>112 999 rub.</b>
                    </div>
                    <img className="removeBtn" src="/img/one.png" alt=""/>
                </div>
                <div className="cartItemImg d-flex align-center">
                    <div
                     style={{backgroundImage:'url(/img/one.png)'}}
                        className="carItemImg"
                    >
                    </div>

                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские кроссовки</p>
                        <b>112 999 rub.</b>
                    </div>
                    <img className="removeBtn" src="/img/one.png" alt=""/>
                </div>



            </div>

            <div className="cartTotalBlock">
                <ul>
                    <li>
                        <span>Sum:</span>
                        <div></div>
                        <b>21 498 rub.</b>
                    </li>
                    <li>
                        <span>Nalog 5%</span>
                        <div></div>
                        <b> 974 rub.</b>
                    </li>
                </ul>
            </div>

        </div>
        </div>
    );
}

export default Drawer;