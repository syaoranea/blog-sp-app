
import './Rodape.css'
export const Rodape = () => {
    return (
    <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Serviços</h3>
                            <ul>
                                <li><a href="#">Newsletter Exclusiva</a></li>
                                <li><a href="#">Fórum Comunitário</a></li>
                                <li><a href="#">Sessões ao Vivo e Webinars</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Sobre</h3>
                            <ul>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Time</a></li>
                                <li><a href="#">Colaboradores</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Company Name</h3>
                            <p>Neste espaço virtual, mergulhamos fundo nas últimas tendências, inovações e notícias que moldam o panorama tecnológico atual. Se você é um entusiasta da tecnologia, um profissional do setor ou alguém simplesmente curioso sobre as últimas novidades, este é o lugar ideal para você.</p>
                        </div>
                        <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
                    </div>
                    <p className="copyright">Company TechFiap © 2024</p>
                </div>
            </footer>
        </div>
    )
}