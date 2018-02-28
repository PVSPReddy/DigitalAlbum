using System;
using System.Globalization;
using Xamarin.Forms;

namespace DigitalAlbum.ValueConverters
{
    public class TextToUniCodeSymbolCoverter : IValueConverter
    {
        public TextToUniCodeSymbolCoverter(){}

        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            //ScreenHeight = BaseContentPage.screenHeight;
            string UniCodeValue = "";
            try
            {
                //double outValue = 0.0;
                //if (double.TryParse(parameter.ToString(), out outValue))
                //{
                //    percentHeight = ((ScreenHeight * (System.Convert.ToDouble(parameter))) / 100);
                //}
                var parameters = parameter as string[];
                if(parameters[0] == SenderType.FromCSharp.ToString())
                {
                    UniCodeValue = HexToChar(parameters[1]).ToString();
                }
                else if(parameters[0] == SenderType.FromXAML.ToString())
                {
                    UniCodeValue = "&#x"+parameters[1]+";";
                }
                else
                {
                    
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
            return UniCodeValue;
        }

        public static char HexToChar(string hex)
        {
            return (char)ushort.Parse(hex, System.Globalization.NumberStyles.HexNumber);
        }

        public static string CharToHex(char c)
        {
            return ((ushort)c).ToString("X4");
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            try
            {

            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
            return null;
        }

        public enum SenderType
        {
            FromXAML,
            FromCSharp
        }
    }
}

