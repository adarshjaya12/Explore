using System;
using System.Collections.Generic;
using System.Text;

namespace Explore.BusinessObj.Implementation.Model
{
    public class RouteDetailModel
    {
        public string PlaceID { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public int Distance { get; set; }
        
        public int Time { get; set; }

        public double Latitude { get; set; }

        public double Longitude { get; set; }

        public List<PointOfInterest> PointOfInterest { get; set; }
    }

    public class PointOfInterest
    {
        public string Name { get; set; }

        public string Photo { get; set; }

    }
}
