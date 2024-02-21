import { useEffect, useState } from "react"
import { Layout } from "../Components/Layout.jsx"
import { client } from "../lib/createClient.js"
import { Link } from "react-router-dom"
import './home.css'

export const Home = () => {
    const [categories, setCategories] = useState([]);
    
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Escolha o número desejado de itens por página
    const [data, setData] = useState([]);
    const paginate = (pageNumber) => {
       console.log(pageNumber)
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        client.getEntries({
            content_type: 'blogCategory'
        }).then(function(entries)  {
            console.log(entries.items)
            setCategories(entries.items);

        });
        
        const fetchData = async () => {
            try {
                const entries = await client.getEntries({
                    content_type: 'blogPostagem',
                    order: '-sys.createdAt'
                });
                console.log(entries.items);
                console.log(currentPage)
                setData(entries.items);
                const startIndex = (currentPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                const slicedPosts = entries.items.slice(startIndex, endIndex);
                setPosts(slicedPosts);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
        
    
    }, [currentPage])//array vazio para executar apenas uma vez


    return (
        <Layout>
            <section id="page-header-secion" className="alter-heading">
                <div className="page-header-image parallax bg-image topo"></div>
                
                <div className="container page-header-content no-padding max-width-800 text-center">
                    <div className="row">
                        <div className="col-lg-12">
                        <h1 className="album-title">Noticias</h1>
                        <ol className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Blog</li>
                        </ol>
                        </div> 
                    </div> 
                </div>
            </section>
            <br/>
            <section id="content-section" className="page pagegeek">
                <div className="container max-width-1300">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="content-wrap">
                                <div className="blog-list">
                                    <div className="row">
                                        <div className="col-md-8 col-md-push-4">
                                            <div className="blog-list-items-wrap">
                                                {posts.map((post) => (
                                                <div className="blog-list-item" key={post.sys.id}>
                                                    <div className="image-container">
                                                        <img className="topo-img" key={post.sys.id} src={post.fields.urlimagem}/>
                                                        <div className="image-overlay"></div>
                                                    </div>
                                                    
                                                    <div className="bli-info">
                                                    <Link to={`/post/${post.fields.postSlug}`} >
                                                        <h2 className="bli-title"><a>{post.fields.title}</a></h2>
                                                    </Link>
                                                        <div className="bli-meta">
                                                            <a className="article-time">{post.fields.data}</a> - by: 
                                                            <a className="article-author">{post.fields.autor}</a> - in
                                                            <a className="article-category"> #{post.fields.blogCategory.fields.name}</a>
                                                        </div>
                                                        <p className="bli-desc">
                                                            {post.fields.description}...
                                                        </p>
                                                        <div className="bli-button">
                                                            <Link to={`/post/${post.fields.postSlug}`} className="btn btn-dark btn-rounded-5x btn-sm">
                                                                Leia mais
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-md-pull-8">
                                            <div className="sidebar sidebar-left">
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="sidebar-widget sidebar-search no-margin-top">
                                                            <form id="blog-search-form">
                                                                <div className="form-group">
                                                                    <label>
                                                                        <input className="form-control" type="text" name="name" />
                                                                    </label>
                                                                    <button type="submit"><i className="fas fa-search"></i></button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-sm-6">
                                                        <div className="sidebar-widget sidebar-categories">
                                                            <h3 className="sidebar-heading">Categorias</h3>
                                                         
                                                            <ul className="list-unstyled">
                                                                {categories.map((category) => (
                                                                    <li key={category.sys.id}><a>{category.fields.name}</a></li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-sm-6">
                                                        <div className="sidebar-widget sidebar-post-list">
                                                            <h3 className="sidebar-heading">Mais Recentes</h3>
                                                            <ul className="list-unstyled">
                                                                <li>
                                                                    <a href="blog-single-sidebar-right.html" className="post-thumb bg-image"></a>
                                                                    <div className="post-data">
                                                                        <h5 className="post-title"><a href="blog-single-sidebar-right.html">5 ANIMES DE FICÇÃO CIENTÍFICA</a></h5>
                                                                        <span className="author">By: Eduardo</span>
                                                                        <span className="date">20/02/2022</span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-sm-6">
                                                        <div className="sidebar-widget sidebar-subscribe">
                                                            <h3 className="sidebar-heading">Incrição</h3>
                                                            <form id="subscribe-form" className="form-with-button">
                                                                <label>
                                                                    <input className="form-control" type="text" name="name" />
                                                                </label>
                                                            </form>
                                                            <p className="small">Acompanhe nossas últimas novidades:</p>
                                                            <form id="subscribe-form" className="form-with-button">
                                                                <div className="form-group">
                                                                    <button type="submit"><i className="fas fa-envelope-o"></i></button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className="col-md-12 col-sm-6">
                                                            <div className="sidebar-widget sidebar-meta">
                                                                <h3 className="sidebar-heading">Meta</h3>
                                                                <ul className="list-unstyled">
                                                                    <li><a href="">Log In</a></li>
                                                                    <li><a href="">Entries RSS</a></li>
                                                                    <li><a href="">Comments RSS</a></li>
                                                                    <li><a href="https://wordpress.org/">WordPress.org</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                    
            

            <div className="row paginador">
                <div className="col-md-8">
                    <nav className="pagination-wrap">
                    <ul className="pagination">
                    <li>
                        <a href="" aria-label="Previous" onClick={() => paginate(1)}>
                            <span aria-hidden="true">First</span>
                        </a>
                    </li>
                    {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
                    <li key={index + 1} onClick={() => paginate(index + 1)}>
                    <a> {index + 1}</a>
                    </li>
))}
                    <li>
                        <a href="" aria-label="Next" onClick={() => paginate(4)}>
                            <span aria-hidden="true">Last</span>
                        </a>
                    </li>
                    </ul>
                    </nav>
                </div>
               
            </div>
        </Layout>
    )
}

