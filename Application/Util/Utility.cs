
using System;
using System.Text;
using System.Text.RegularExpressions;

public static class Utility
{
    public static bool IsPhoneNumber(string text)
    {
        Regex tel2Regex = new Regex(@"^[0-9]{11}$");
        return tel2Regex.IsMatch(text);
    }
    public static bool IsEmail(string text)
    {
        var Base64 = @"Xig/KCIpKCIuKz8oPzwhXFwpIkApfCgoWzAtOWEtel0oKFwuKD8hXC4pKXxbLSEjXCQlJidcK
                        lwrLz1cP1xeYFx7XH1cfH5cd10pKikoPzw9WzAtOWEtel0pQCkpKD8oXFspKFxbKFxkezEsM31
                        cLil7M31cZHsxLDN9XF0pfCgoWzAtOWEtel1bLVx3XSpbMC05YS16XSpcLikrW2EtejAtOV1bXC
                        1hLXowLTldezAsMjJ9W2EtejAtOV0pKSQ=";
        byte[] data = Convert.FromBase64String(Base64);
        string regexTemplate = Encoding.UTF8.GetString(data);
        Regex emailRegex = new Regex(regexTemplate);
        return emailRegex.IsMatch(text);
    }
}
