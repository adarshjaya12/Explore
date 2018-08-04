using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using APIClient.DTO;
using Explore.BusinessObj.Implementation.Model;
using Explore.BusinessObj.Interface.Service;
using Microsoft.AspNetCore.Mvc;

namespace Travel.Controllers
{
    public class HomeController : Controller
    {
        IGoogleService GoogleService { get; set; }
        public HomeController(IGoogleService googleService)
        {
            GoogleService = googleService;
        }
        [HttpGet]
        public JsonResult GetAutoFillCities(string input)
        {
            var AutoCompleteresult= GoogleService.GetAutoComplete(input);
            List<AutoCompleteJson> jsonList = new List<AutoCompleteJson>();
            foreach (var item in AutoCompleteresult.predictions)
            {
                AutoCompleteJson result = new AutoCompleteJson();
                result.description = item.description;
                result.place_id = item.place_id;
                jsonList.Add(result);
            }
            return new JsonResult(jsonList);
        }

        [HttpGet]
        public JsonResult GetLatAndLong(string place_id)
        {
            var placeObject = GoogleService.GetPlaceById(place_id);
            Coordinates coordinates = new Coordinates();
            coordinates.Latitude = placeObject.result.geometry.location.lat;
            coordinates.Longitude = placeObject.result.geometry.location.lng;
            return new JsonResult(coordinates);
        }

        [HttpGet]
        public JsonResult GetGeoLocation(double latitude, double longitude)
        {
            var cityModel = GoogleService.GetCityModel(latitude, longitude);
            var cityName = string.Format("{0}, {1}, {2}", cityModel.City, cityModel.State, cityModel.Country);
            Dictionary<string, string> json = new Dictionary<string, string>();
            json.Add("placeId", cityModel.PlaceId);
            json.Add("city", cityName);
            return new JsonResult(json);
        }
        [HttpGet]
        public ActionResult Submit(double latitude, double longitude)
        {
            return null;
        }
        public IActionResult Index()
        {
            return View();
        }
    }
}
