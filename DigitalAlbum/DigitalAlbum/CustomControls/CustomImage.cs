using System;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public class CustomImage : Image
    {
        public CustomImage() { }

        public static readonly BindableProperty ColorBorderProperty = BindableProperty.Create(propertyName: "ColorBorder", returnType: typeof(Color), declaringType: typeof(CustomImage), defaultValue: Color.Transparent);
        public Color ColorBorder { get; set; }

        public static readonly BindableProperty StringColorBorderProperty = BindableProperty.Create(propertyName: "StringColorBorder", returnType: typeof(string), declaringType: typeof(CustomImage), defaultValue: "#00FFFFFF");
        public string StringColorBorder { get; set; }

        public static readonly BindableProperty BorderWidthProperty = BindableProperty.Create(propertyName: "BorderWidth", returnType: typeof(float), declaringType: typeof(CustomImage), defaultValue: default(float));
        public float BorderWidth { get; set; }
    }
}

