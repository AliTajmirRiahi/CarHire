using Application.Founders;
using Application.Photos;

namespace Application.User
{
    public class User
    {
        public string Token { get; set; }
        public string aFirstName { get; set; }
        public string aLastName { get; set; }
        public string Username { get; set; }
        public string Image { get; set; }
        public FounderDto Founder { get; set; }
        public PhotoDto Photo { get; set; }
    }
}