import location from "../images/location.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.image} className="card-image" />
            <div className="card-right">
                <div className="card-location-description">
                    <img src={location} width="15px" className="location" />
                    <p className="card-location">{props.location}</p>
                    <a href={props.maps} target="_blank">View on Google Maps</a></div>

                <h2>{props.title}</h2>
                <h3>{props.startDate} - {props.endDate}</h3>
                <p className="card-description">{props.description}</p>
            </div>

        </div>
    )
}