using APIClient.DTO;
using Explore.BusinessObj.Implementation.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Explore.BusinessObj.Interface.Service
{
    public interface IMapService
    {
        AutoComplete GetAutoComplete(string text);
        GeoCoding GetLatAndLong(string address);
        GeoCoding GetGeoLocation(double lat, double longi);
        Place GetLatLongBasedOnPlaceId(string text);
        CityModel GetCityModelFromGeo(double lat, double longi);

    }
}
