import React, { useEffect, useState } from 'react';
import './github.css'

const GitHub = () => {

    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRepos = async () => {
            setLoading(true)
            try {
                const response = await fetch('https://api.github.com/users/Nicko-rgb/repos');
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }
                const data = await response.json();
                setRepos(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchRepos();
    }, []);

    return (
        <div className='github' onClick={(e) => e.stopPropagation()}>
            <h2>Proyectos en GitHub</h2>
            {loading ? (
                <div>
                    <p>Cargando Datos.....</p>
                </div>
            ) : error ? (
                <div>
                    <p>Error: {error}</p>
                </div>
            ) : (
                <div className="boxs">
                    {repos.map(repo => (
                        <aside key={repo.id}>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                {repo.name}
                            </a>
                            <p>{repo.description} </p>
                            <span>{repo.language} </span>
                            <span>{repo.stargazers_count} </span>
                        </aside>
                    ))}
                </div>
            )}
        </div>
    )
}

export default GitHub