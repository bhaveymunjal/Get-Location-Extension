import { useEffect, useState } from "react";
import '../style.css';
import LoadingComponent from "./LoadingComponent";

export const FetchLocation = ({ ip ,apiKey}) => {
  const [city, setCity] = useState<string | null>(localStorage.getItem('city') || null);
  const [country, setCountry] = useState<string | null>(localStorage.getItem('country') || null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Save city and country to localStorage when they change
    if (city) {
      localStorage.setItem('city', city);
    }
    if (country) {
      localStorage.setItem('country', country);
    }
  }, [city, country]);

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

  // Function to clear local storage, set city and country to null
  function clearLocalStorage() {
    localStorage.removeItem('city');
    localStorage.removeItem('country');
    setCity(null);
    setCountry(null);
  }

  return (
    <div className="">
      {!loading && (<button
        onClick={() => fetchGeolocation(ip)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-lg"
      >
        Get My Location
      </button>
      )}
      {loading && (
        <div className="ml-4">
          <LoadingComponent />
        </div>
      )}

      {!loading && city && country && (
        <div className="ml-4 mt-4">
          <h1 className="text-lg font-semibold">Your City: {city}</h1>
          <h1 className="text-lg font-semibold">Your Country: {country}</h1>
          {/* Button to clear local storage */}
          <button
            onClick={clearLocalStorage}
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-lg"
          >
            Clear Data
          </button>
        </div>
      )}
    </div>
  );
};
