import { useEffect, useState } from "react";
// import axios from 'axios';
import { FetchLocation } from "~features/FetchLocation"
import logo from '../assets/icon.png';
import "~style.css"

function IndexPopup() {
  const [ipAddress, setIpAddress] = useState<string | null>(null);
  
  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
        setIpAddress(data.ip);
      })
      .catch((error) => {
        // console.error('Error fetching IP address:', error);
      });
  }, []);
  const apiKey = process.env.PLASMO_PUBLIC_SHIP_NAME;
  
  return (
    <div className="flex items-center justify-center h-[500px] w-[500px] flex-col">
      <div className="absolute top-10 flex gap-4 justify-center items-center">
        <img src={logo} alt="" width="70px" height="50px" />
        <h1 className="text-3xl   font-semibold  ">Get-Location</h1>
      </div>
      <p className="text-l font-semibold ml-4 mb-4">"Get-Location" is a handy browser extension that allows you to quickly retrieve geolocation information based on an IP address. Simply fetch your own, and get instant details about the city and country associated with it. Whether you're just curious about the origin of an IP address, "Get-Location" provides location data right from your browser.</p>
      <FetchLocation ip={ipAddress} apiKey={apiKey}/>
    </div>
  )
}

export default IndexPopup;
