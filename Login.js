import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Asegúrate de haber instalado esta librería
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from "lucide-react";
import './Styles/Login.css'; // Asegúrate de importar el CSS actualizado

const Login = ({ onLoginSuccess, onClose }) => {
    const [email, setEmail] = useState('');
    const [contrasenha, setContrasenha] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true); // Muestra la pantalla de carga

        try {
            const response = await axios.post('http://localhost:8000/api/login', { email, contrasenha });
            const { token } = response.data;

            // Decodificar el token para obtener el nombre del usuario
            const decodedToken = jwtDecode(token);
            const userName = decodedToken.nombreComp; // Extraer el nombre del usuario del token

            localStorage.setItem('token', token);
            localStorage.setItem('userName', userName); // Guardar el nombre del usuario en localStorage

            console.log('Token guardado y redirigiendo');

            setTimeout(() => {
                setLoading(false);
                navigate('/Home');
                onLoginSuccess();
            }, 1000);

        } catch (error) {
            if (error.response) {
                setError(error.response.data.message || 'Error de autenticación');
            } else {
                setError('Error de conexión con el servidor');
            }
            setLoading(false); // Oculta la pantalla de carga en caso de error
        }
    };

    // Función para navegar al inicio
    const handleGoHome = () => {
        navigate('/inicio');
    };

    return (
        <div className="login-container">
            {loading && <div className="loading-overlay">Cargando...</div>}
            {!loading && (
                <form className="login-form" onSubmit={handleLogin}>
                    <h2 className="login-title">Iniciar Sesión</h2>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="relative form-group">
                        <label>Contraseña</label>
                        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                            <input
                                type={isVisible ? "text" : "password"}
                                className="form-control"
                                value={contrasenha}
                                onChange={(e) => setContrasenha(e.target.value)}
                                required
                                style={{ paddingRight: '40px' }} // Espacio a la derecha para el botón
                            />
                            <button
                                type="button"
                                onClick={handleClick}
                                style={{
                                    position: 'absolute',
                                    right: '-30px',
                                    background: 'none',
                                    border: 'none',
                                    padding: '0',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '10px',
                                }}
                            >
                                {isVisible ? <EyeOffIcon /> : <EyeIcon />}
                            </button>
                        </div>
                    </div>
                    {error && <div className="login-error">{error}</div>}
                    <div className="button-container">
                        <button type="submit" className="login-button">Iniciar Sesión</button>
                        {/* Botón para regresar al inicio */}
                        <button type="button" className="go-home-button" onClick={handleGoHome}>
                            Regresar al Inicio
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Login;
