import React, { useEffect, useState, useTransition } from "react";
import axios from "axios";
import Loder from "../components/UI/Loder";
import CountryCard from "../components/UI/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [isPending, startTransition] = useTransition();

  const [search, setSearch] = useState("");       // 
  const [filter, setFilter] = useState("all");    // 


  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags"
        );
        setCountries(res.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    });
  }, []);


  if (isPending) return <Loder />;

  const filteredCountries = countries
    .filter((curcountry) => {
      if (search) {
        return curcountry.name.common
          .toLowerCase()
          .includes(search.toLowerCase());
      }
      return true;
    })
    .filter((curcountry) => {
      if (filter === "all") return true;
      return curcountry.region === filter;
    });

  return (
    <>
      {/* Search and Filter */}
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      {/* Country Cards */}
      <section className="country-section">
        <ul className="grid grid-four-cols">
          {filteredCountries.map((curcountry, index) => (
            <CountryCard key={index} country={curcountry} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Country;
