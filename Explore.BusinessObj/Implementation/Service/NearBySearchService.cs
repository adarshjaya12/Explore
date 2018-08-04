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
    public class NearBySearchService : INearBySearchService
    {
        IGoogleAPI GoogleAPI { get; set; }
        IAPIService APIService { get; set; }

        NearBySearchTypes SearchTypes
        {
            get { return new NearBySearchTypes(); }
        }
        public NearBySearchService(IGoogleAPI googleAPI, IAPIService aPIService)
        {
            GoogleAPI = googleAPI;
            APIService = aPIService;
        }
        
        public List<NearBySearchModel> GetNearBySearchByTypes(string latLong)
        {
            var searchTypes = SearchTypes.GetTypes;
            string page_token = string.Empty;
            bool lastCheck = false;
            int incrementer = 1;
            List<NearBySearchResult> searchResult = new List<NearBySearchResult>();
            List<NearBySearchModel> Result = new List<NearBySearchModel>();
            foreach (var type in searchTypes )
            {
                if (incrementer <= 2)
                {
                    var url = string.Format(GoogleAPI.PlaceSearch, latLong, getTypesAsString(type.Value), page_token);
                    var result = APIService.GetItemAsync<NearBySearch>(url).Result;
                    if (result.next_page_token == null)
                        lastCheck = true;
                    if (result.status != "INVALID REQUEST") {
                        if (result.next_page_token != null)
                            page_token = result.next_page_token;
                        searchResult.AddRange(result.results);
                        incrementer += 1;
                    }
                    if (lastCheck || page_token == string.Empty)
                    {
                        NearBySearchModel model = new NearBySearchModel();
                        model.SearchResult = new List<NearBySearchResult>();
                        model.Type = type.Key;
                        model.SearchResult.AddRange(searchResult);
                        Result.Add(model);
                        incrementer = 1;
                        searchResult = new List<NearBySearchResult>();
                        continue;
                    }
                }
            }
            return Result;
        }

        private string getTypesAsString(List<string> listtypes)
        {
            return  string.Join("|", listtypes);
        }

        
    }
}
