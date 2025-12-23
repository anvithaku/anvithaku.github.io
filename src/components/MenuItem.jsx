function MenuItem({ dish, price }) {
    return (
        <div className="menu-items">
            <span className="dish">{dish}</span>
            <span className="dots"></span>
            <span className="price">{price}</span>
        </div>
    );
}

export default MenuItem;