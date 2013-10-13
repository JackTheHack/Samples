using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using RestAPI.Models;

namespace RestAPI.Controllers
{
    /// <summary>
    /// Controller for the skills REST web service.
    /// </summary>
    public class SkillsController : ApiController
    {
        static List<Skill> skills = new List<Skill>();

        static int skillId = 0;

        static SkillsController()
        {
            //Test data
            skills = new List<Skill>{
                new Skill() { id = 1, title = "Skill1", description = "Desc1" },
                new Skill() { id = 2, title = "Skill2", description = "Desc2" },
                new Skill() { id = 3, title = "Skill3", description = "Desc3" }
            };
        }

        /// <summary>
        /// Returns the list of skills.
        /// </summary>        
        [HttpGet]
        public IEnumerable<Skill> GetSkills()
        {
            return skills;
        }


        /// <summary>
        /// Add skill to the collection
        /// </summary>
        /// <returns>Returns the result of the operation.</returns>
        /// <remarks>
        /// If operation was succesful returns <see cref="HttpStatusCode.OK"/>, otherwise <see cref="HttpStatusCode.ExpectationFailed"/>.
        /// </remarks>
        [HttpPut]
        public HttpResponseMessage AddSkill(Skill skill)
        {
            if (ModelState.IsValid)
            {
                skill.id = skillId++;

                skills.Add(skill);

                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            else
            {
                return new HttpResponseMessage(HttpStatusCode.ExpectationFailed);
            }
        }
    }
}
