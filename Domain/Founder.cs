using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Domain
{
    public class Founder
    {
        public Founder()
        {
            this.rFirstName = "";
            this.rLastName = "";
            this.rSub = "";
            this.rTitle = "";
            this.rContactMail = "";
            this.rEnable = true;
            this.rCreate = DateTime.Now;
            this.rExpire = DateTime.Now.AddMonths(1);
        }

        public Guid Id { get; set; }
        public string rFirstName { get; set; }
        public string rLastName { get; set; }
        public string rSub { get; set; }
        public string rTitle { get; set; }
        public string rContactMail { get; set; }
        public bool rEnable { get; set; }
        public DateTime rCreate { get; set; }
        public DateTime rExpire { get; set; }
        public virtual AppUser AppUser { get; set; }
        public string AppUserId { get; set; }

    }
}