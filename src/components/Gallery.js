import './stylesgallery.css';

const Gallery = () => {
  return (
    <main className="content-page">
        <div className="page">
            <h1>Gallery</h1>

            <div className="gallery-grid">
                <div>
                    <img src="/photos/1friends.jpg" alt="Friends" />
                    <p>Friends! Meet my friends! They are awesome people I met on uni!</p>
                </div>
                <div>
                    <img src="/photos/1fam.jpg" alt="Fam" />
                    <p>Fam time! Mom, dad, and my lil sis. I've got a lil bro too, but he's camera-shy, so no luck finding a good pic of him.</p>
                </div>
                <div>
                    <img src="/photos/1nature.jpeg" alt="Nature" />
                    <p>Why put this here? Well, snapped this pic in 2021, thought it was pretty cool, so why not show it?</p>
                </div>
                <div>
                    <img src="/photos/1meme.jpeg" alt="Meme" />
                    <p>This cat is tired just like me. Cats are also one of my fav animals. Besides that, I like bunnies.</p>
                </div>
            </div>
        
        </div>
    </main>
  );
};

export default Gallery;