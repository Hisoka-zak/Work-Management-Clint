import React, { useState, useEffect } from 'react';

function TestAddress() {
  const [ipDetails, setIpDetails] = useState({
    ip: '',
    country: '',
    city: '',
    isp: '',
    timezone: '',
    country_code:'',
  });

  // Function to fetch IP and other details
  const fetchIPDetails = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      setIpDetails({
        ip: data.ip,
        country: data.country_name,
        city: data.city,
        isp: data.org,
        timezone: data.timezone,
        country_code:data.country_code,
      });
    } catch (error) {
      console.error('Failed to fetch IP details:', error);
    }
  };

  // Use useEffect to fetch IP details when the component mounts
  useEffect(() => {
    fetchIPDetails();
  }, []);

  return (
    <div className='App'>
      <h1> IP Address Details</h1>
      <hr />
      <p><strong> Country:</strong> {ipDetails.country} {`(${ipDetails.country_code})`} </p>
      <p><strong> City:</strong> {ipDetails.city}</p>
      <p><strong> Timezone:</strong> {ipDetails.timezone}</p>
      <p><strong> ISP:</strong> {ipDetails.isp}</p>
    </div>
  );
}

export default TestAddress;
