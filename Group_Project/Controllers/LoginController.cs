using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Group_Project.Controllers
{
    public class LoginController : Controller
    {
        // GET: View
        public ActionResult Index()
        {
            return PartialView();// View();
        }

        public ActionResult Login(string username, string password)
        {
            if(username == "admin")
                return RedirectToAction("Index", "Admin");
            else
                return RedirectToAction("Index", "Home");
        }
            public ActionResult ResetPassword()
        {
            return View("ResetPassword");
        }
        
           public ActionResult ForgotPassword()
        {
            return View("ForgotPassword");
        }
    }
}