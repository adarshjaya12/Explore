using APIClient.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Explore.BusinessObj.Implementation.Model
{
    public class NearBySearchModel
    {
        public string Type { get; set; }
        public List<NearBySearchResult> SearchResult { get; set; }
    }
}
