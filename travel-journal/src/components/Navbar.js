import globe from "../images/globe.png"

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={globe} className="globe" />
            <h3>my travel journal.</h3>
        </div>
    )
}