import React from "react";
import '../../styles/card.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import imagen from "../../img/imagen.jpg"

export const Card = () => {
    return (
        <>
                <div className="col">
                    <div className="card h-100">
                        <img src={imagen} className="card-img-top"/>
                            <div className="card-body card-group-style">
                                <h5 className="card-title ">Card title</h5>
                                <p className="card-text">Loem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necesstatibus noque.</p>
                            </div>
                            <div className="card-footer card-group-style">
                                <small className="text-body-secondary"><button type="button" className="btn btn-primary">Find Out Morel</button></small>
                            </div>
                    </div>
                </div>
        </>
    );
};