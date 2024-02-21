import { useEffect, useState } from "react"
import { Layout } from "../Components/Layout.jsx"
import { client } from "../lib/createClient.js"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { useParams, Link } from "react-router-dom";

//const post_slug = "nosso-primeiro-post";

export const Post = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        client
            .getEntries({
                "fields.postSlug": slug,
                content_type: 'blogPostagem',
            })
            .then(function (entries) {
                console.log("post", entries);
                setPost(entries.items[0] || null);
            });
    }, []);

    return (
        <Layout>
            {post ? <div className="container container-blog">
                <div className="row">
                    <div className="col-12">
                        <h1>{post.fields.title}</h1>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: documentToHtmlString(post.fields.postBody)}}></div>
                    <div className="mt-1">
                    <Link to="/" className="btn btn-primary">
                        Voltar para Home
                    </Link>
                    </div>
                </div>
            </div> : <div>carregando</div>}
            
        </Layout>
    )
}