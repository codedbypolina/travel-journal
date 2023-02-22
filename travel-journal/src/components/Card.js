import location from "../images/location.png"

export default function Card() {
    return (
        <div className="card">
            <img src="https://i.pinimg.com/originals/6f/3d/0c/6f3d0ce13bf002ae6efc18b50fb910f8.jpg" width="300px" className="card-image" />
            <div className="card-right">
                <div className="card-location-description">
                    <img src={location} width="15px" className="location" />
                    <p className="card-location">Costa Rica</p>
                    <a href="https://goo.gl/maps/oeAmUTCDCFLuLeo58" target="_blank">View on Google Maps</a></div>

                <h2>Playa Samara</h2>
                <h3>6 Aug, 2022 - 20 Aug, 2022</h3>
                <p className="card-description">My firs solo trip! During this trip, I lived with Costa Rican family (tica), learned Spanish for three hours almost everyday, explored the beach and the surroundings, as well as met some interesting people!</p>
            </div>

        </div>
    )
}