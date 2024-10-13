import { Link } from 'react-router-dom';
import inventario from './pictures/inventory.png';
import ventas from './pictures/sales.png';
import cliente from './pictures/clients.png';
import proveedores from './pictures/suppliers.png';
import personal from './pictures/staff.png';
import usuario2 from './pictures/user.png';
import compra from './pictures/buys.png';
import materiales from './pictures/materials.png';
import FactProv from './pictures/supplierbilling.png';
import './Styles/MainContent.css'; // Asegúrate de que esta ruta sea correcta

function MainContent() {
  return (
    <main className="App-main">
      <h2>Bienvenido a la plataforma</h2>
      <p>Aquí encontrarás todos los módulos disponibles.</p>

      <div className="module-buttons">
        <div className="module-card">
          <Link to="/inventario/gestion-inventarios" className="btn-module">
            <img src={inventario} alt="Gestión de Inventario" />
            <h3>Gestión de Inventario</h3>
          </Link>
        </div>
        <div className="module-card">
          <Link to="/cliente/gestion-clientes" className="btn-module">
            <img src={cliente} alt="Gestión de Clientes" />
            <h3>Gestión de Clientes</h3>
          </Link>
        </div>
        <div className="module-card">
          <img src={ventas} alt="Gestión de Ventas" />
          <h3>Gestión de Ventas</h3>
          <p>Próximamente</p>
        </div>
        <div className="module-card">
          <Link to="/proveedor/gestion-proveedores" className="btn-module">
            <img src={proveedores} alt="Gestión de Proveedores" />
            <h3>Gestión de Proveedores</h3>
          </Link>
        </div>
        <div className="module-card">
          <Link to="/conductor/gestion-conductores" className="btn-module">
            <img src={personal} alt="Gestión de Personal" />
            <h3>Gestión de Conductores</h3>
          </Link>
        </div>
        <div className="module-card">
          <Link to="/usuario/gestion-usuarios" className="btn-module">
            <img src={usuario2} alt="Gestión de Usuarios" />
            <h3>Gestión de Usuarios</h3>
          </Link>
        </div>
        <div className="module-card">
          <Link to="/compra/gestion-compras/catalogo" className="btn-module">
            <img src={compra} alt="Gestión de Compras" />  {/* Nueva tarjeta */}
            <h3>Gestión de Compras</h3>
          </Link>
        </div>
        <div className="module-card">
          <Link to="/material/gestion-materiales" className="btn-module">
            <img src={materiales} alt="Gestión de Materiales" />
            <h3>Gestión de Materiales</h3>
          </Link>
        </div>
        <div className="module-card">
          <Link to="/factura-proveedor/gestion-facturas-proveedores" className="btn-module">
            <img src={FactProv} alt="Gestión de Facturas de Provedores" />
            <h3>Gestión de Facturas de Provedores</h3>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default MainContent;