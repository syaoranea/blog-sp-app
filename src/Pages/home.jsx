import { useEffect, useState } from "react"
import { Layout } from "../Components/Layout.jsx"
import { client } from "../lib/createClient.js"
import { Link } from "react-router-dom"
import './home.css'
import imgagemEscolhida from '../assets/img/heading-9.jpg'
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
            <section id="page-header-secion" class="alter-heading">
                <div class="page-header-image parallax bg-image topo"></div>
                
                <div class="container page-header-content no-padding max-width-800 text-center">
                    <div class="row">
                        <div class="col-lg-12">
                        <h1 class="album-title">Noticias</h1>
                        <ol class="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li class="active">Blog</li>
                        </ol>
                        </div> 
                    </div> 
                </div>
            </section>
            <br/>
            <section id="content-section" class="page pagegeek">
                <div class="container max-width-1300">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="content-wrap">
                                <div class="blog-list">
                                    <div class="row">
                                        <div class="col-md-8 col-md-push-4">
                                            <div class="blog-list-items-wrap">
                                                {posts.map((post) => (
                                                <div class="blog-list-item" key={post.sys.id}>
                                                    <img class="bli-image bg-image imagem " key={post.sys.id} src={post.fields.imagem.content.value} />
                                                    <div class="bli-info">
                                                        <h2 class="bli-title">{post.fields.title}</h2>
                                                        <div class="bli-meta">
                                                            <a class="article-time">{post.fields.data}</a> - by: 
                                                            <a class="article-author">{post.fields.autor}</a> - in
                                                            <a class="article-category"> #{post.fields.blogCategory.fields.name}</a>
                                                        </div>
                                                        <p class="bli-desc">
                                                            {post.fields.description}
                                                            ...</p>
                                                        <div class="bli-button">
                                                            <Link to={`/post/${post.fields.postSlug}`} class="btn btn-dark btn-rounded-5x btn-sm">Leia mais</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-md-pull-8">
                                            <div class="sidebar sidebar-left">
                                                <div class="row">
                                                    <div class="col-sm-12">
                                                        <div class="sidebar-widget sidebar-search no-margin-top">
                                                            <form id="blog-search-form">
                                                                <div class="form-group">
                                                                    <label>
                                                                        <input class="form-control" type="text" name="name" />
                                                                    </label>
                                                                    <button type="submit"><i class="fas fa-search"></i></button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 col-sm-6">
                                                        <div class="sidebar-widget sidebar-categories">
                                                            <h3 class="sidebar-heading">Categorias</h3>
                                                         
                                                            <ul class="list-unstyled">
                                                                {categories.map((category) => (
                                                                    <li key={category.sys.id}>{category.fields.name}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 col-sm-6">
                                                        <div class="sidebar-widget sidebar-post-list">
                                                            <h3 class="sidebar-heading">Mais Recentes</h3>
                                                            <ul class="list-unstyled">
                                                                <li>
                                                                    <a href="blog-single-sidebar-right.html" class="post-thumb bg-image"></a>
                                                                    <div class="post-data">
                                                                        <h5 class="post-title"><a href="blog-single-sidebar-right.html">title</a></h5>
                                                                        <span class="author">By: autor</span>
                                                                        <span class="date">data</span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 col-sm-6">
                                                        <div class="sidebar-widget sidebar-subscribe">
                                                            <h3 class="sidebar-heading">Incrição</h3>
                                                            <form id="subscribe-form" class="form-with-button">
                                                                <label>
                                                                    <input class="form-control" type="text" name="name" />
                                                                </label>
                                                            </form>
                                                            <p class="small">Acompanhe nossas últimas novidades:</p>
                                                            <form id="subscribe-form" class="form-with-button">
                                                                <div class="form-group">
                                                                    <button type="submit"><i class="fas fa-envelope-o"></i></button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div class="col-md-12 col-sm-6">
                                                            <div class="sidebar-widget sidebar-meta">
                                                                <h3 class="sidebar-heading">Meta</h3>
                                                                <ul class="list-unstyled">
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
                    
            

            <div class="row">
                <div class="col-md-8">
                    <nav class="pagination-wrap">
                    <ul class="pagination">
                        <li>
                        <a href="" aria-label="Previous">
                            <span aria-hidden="true">First</span>
                        </a>
                        </li>
                        <li><a href="">Prev</a></li>
                        <li class="active"><a href="#0">1</a></li>
                        <li><a href="">2</a></li>
                        <li><a href="">3</a></li>
                        <li><a href="#0">...</a></li>
                        <li><a href="">6</a></li>
                        <li><a href="">7</a></li>
                        <li><a href="">8</a></li>
                        <li><a href="">Next</a></li>
                        <li>
                        <a href="" aria-label="Next">
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

