import { Link } from 'react-router-dom';
import './styleshome.css';

const Home = () => {
    return (
        <main className="content-page">
            <div className="page-home">

                <div className="home-container">
                    <div className="home-content">
                        <h4>Hello</h4>
                        <h2>I'm <span className="name-highlight">Zhafira</span> Muthia Rabbani</h2>
                        <p>An ordinary student from Indonesia University of Education (UPI)</p>

                        <Link to="/about">
                            <button className="more-about-button">More About Me</button>
                        </Link>
                    </div>
                    <img className="home-image" src="/photos/1japnonformal.png" alt="" />
                </div>

            </div>
        </main>
    );
}

export default Home;