using System;

namespace Application.Founders
{
    public class FounderDto
    {
        public Guid Id { get; set; }
        public string rSub { get; set; }
        public string rTitle { get; set; }
        public string rContactMail { get; set; }
        public bool rEnable { get; set; }
        public DateTime rCreate { get; set; }
        public DateTime rExpire { get; set; }
        public string rCreateJalali { get; set; }
        public string rExpireJalali { get; set; }
    }
}