using System;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public class CustomLabel : Label
    {
        public CustomLabel() { }

        //public static readonly BindableProperty CustomFontFamilyProperty = BindableProperty.Create(propertyName: "CustomFontFamily", returnType: typeof(string), declaringType: typeof(CustomEntry), defaultValue: default(string));
        //public string CustomFontFamily { get; set; }

        public static readonly BindableProperty CustomFontColorProperty = BindableProperty.Create(propertyName: "CustomFontSize", returnType: typeof(string), declaringType: typeof(CustomEntry), defaultValue: "#282828");
        public string CustomFontColor { get; set; }



        public static readonly BindableProperty SetHtmlTextProperty = BindableProperty.Create(propertyName: "IsHTMLText", returnType: typeof(bool), declaringType: typeof(CustomEntry), defaultValue: false);
        public bool IsHTMLText { get; set; }



        public static readonly BindableProperty StartIndexProperty = BindableProperty.Create(propertyName: "StartIndex", returnType: typeof(int), declaringType: typeof(CustomLabel), defaultValue: default(int));
        public int StartIndex { get; set; }

        public static readonly BindableProperty NoOfCharProperty = BindableProperty.Create(propertyName: "NoOfChar", returnType: typeof(int), declaringType: typeof(CustomLabel), defaultValue: default(int));
        public int NoOfChar { get; set; }

        public static readonly BindableProperty EndIndexProperty = BindableProperty.Create(propertyName: "EndIndex", returnType: typeof(int), declaringType: typeof(CustomLabel), defaultValue: default(int));
        public int EndIndex { get; set; }

        public static readonly BindableProperty ShallUnderLineProperty = BindableProperty.Create(propertyName: "ShallUnderLine", returnType: typeof(bool), declaringType: typeof(CustomLabel), defaultValue: false);
        public bool ShallUnderLine { get; set; }

        public static readonly BindableProperty ShallShallMoveTop = BindableProperty.Create(propertyName: "ShallShallMoveTop", returnType: typeof(bool), declaringType: typeof(CustomLabel), defaultValue: false);
        public bool ShallMoveTop { get; set; }

        public static readonly BindableProperty ShallUseHTMLOnlyProperty = BindableProperty.Create(propertyName: "ShallUseHTMLOnly", returnType: typeof(bool), declaringType: typeof(CustomLabel), defaultValue: true);
        public bool ShallUseHTMLOnly { get; set; }
    }
}

