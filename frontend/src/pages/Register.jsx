import { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:5198/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                alert("Usuário registrado com sucesso!");
                setFormData({ nome: "", email: "", password: "" }); // Limpa o formulário
            } else {
                const errorData = await response.json();
                alert("Erro: " + (errorData.message || "Falha no registro."));
            }
        } catch (error) {
            console.error("Erro ao registrar:", error);
            alert("Erro ao conectar com o servidor.");
        }
    };

    return (
        <div>
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="nome" 
                    placeholder="Nome" 
                    value={formData.nome} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="E-mail" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Senha" 
                    value={formData.password} 
                    onChange={handleChange} 
                    required 
                />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default Register;
