import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoAPIoptions } from "../../api";

const Search = (onSearchChange) => {
  const [Search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
        geoAPIoptions
      );

      const result = await response.json();
      return {
        options: result.data.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name}, ${city.countryCode}`,
        })),
      };
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncPaginate
      placeholder="Search for cities.."
      debounceTimeout={600}
      value={Search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      options={[]}
    ></AsyncPaginate>
  );
};

export default Search;
