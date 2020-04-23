using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Util;

namespace Domain
{
    public class Founder
    {
        public Founder()
        {
            rFirstName = "";
            rLastName = "";
            rSub = "";
            rTitle = "";
            rContactMail = "";
            rEnable = true;
            rCreate = DateTime.Now;
            rExpire = DateTime.Now.AddMonths(1);
            _rCreateJalali = Utility.ConvertDateToPersian(rCreate);
            _rExpireJalali = Utility.ConvertDateToPersian(rExpire);
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
        private string _rCreateJalali = "";
        public string rCreateJalali
        {
            get
            {
                _rCreateJalali = Utility.ConvertDateToPersian(rCreate);
                return _rCreateJalali;
            }
        }
        private string _rExpireJalali = "";
        public string rExpireJalali
        {
            get
            {
                _rExpireJalali = Utility.ConvertDateToPersian(rExpire);
                return _rExpireJalali;
            }
        }
        public virtual AppUser AppUser { get; set; }
        public string AppUserId { get; set; }

    }
}