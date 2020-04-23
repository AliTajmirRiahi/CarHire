

using System;
using System.Globalization;
using System.Text;
using System.Text.RegularExpressions;
namespace Util
{
    public static class Utility
    {
        public static string ConvertDateToPersianWithTime(DateTime date, bool Recursive, String BetweenChar = "-")
        {
            PersianCalendar P = new PersianCalendar();
            string str = ConvertDateToPersian(date, Recursive, BetweenChar) + " " + (date.Hour >= 10 ? "" : "0") + date.Hour + ":" + (date.Minute >= 10 ? "" : "0") + date.Minute + (date.Hour >= 12 ? " ب.ظ" : " ق.ظ");
            return str;
        }
        public static string ConvertDateToPersian(DateTime date, bool Recursive = false, String BetweenChar = "-")
        {
            PersianCalendar P = new PersianCalendar();
            string str = "" + (P.GetDayOfMonth(date) >= 10 ? "" : "0") + P.GetDayOfMonth(date) + BetweenChar + (P.GetMonth(date) >= 10 ? "" : "0") + P.GetMonth(date) + BetweenChar + P.GetYear(date);
            if (Recursive)
            {
                String temp = "";
                temp = str.Substring(str.LastIndexOf(BetweenChar) + 1);
                temp += BetweenChar;
                temp += str.Substring(str.IndexOf(BetweenChar) + 1, 2);
                temp += BetweenChar;
                temp += str.Substring(0, 2);
                str = temp;
            }
            return str;
        }
    }

}