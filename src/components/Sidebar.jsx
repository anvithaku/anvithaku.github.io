function Sidebar() {
    return (
        <aside id="sidebar">
            <div className="container">
                <h1>Timings</h1>
                <ul>
                    <li>Breakfast: 8:00 a.m. - 10:30 a.m.</li>
                    <li>Lunch: 12:30 p.m. - 2:30 p.m.</li>
                    <li>Dinner: 7:00 p.m. - 10:00 p.m.</li>
                </ul>
                <b>
                    Make a reservation <a href="/contact">here</a> or contact us at 6969696969 to book a table.
                    Cats are strictly disallowed.
                </b>
            </div>
        </aside>
    );
}
export default Sidebar;