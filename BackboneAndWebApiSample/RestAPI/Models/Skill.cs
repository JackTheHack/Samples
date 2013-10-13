using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RestAPI.Models
{
    /// <summary>
    /// Represents skill instance.
    /// </summary>
    public class Skill
    {
        [Required]
        public string title { get; set; }

        [Required]
        public string description { get; set; }

        public int id { get; set; }
    }
}