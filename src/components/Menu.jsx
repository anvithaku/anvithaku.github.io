import MenuItem from './MenuItem';

function Menu() {
    const chefsSpecial = [
        { dish: "Ratatouille", price: "₹690" }
    ];

    const breakfast = [
        { dish: "Eggs Benedict", price: "₹690" },
        { dish: "Omelette", price: "₹690" },
        { dish: "Scrambled Eggs", price: "₹690" },
        { dish: "Sunny Side Up", price: "₹690" },
        { dish: "Sausages", price: "₹690" },
        { dish: "Crumb Platter (for rats)", price: "₹69" },
        { dish: "Pancake Stack", price: "₹690" },
        { dish: "Fresh Waffles", price: "₹690" },
        { dish: "Fruit Platter", price: "₹690" }
    ];

    const entree = [
        { dish: "Pommé Pureé", price: "₹690" },
        { dish: "Salmon Goat Cheese", price: "₹690" },
        { dish: "Croque Monsieur", price: "₹690" },
        { dish: "Mushroom Brie", price: "₹690" },
        { dish: "Escargot", price: "₹690" },
    ];

    const soup = [
        { dish: "Classic French Onion", price: "₹690" },
        { dish: "Fresh Garden Salad", price: "₹690" },
        { dish: "Soupe du Jour", price: "₹690" },
        { dish: "Mimosa Salad", price: "₹690" },
        { dish: "Potage au Carrott", price: "₹690" },
    ];
    
    const main = [
        { dish: "Foie Gras", price: "₹690" },
        { dish: "Salmon Vodka Pasta", price: "₹690" },
        { dish: "Butternut Ravioli", price: "₹690" },
        { dish: "Egg Caviar", price: "₹690" },
        { dish: "Paella", price: "₹690" },
        { dish: "Gnocchi romaine", price: "₹690" },
        { dish: "Le Fishe au Chocolat", price: "₹690" },
        { dish: "Cheese Platter (For rat guests; served to human guests on request)", price: "₹69/690" },
    ];

    const beverage = [
        { dish: "Wine (red, white, rosé)", price: "₹690" },
        { dish: "Champagne", price: "₹690" },
        { dish: "Hot Chocolat", price: "₹690" },
        { dish: "Tea", price: "₹690" },
        { dish: "Coffee", price: "₹690" },
    ];

    const desserts = [
        { dish: "Ananas Flambes au kirsch", price: "₹690" },
        { dish: "Crêpes Suzette", price: "₹690" },
        { dish: "Mille-Feuilles", price: "₹690" },
        { dish: "Creme Bruleé", price: "₹690" },
        { dish: "Apple Tart Tatin", price: "₹690" },
        { dish: "Sugar Cubes (for rats)", price: "₹69" },
    ];


    return (
        <div className="container">
            <section id="main">
                <div className="gallery-heading">
                    <h1 id="gallery">MENU</h1>
                </div>

                <h3 className="menu-heading">Chef's Special</h3>
                {chefsSpecial.map((item, index) => (
                    <MenuItem key={index} dish={item.dish} price={item.price} />
                ))}

                <h3 className="menu-heading">Breakfast</h3>
                {breakfast.map((item, index) => (
                    <MenuItem key={index} dish={item.dish} price={item.price} />
                ))}

                <h3 className="menu-heading">Entrée + Hors d'Oeuvre</h3>
                {entree.map((item, index) => (
                    <MenuItem key={index} dish={item.dish} price={item.price} />
                ))}

                <h3 className="menu-heading">Potage et Salades</h3>
                {soup.map((item, index) => (
                    <MenuItem key={index} dish={item.dish} price={item.price} />
                ))}

                <h3 className="menu-heading">Mains</h3>
                {main.map((item, index) => (
                    <MenuItem key={index} dish={item.dish} price={item.price} />
                ))}

                <h3 className="menu-heading">Beverages</h3>
                {beverage.map((item, index) => (
                    <MenuItem key={index} dish={item.dish} price={item.price} />
                ))}

                <h3 className="menu-heading">Entremets</h3>
                {desserts.map((item, index) => (
                    <MenuItem key={index} dish={item.dish} price={item.price} />
                ))}
            </section>
        </div>
    );
}

export default Menu;