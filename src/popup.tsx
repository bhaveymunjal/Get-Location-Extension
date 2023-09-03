import { useEffect, useState } from "react";
// import axios from 'axios';
import { FetchLocation } from "~features/FetchLocation"

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



  return (
    <div className="flex items-center justify-center h-[500px] w-[500px]">
      <FetchLocation ip={ipAddress} />
      <p>{process.env.PLASMO_PUBLIC_SHIP_NAME}</p>
      <p>{process.env.PLASMO_PUBLIC_SITE_URL}</p>
    </div>
  )
}

export default IndexPopup;
