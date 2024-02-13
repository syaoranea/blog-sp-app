import { useEffect, useState } from "react"
import { Layout } from "../Components/Layout.jsx"
import { client } from "../lib/createClient.js"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { useParams } from "react-router-dom/cjs/react-router-dom.min.js";

//const post_slug = "nosso-primeiro-post";

export const Post = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        client
            .getEntry({
                "postSlug": slug,
                content_type: "blogPostagem",
            })
            .then(function (entries) {
                console.log(entries);
                setPost(entries || null);
            })
            
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
                        <a href="/home" className="btn btn-primary">Voltar</a>
                    </div>
                </div>
            </div> : <div>carregando</div>}
            
        </Layout>
    )
}