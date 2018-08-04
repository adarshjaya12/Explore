using APIClient.DTO;
using Explore.BusinessObj.Implementation.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Explore.BusinessObj.Interface.Service
{
    public interface INearBySearchService
    {
        List<NearBySearchModel> GetNearBySearchByTypes(string latLong);


    }
}
