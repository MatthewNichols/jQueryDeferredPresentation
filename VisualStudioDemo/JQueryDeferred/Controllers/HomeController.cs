using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;

namespace JQueryDeferred.Controllers
{
    public class HomeController : Controller
    {
        #region Action Methods

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Consuming()
        {
            return View();
        }

        public ActionResult Wrapping()
        {
            return View();
        }

        public ActionResult Order()
        {
            return View();
        }

        public ActionResult When()
        {
            return View();
        }

        #endregion

        /// <summary>
        /// This method goes to sleep for 10 seconds and returns some JSON.  
        /// This is not good code except in a demo!
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public JsonResult DelayService()
        {
            //Warning:  This is only a demo....Don't do this in real life!
            Thread.Sleep(new TimeSpan(0, 0, 10));

            //Return some silly JSON
            return Json(new
            {
                status = "10 seconds passed",
                secretCode = "1234"
            });
        }
    }
}
