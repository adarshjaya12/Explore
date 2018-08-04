using APIClient.DTO;
using APIClient.Interface;
using Explore.BusinessObj.Implementation.Model;
using Explore.BusinessObj.Interface.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Explore.BusinessObj.Implementation.Service
{
    public class MapService : IMapService
    {
        IGoogleAPI  GoogleAPI { get; set; }
        IAPIService APIService { get; set; }

        public MapService(IGoogleAPI googleAPI, IAPIService aPIService)
        {
            GoogleAPI = googleAPI;
            APIService = aPIService;
        }

        public AutoComplete GetAutoComplete(string text)
        {
            var autoUrl = string.Format(GoogleAPI.AutoComplete, text);
            var result = APIService.GetItemAsync<AutoComplete>(autoUrl).Result;
            return result;
        }

        public Place GetLatLongBasedOnPlaceId(string text)
        {
            var autoUrl = string.Format(GoogleAPI.PlaceDetail, text);
            var result = APIService.GetItemAsync<Place>(autoUrl).Result;
            return result;
        }

        public GeoCoding GetLatAndLong(string address)
        {
            var url = string.Format(GoogleAPI.GeoCoding,address);
            return APIService.GetItemAsync<GeoCoding>(url).Result;
        }

        public CityModel GetCityModelFromGeo(double lat, double longi)
        {
            CityModel model = new CityModel();
            var geoCoding = GetGeoLocation(lat, longi);
            model.City = geoCoding.results.FirstOrDefault().address_components.FirstOrDefault(ac => ac.types.Any(ty => ty == "sublocality" || ty == "sublocality_level_1" || ty == "locality"))?.long_name;
            model.State = geoCoding.results.FirstOrDefault().address_components.FirstOrDefault(ac => ac.types.Any(ty => ty == "administrative_area_level_1"))?.short_name;
            model.Country = geoCoding.results.FirstOrDefault().address_components.FirstOrDefault(ac => ac.types.Any(ty => ty == "country"))?.short_name;
            model.PlaceId = geoCoding.results.FirstOrDefault().place_id;
            return model;
        }

        public GeoCoding GetGeoLocation(double lat, double longi)
        {
            var url = string.Format(GoogleAPI.ReverseGeoCoding, lat,longi);
            var result =  APIService.GetItemAsync<GeoCoding>(url).Result;
            return result;
        }

       
    }
}
