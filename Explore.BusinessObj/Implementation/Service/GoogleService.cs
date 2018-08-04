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
    public class GoogleService : IGoogleService
    {
        IMapService MapAPI { get; set; }
        IAPIService APIService { get; set; }
        INearBySearchService NearBySearch { get; set; }
        public GoogleService(IMapService mapAPI, INearBySearchService nearBySearch, IAPIService aPIService)
        {
            MapAPI = mapAPI;
            APIService = aPIService;
            NearBySearch = nearBySearch;
        }

        public AutoComplete GetAutoComplete(string text)
        {
            return MapAPI.GetAutoComplete(text);
        }

        public Place GetPlaceById(string text)
        {
            return MapAPI.GetLatLongBasedOnPlaceId(text);
        }

        public GeoCoding GetByAddress(string address)
        {
            return MapAPI.GetLatAndLong(address);
        }

        public GeoCoding GetByLatLong(double lat, double longi)
        {
            return MapAPI.GetGeoLocation(lat, longi);
        }

        public List<NearBySearchModel> GetSearchByLatLong(double lat, double longi)
        {
            string latLong = lat.ToString() + longi.ToString();
            return NearBySearch.GetNearBySearchByTypes(latLong);
        }

        public CityModel GetCityModel(double lat, double longi)
        {
            return MapAPI.GetCityModelFromGeo(lat,longi);
        }
    }
}
