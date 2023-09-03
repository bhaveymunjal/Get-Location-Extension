import { useEffect, useState } from "react";
// import axios from 'axios';
import { CountButton } from "~features/count-button"

import "~style.css"

function IndexPopup() {
  const [ipAddress, setIpAddress] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const apiKey = '1be08ad3207623';
  const [loading, setLoading] = useState(false)
  
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
      <CountButton ip={ipAddress} />
    </div>
  )
}

export default IndexPopup;
