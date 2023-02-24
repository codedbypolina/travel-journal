import location from "../images/location.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} className="card-image" />
            <div className="card-right">
                <div className="card-location-description">
                    <img src={location} width="15px" className="location" />
                    <p className="card-location">{props.item.location}</p>
                    <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a></div>

                <h2>{props.item.title}</h2>
                <h3>{props.item.startDate} - {props.item.endDate}</h3>
                <p className="card-description">{props.item.description}</p>
            </div>

        </div>
    )
}