import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Usando useRouter do Next.js para navegação
import Image from 'next/image';
import Logo from '../../public/images/logo.svg'; // Importando o logo

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // Para armazenar mensagens de erro
    const [loading, setLoading] = useState(false); // Para controlar o estado de carregamento
    const router = useRouter(); // hook do Next.js para navegação

    const handleLogin = async () => {
        setLoading(true); // Inicia o carregamento
        setError(''); // Limpa qualquer erro anterior

        try {
            const response = await fetch('https://your-api-endpoint.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            // Verifica se a resposta não é OK
            if (!response.ok) {
                throw new Error(`Erro ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            console.log('Login bem-sucedido:', data);

            // Salva o token ou dados do usuário
            localStorage.setItem('authToken', data.token);

            // Redireciona para outra página (Next.js padrão)
            router.push('/');

        } catch (error) {
            console.error('Erro:', error);
            setError('O login falhou. Verifique seus dados.');
        } finally {
            setLoading(false); // Finaliza o carregamento
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleLogin();
    };

    return (
        <div className="flex items-center justify-center mt-20"> {/* Garante que a div ocupe toda a tela e centraliza */}
            <div className=" bg-slate-800 p-8 text-site rounded-lg shadow-md"> {/* Definindo largura máxima para o formulário */}
                <div className="flex justify-center mb-4"> {/* Centraliza a imagem */}
                    <Image src="/images/logo.png" alt="Login Image" width={100} height={100} />
                </div>
                <h2 className="mb-5 text-center text-xl">Bem-vindo(a)</h2>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    {error && <div className="mb-4 text-red-500">{error}</div>} {/* Exibe a mensagem de erro */}
                    <div className="mb-4 w-full">
                        <label className="block mb-1">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 rounded border border-gray-300"
                            placeholder="Digite seu email"
                        />
                    </div>
                    <div className="mb-4 w-full">
                        <label className="block mb-1">Senha:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-2 rounded border border-gray-300"
                            placeholder="Digite sua senha"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-2 rounded bg-orange-600 text-white cursor-pointer"
                        disabled={loading} // Desabilita o botão enquanto carrega
                    >
                        {loading ? 'Carregando...' : 'Login'}
                    </button>
                    <a href="/forgot-password" className="mt-4 bg-text hover:underline">Esqueci minha senha</a> {/* Link para a página de recuperação de senha */}
                </form>
            </div>
        </div>
    );
};

export default Login;
