import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/StyleSearchMaterial.css';

const CompSearchMaterial = ({ materiales }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filtrar materiales basado en el término de búsqueda
    const filteredMateriales = materiales.filter(material => 
        material.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        material.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="search-container-Search-Material">
            <input 
                type="text" 
                placeholder="Buscar material..." 
                className="form-control-Search-Material"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="material-container-Search-Material mt-3">
                {filteredMateriales.length === 0 ? (
                    <p>No hay materiales que coincidan con la búsqueda.</p>
                ) : (
                    filteredMateriales.map(material => (
                        <div key={material.id} className="material-card-Search-Material">
                            <div className="card-Search-Material">
                                <img 
                                    src={`http://localhost:8000/uploadsMaterial/${material.imagen_url}`} 
                                    alt={`Imagen de ${material.descripcion}`} 
                                    className="card-img-top-Search-Material" 
                                />
                                <div className="card-body-Search-Material">
                                    <h5 className="card-title-Search-Material">{material.descripcion}</h5>
                                    <p className="card-text-Search-Material"><strong>Nombre:</strong> {material.nombre}</p>
                                    <p className="card-text-Search-Material"><strong>Proveedor:</strong> {material.proveedor?.nombre || 'No disponible'}</p>
                                    <p className="card-text-Search-Material"><strong>Dimensión:</strong> {material.dimension?.descripcion || 'No disponible'}</p>
                                    <p className="card-text-Search-Material"><strong>Peso:</strong> {material.peso?.descripcion || 'No disponible'}</p>
                                    <p className="card-text-Search-Material"><strong>Tipo Material:</strong> {material.tipoMaterial?.descripcion || 'No disponible'}</p>
                                    <div className="d-flex justify-content-between-Search-Material">
                                        <Link to={`/material/edit/${material.id}`} className="btn btn-warning btn-sm-Search-Material">
                                            <i className="fa-regular fa-pen-to-square"></i> Editar
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CompSearchMaterial;
