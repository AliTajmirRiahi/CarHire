using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Domain
{
    public class Renter
    {
        public Guid Id { get; set; }
        public string rName { get; set; }
        public string rSub { get; set; }
        public string rTitle { get; set; }
        public string rContactMail { get; set; }
        public bool rEnable { get; set; }
        public DateTime rCreate { get; set; }
        public DateTime rExpire { get; set; }

    }
}