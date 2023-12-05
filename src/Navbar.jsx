const Navbar = ({clickHome, clickCreateNew, clickProfile}) => {
    return (
        <div className="navbar">
            {/* <img src="/path-to-logo.png" alt="Metacritic Logo" /> */}
            <div className="webTitle">GameZone</div>
            
            <button className="navItem" onClick={clickHome}>Home</button>
            <button className="navItem" onClick={clickCreateNew}>Create New Game</button>
            <button className="navItem" onClick={clickProfile}>Profile</button>
            {/* ... other navbar items ... */}
        </div>
    );
}

export default Navbar;