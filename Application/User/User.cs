using Application.Founders;

namespace Application.User
{
    public class User
    {
        public string Token { get; set; }
        public string Username { get; set; }
        public string Image { get; set; }
        public FounderDto Founder { get; set; }
    }
}