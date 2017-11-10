using System;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public class CustomLabel : ContentPage
    {
        public CustomLabel() { }

        public static readonly BindableProperty CustomFontFamilyProperty = BindableProperty.Create(propertyName: "CustomFontFamily", returnType: typeof(string), declaringType: typeof(CustomEntry), defaultValue: default(string));
        public string CustomFontFamily { get; set; }

        public static readonly BindableProperty CustomFontColorProperty = BindableProperty.Create(propertyName: "CustomFontSize", returnType: typeof(string), declaringType: typeof(CustomEntry), defaultValue: "#282828");
        public string CustomFontColor { get; set; }

        public static readonly BindableProperty SetHtmlTextProperty = BindableProperty.Create(propertyName: "IsHTMLText", returnType: typeof(bool), declaringType: typeof(CustomEntry), defaultValue: false);
        public bool IsHTMLText { get; set; }


    }
}

