using APIClient.DTO;
using Explore.BusinessObj.Implementation.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Explore.BusinessObj.Interface.Service
{
    public interface IGoogleService
    {
        AutoComplete GetAutoComplete(string text);

        Place GetPlaceById(string text);

        GeoCoding GetByAddress(string address);

        GeoCoding GetByLatLong(double lat, double longi);

        CityModel GetCityModel(double lat, double longi);

        List<NearBySearchModel> GetSearchByLatLong(double lat, double longi);

    }
}
