using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Group_Project.Controllers
{
    
    public class AccountController : Controller
    {
        // GET: CreateAccount
        public ActionResult Index()
        {
            return View("CreateAccount");
        }

        public ActionResult Edit()
        {
            return View("EditAccount");
        }

        public ActionResult Survey()
        {
            return View("Survey");
        }
    }
}