using System;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public class CustomEntry : ContentPage
    {
        public CustomEntry() { }

        public static readonly BindableProperty CustomFontFamilyProperty = BindableProperty.Create(propertyName: "CustomFontFamily", returnType: typeof(string), declaringType: typeof(CustomEntry), defaultValue: default(string));
        public string CustomFontFamily { get; set; }

        public static readonly BindableProperty CustomFontSizeProperty = BindableProperty.Create(propertyName: "CustomFontSize", returnType: typeof(float), declaringType: typeof(CustomEntry), defaultValue: default(float));
        public float CustomFontSize { get; set; }

        public static readonly BindableProperty IsCustomPasswordProperty = BindableProperty.Create(propertyName: "IsCustomPassword", returnType: typeof(bool), declaringType: typeof(CustomEntry), defaultValue: false);
        public bool IsCustomPassword { get; set; }
    }
}

