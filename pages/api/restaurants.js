import axios from "axios";
import Error from "next/error";

// const url ="https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

// let TRIP_ADVISOR_API_KEY=process.env.TRIP_ADVISOR_API_KEY;

// // export const getPlacesData = async (type, sw, ne) => {
// //   try {
// //     const {data: { data }, } = await axios.get( `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
// //       {
// //         params: {
// //           bl_latitude: sw.lat,
// //           tr_latitude: ne.lat,
// //           bl_longitude: sw.lng,
// //           tr_longitude: ne.lng,
// //         },
// //         headers: {
// //           "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
// //           "x-rapidapi-key": TRIP_ADVISOR_API_KEY,
// //         },
// //       }
// //     );
// //     return data;
// //   } catch (error) {
// //     console.log(`Fetch data Error : ${error}`);
// //   }
// // };

// const endpointURL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

// const apiKey = process.env.TRIP_ADVISOR_API_KEY;
// const contentType = 'application/json';

// export const getPlacesData =  async (type, sw, ne) => {
//   try {
//     const response = await fetch(endpointURL, {
//       method: 'GET',
//       headers: {
//         'Content-Type': contentType,
//         'x-rapidapi-key': apiKey,
//         'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//       },
//     });

//     if (!response.ok) {
//       throw new Error('Request failed with status ' + response.status);
//     }

//     const data = await response.json();
//     console.log(`Fetch data : ${data}`); // Process the retrieved data here
//   } catch (error) {
//    console.log(`Fetch data Error : ${error}`);
//   }
// };

const baseURL = 'https://api.yelp.com/v3/businesses/search';
const apiKey = '_AYmFWWdgdtfitaLT9mEHF-iHOr7o5cacR3BFBUJoz4H5bLtrDa9WxrQPrnEbvIz78NrNzxCe3FRSNF0RbMBzlnjLok-RgogXiwQXGRnoydmoeHBsEQytFD6xG-nYHYx';

// export async function getPlacesData(location) {
  export default async function handler(req, res) {
     const { location } = req.query;
  try {
    const response = await axios.get(baseURL, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      params: {
        term: 'restaurants',
        location: location,
      },
    });

    const restaurants = response.data.businesses;
    // restaurants.forEach((restaurant) => {
    //   console.log(restaurant);
    // });
    // console.log(restaurants);
      res.status(200).json({ message: 'Updated list of restuarants', data:restaurants});

    return restaurants
  } catch (error) {
    // console.error('Error:', error);
    res.status(500).json({ message: 'Something went wrong',error:error });

  }
}




