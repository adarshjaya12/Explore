using System;
using System.Collections.Generic;
using System.Text;

namespace APIClient.DTO
{
    public class Place
    {
        public List<object> html_attributions { get; set; }
        public Result result { get; set; }
        public string status { get; set; }
    }
}
