
import './Slide.css'
export const Slide = () => {
    return (

        <section className="intro">
        <div className="left">
            <div>
            <span>Explore</span>
            <h1>The Places Where You Will</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos eveniet amet excepturi voluptates dolorem totam ad quod hic, porro accusamus, repellat, corrupti at obcaecati ducimus, dolor quibusdam sequi nemo inventore?</p>
            <a href="#" target="_blank">Images by Unsplash</a>
            </div>
        </div>

        <div className="slider">
            <ul>
            <li style="background-image:url(https://images.unsplash.com/photo-1458640904116-093b74971de9?crop=entropy&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1375)">
                <div className="center-y">
                <h3>Slider Title #1</h3>
                <a href="#">View Project</a>	
                </div>
            </li>
            <li style="background-image:url(https://images.unsplash.com/photo-1451906278231-17b8ff0a8880?crop=entropy&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1375)">
                <div className="center-y">
                <h3>Slider Title #2</h3>
                <a href="#">View Project</a>	
                </div>
            </li>
            <li style="background-image:url(https://images.unsplash.com/photo-1456428199391-a3b1cb5e93ab?crop=entropy&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1375)">
                <div className="center-y">
                <h3>Slider Title #3</h3>
                <a href="#">View Project</a>	
                </div>
            </li>
            </ul>

            <ul>
            <nav>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
            </nav>
            </ul>
        </div>
        </section>
    )
}