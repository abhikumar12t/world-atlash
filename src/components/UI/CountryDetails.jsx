import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import Loder from "./Loder";

const CountryDetails = () => {
  const { countryName } = useParams(); 
  const [country, setCountry] = useState(null);

  


  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await axios.get(
          `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
        );
        setCountry(res.data[0]);
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };

    fetchCountry();
  }, [countryName]);

  if (!country) return <Loder/>;

  return (
<>
   
    <section className="country-details">
      <div className="details-card">
        {/* Flag Image */}
        <div className="flag-box">
          <img src={country.flags.svg} alt={country.flags.alt} />
        </div>

        {/* Details */}
        <div className="info-box">
          <h2>{country.name.common}</h2>
          <p><b>Official Name:</b> {country.name.official}</p>
          <p><b>Population:</b> {country.population.toLocaleString()}</p>
          <p><b>Region:</b> {country.region}</p>
          <p><b>Subregion:</b> {country.subregion}</p>
          <p><b>Capital:</b> {country.capital?.[0]}</p>
          <p><b>Languages:</b> {country.languages && Object.values(country.languages).join(", ")}</p>
          <p><b>Timezones:</b> {country.timezones.join(", ")}</p>

          <NavLink to="/country">
            <button className="back-btn">⬅ Back</button>
          </NavLink>
        </div>
      </div>
    </section>
     </>
  );
};

export default CountryDetails;
