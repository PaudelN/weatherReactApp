export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const geoAPIoptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3044f0ed30mshd3ba80632e1166ap118612jsn0fb81f8c5fbf",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

// try {
//     const response = await fetch(
//       `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
//       geoAPIoptions
//     );
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }

// return{
//   options: response.formData.map((city)=>{
//     return{
//       value: `${city.latitude} ${city.longitude}`,
//       label: `${city.name}, ${city.countryCode}`,

   
//     }
//   })
// };