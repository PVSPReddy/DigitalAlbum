using System;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public class CustomPicker : Picker
    {
        public CustomPicker() { }

        public static readonly BindableProperty EnterTextProperty = BindableProperty.Create(propertyName: "EnterText", returnType: typeof(string), declaringType: typeof(CustomPicker), defaultValue: default(string));
        public string EnterText { get; set; }

        public static readonly BindableProperty CustomFontFamilyProperty = BindableProperty.Create(propertyName: "CustomFontFamily", returnType: typeof(string), declaringType: typeof(CustomPicker), defaultValue: default(string));
        public string CustomFontFamily { get; set; }

        public static readonly BindableProperty CustomFontSizeProperty = BindableProperty.Create(propertyName: "CustomFontSize", returnType: typeof(float), declaringType: typeof(CustomPicker), defaultValue: default(float));
        public float CustomFontSize { get; set; }
    }
}

