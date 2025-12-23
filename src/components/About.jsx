function About() {
    return (
        <div className="container">
            <section id="main">
                <h2>About Us</h2>
                <p>
                    At the heart of the Ratstaurant lies a rat. Once a resident of the sewers of Block 17 of MIT, Manipal,
                    Remesh couldn't escape his love for good food and ran away to a nearby hotel to become a chef there.
                    After that, there was no looking back for Remesh. He founded The Ratstaurant, Manipal's first French
                    restaurant run entirely by rats.
                </p>

                <div className="gallery-heading">
                    <h1 id="gallery">Meet The Chefs</h1>
                </div>

                <div className="image-align">
                    <img src="images/Ratcook.jpg" alt="Rat chef cooking" id="ratdish" />
                    <img src="images/ratdining.jpg" alt="Rat dining" id="salmon" />
                    <img src="images/Rat1.jpg" alt="Rat in hotel" id="hotel" />
                    <img src="images/Rat2.jpg" alt="Rat with pumpkin" id="pumpkin" />
                    <img src="images/rat4.jpg" alt="Rat with croissant" id="croissant" />
                    <img src="images/rat5.jpg" alt="Rat with pasta" id="pasta" />
                </div>

                <p className="rats">
                    Top left to bottom right: Remesh (Head Chef), Ratika and Ratnakara (Sous Chefs), Ratan, Ratneshwari,
                    Ratilal, Ratcliffe (cooks).
                </p>

                <div className="gallery-heading">
                    <h1 id="gallery">A Chef's Hat And A Dream</h1>
                </div>
                <p>
                    With nothing but a chef's hat and a dream to his name, Remesh built The Ratstaurant from the ground up.
                    Our hardworking rat chefs, waitstaff and cleaning staff made The Ratstaurant what it is today: a gourmet
                    sensation that celebrates comfort food, and above all, its humble beginnings. Come in, grab a table and
                    make memories that will last a lifetime.
                </p>
            </section>
            <div className="space"></div>
        </div>
    );
}

export default About;