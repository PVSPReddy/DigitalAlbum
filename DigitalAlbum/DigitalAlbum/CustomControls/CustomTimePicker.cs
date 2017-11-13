using System;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public class CustomTimePicker : TimePicker
    {
        public CustomTimePicker() { }

        public static readonly BindableProperty EnterTextProperty = BindableProperty.Create(propertyName: "EnterText", returnType: typeof(string), declaringType: typeof(CustomTimePicker), defaultValue: default(string));
        public string EnterText { get; set; }

        public static readonly BindableProperty CustomFontFamilyProperty = BindableProperty.Create(propertyName: "CustomFontFamily", returnType: typeof(string), declaringType: typeof(CustomTimePicker), defaultValue: default(string));
        public string CustomFontFamily { get; set; }

        public static readonly BindableProperty CustomFontSizeProperty = BindableProperty.Create(propertyName: "CustomFontSize", returnType: typeof(float), declaringType: typeof(CustomTimePicker), defaultValue: default(float));
        public float CustomFontSize { get; set; }
    }
}

