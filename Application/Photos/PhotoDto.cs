using System;

namespace Application.Photos
{
    public class PhotoDto
    {
        public Guid Id { get; set; }
        public string Path { get; set; }
        public long Length { get; set; }
        public string ContentType { get; set; }
    }
}