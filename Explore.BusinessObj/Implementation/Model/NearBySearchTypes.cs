using System;
using System.Collections.Generic;
using System.Text;

namespace Explore.BusinessObj.Implementation.Model
{
    public class NearBySearchTypes
    {
        private string[] entertainments = { "airport", "amusement_park", "art_gallery", "bar", "casino", "movie_theater", "museum", "night_club", "shopping_mall", "zoo" };
        private string[] foods = { "bakery", "bar", "cafe", "restaurant" };
        private string[] shoppping = { "clothing_store", "department_store", "jewelry_store", "shoe_store", "shopping_mall" };

        public Dictionary<string,List<string>> GetTypes
        {
            get
            { 
                Dictionary<string, List<string>> types = new Dictionary<string, List<string>>();
                types.Add("entertainment", new List<string>(entertainments));
                types.Add("food", new List<string>(foods));
                types.Add("shoppping", new List<string>(shoppping));
                return types;
            }
        }

        public List<string> GetByType(SearchTypes type)
        {
            if (type == SearchTypes.entertainment)
                return GetTypes["entertainment"];
            if (type == SearchTypes.food)
                return GetTypes["food"];
            return GetTypes["shoppping"];
        }
    }
}

public enum SearchTypes
{
    shoppping = 3,
    food = 1,
    entertainment = 0
}