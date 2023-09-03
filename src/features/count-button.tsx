import { useEffect, useState } from "react";
import '../style.css';
import LoadingComponent from "./LoadingComponent";

export const CountButton = ({ ip }) => {
  const apiKey = '1be08ad3207623';
  const [city, setCity] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function fetchGeolocation(ipAddress: string) {
    setLoading(true);
    fetch(`https://ipinfo.io/${ipAddress}?token=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setCity(data.city);
        setCountry(data.country);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching geolocation:', error);
        setLoading(false);
      });
  }

  return (
    <div className="">
      <button
        onClick={() => fetchGeolocation(ip)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-lg"
      >
        Get My Location
      </button>

      {loading && (
        <div className="ml-4">
          <LoadingComponent />
        </div>
      )}

      {!loading && city && country && (
        <div className="ml-4">
          <h1 className="text-lg font-semibold">Your City: {city}</h1>
          <h1 className="text-lg font-semibold">Your Country: {country}</h1>
        </div>
      )}
    </div>
  );
};
