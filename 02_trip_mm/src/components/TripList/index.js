import React, { useEffect, useState } from "react";

export default function TripList() {
  let [url, setUrl] = useState("http://localhost:3001/trips");
  let [trips, setTrips] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTrips(data);
      });
  }, [url]);
  return (
    <div>
      <button
        type="button"
        onClick={() => setUrl("http://localhost:3001/trips")}
      >
        All Trips
      </button>
      <button
        type="button"
        onClick={() => setUrl("http://localhost:3001/trips?location=Myanmar")}
      >
        Trips in Myanmar
      </button>
      <button
        type="button"
        onClick={() => setUrl("http://localhost:3001/trips?location=Thailand")}
      >
        Trips in Thailand
      </button>

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
