import { useEffect, useState } from "react"
import { Layout } from "../Components/Layout.jsx"
import { client } from "../lib/createClient.js"
import { Link } from "react-router-dom"
export const Home = () => {
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        client.getEntries({
            content_type: 'blogCategory'
        }).then(function(entries)  {
            console.log(entries.items)
            setCategories(entries.items);
        });

        client.getEntries({
            content_type: 'blogPostagem',
            limit: 5,
            order: '-sys.createdAt'
        }).then(function(entries)  {
            console.log(entries.items)
            setPosts(entries.items);   
        });
    
    }, [])//array vazio para executar apenas uma vez
    return (
        <Layout>
            
            <div className="container">
                <div className="row">
                    <main className="col-md-8">
                        <h1 className="my-3">Últimos posts</h1>

                        {posts.map((post) => (
                            <div className="card mb-3" key={post.sys.id}>
                                <div className="card-body">
                                    <h5 className="card-title">{post.fields.title}</h5>
                                    <p className="card-text">{post.fields.title}</p>
                                    <Link to={`/post/${post.fields.postSlug}`}>Leia mais</Link>
                                </div>
                            </div>
                        ))}
                    </main>

                        <a href="#" className='btn btn-primary'>Ver todos os posts</a>
                  
               
                    <aside className="col-md-4">
                        <h2>Categorias</h2>

                        <ul>
                            {categories.map((category) => (
                                <li key={category.sys.id}>{category.fields.name}</li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </div>
        </Layout>
    )
}

