using System;

namespace Domain
{
    public class Photo
    {
        public Photo()
        {
            this.Path = "";
            this.Length = 0;
            this.ContentType = "";
        }
        public Guid Id { get; set; }
        public string Path { get; set; }
        public long Length { get; set; }
        public string ContentType { get; set; }
        public virtual AppUser AppUser { get; set; }
    }
}