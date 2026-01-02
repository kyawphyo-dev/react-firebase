import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./index.css";

export default function TripList() {
  let [url, setUrl] = useState("http://localhost:3001/trips");
  let { data: trips, loading, error } = useFetch(url);

  return (
    <div className="trip-list">
      {error && <p className="error">{error}</p>}
      {!error && (
        <div className="trip-filters">
          {loading && <p className="loading">Loading trips...</p>}
          <button onClick={() => setUrl("http://localhost:3001/trips")}>
            All Trips
          </button>

          <button
            onClick={() =>
              setUrl("http://localhost:3001/trips?location=Myanmar")
            }
          >
            Trips in Myanmar
          </button>

          <button
            onClick={() =>
              setUrl("http://localhost:3001/trips?location=Thailand")
            }
          >
            Trips in Thailand
          </button>
        </div>
      )}

      {!error && (
        <div className="trip-grid">
          {trips &&
            trips.map((trip) => (
              <div className="trip-card" key={trip.id}>
                <h2>{trip.name}</h2>
                <p>Price: {trip.fee} THB</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
