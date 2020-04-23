using System;

namespace Domain
{
    public class BaseInfo
    {
        public BaseInfo()
        {
            CanDelete = true;
            // Sub = Guid.Empty;
        }
        public Guid Id { get; set; }
        public string Value { get; set; }
        public bool CanDelete { get; set; }
        // public Guid Sub { get; set; }
    }
}