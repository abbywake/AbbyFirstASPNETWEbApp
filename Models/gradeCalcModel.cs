using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AbbyFirstASPNETWEbApp.Models

{
    public class gradeCalcModel
    {
        //double check these Range thingies bc they are probs wrong 
        [Range(minimum:0, maximum:100)]
        public int assignment { get; set; }
        [Range(minimum: 0, maximum: 100)]
        public int email { get; set; }
        [Range(minimum: 0, maximum: 100)]
        public int quiz { get; set; }
        [Range(minimum: 0, maximum: 100)]
        public int exam { get; set; }
        [Range(minimum: 0, maximum: 100)]
        public int intex { get; set; }


    }
}
