import React, { useEffect, useState } from "react";

export default function TripList() {
  let [trips, setTrips] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/trips")
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, []);
  return (
    <div>
      {trips.map((trip) => (
        <div
          key={trip.id}
          style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
        >
          <h2>{trip.name}</h2>
          <p>Price: ${trip.price}</p>
          <p>Duration: {trip.duration} days</p>
          <p>{trip.description}</p>
        </div>
      ))}
    </div>
  );
}
