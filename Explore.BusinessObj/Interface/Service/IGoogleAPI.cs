using System;
using System.Collections.Generic;
using System.Text;

namespace Explore.BusinessObj.Interface.Service
{
    public interface IGoogleAPI
    {
        string DistanceMatrix { get; }
        string AutoComplete { get; }
        string ReverseGeoCoding { get; }
        string GeoCoding { get; }
        string PlaceSearch { get; }
        string PlaceDetail { get; }
    }
}
