import React from "react";
import '../../styles/core.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import imagen from "../../img/imagen.jpg"

export const Core = () => {
    return (
        <>
            <div className="first-part">
                <h1 className="title">A Warm Welcome!</h1>
                <p>Loem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa , ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiar numqueam repellat.</p>
                <button type="button" className="btn btn-primary">Call to action!</button>
            </div>
            <div className="card-style row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 g-3">
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
                <div className="col">
                    <div className="card h-100">
                        <img src={imagen} className="card-img-top"/>
                            <div className="card-body card-group-style">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Loem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necesstatibus noque.</p>
                            </div>
                            <div className="card-footer card-group-style">
                                <small className="text-body-secondary"><button type="button" className="btn btn-primary">Find Out Morel</button></small>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={imagen} className="card-img-top"/>
                            <div className="card-body card-group-style">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Loem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necesstatibus noque.</p>
                            </div>
                            <div className="card-footer card-group-style">
                                <small className="text-body-secondary"><button type="button" className="btn btn-primary">Find Out Morel</button></small>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={imagen} className="card-img-top"/>
                            <div className="card-body card-group-style">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Loem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necesstatibus noque.</p>
                            </div>
                            <div className="card-footer card-group-style">
                                <small className="text-body-secondary"><button type="button" className="btn btn-primary">Find Out Morel</button></small>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};