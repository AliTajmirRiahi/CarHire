
using System;
using System.IO;
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
    public static bool IsAcceptedMime(string mime)
    {
        var Accept = "image/jpeg,image/png,image/gif";
        return Accept.Contains(mime);
    }
    public static string CheckAndCreateDirectory(string SubFolder)
    {
        var absolute = "C:/Users/Programmer/Desktop/CarHire/client-app/public";
        var path = "/host";
        if (!Directory.Exists(absolute + path))
        {
            Directory.CreateDirectory(absolute + path);
        }
        path = path + "/";
        if (!Directory.Exists(absolute + path + DateTime.Now.Year))
        {
            Directory.CreateDirectory(absolute + path + DateTime.Now.Year);
        }
        path += DateTime.Now.Year + "/";
        if (!Directory.Exists(absolute + path + DateTime.Now.Month))
        {
            Directory.CreateDirectory(absolute + path + DateTime.Now.Month);
        }
        path += DateTime.Now.Month + "/";
        if (!Directory.Exists(absolute + path + SubFolder))
        {
            Directory.CreateDirectory(absolute + path + SubFolder);
        }
        path += SubFolder + "/";
        return path;
    }
    public static string GenerateRandNumber()
    {
        Random r = new Random();
        return r.Next(900000000, 999999999).ToString() + DateTime.Now.Minute + DateTime.Now.Millisecond;
    }
}
