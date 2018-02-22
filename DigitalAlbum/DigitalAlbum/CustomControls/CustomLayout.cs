using System;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public class CustomLayout : StackLayout
    {
        public CustomLayout() { }

        public GradientStyle GradientDirection { get; set; }
        public Color StartColor { get; set; }
        public Color EndColor { get; set; }
        public double CornerRadius { get; set; }
        public CornerRadiusReference CornerWRT { get; set; }
        public bool HasBorderColor { get; set; }
        public Color BorderColor { get; set; }
        //public 

        //public static readonly BindableProperty CornerRadiusProperty = BindableProperty.Create(propertyName: "CornerRadius", returnType: typeof(double), declaringType: typeof(CustomLayout), defaultValue: default(double));


    }

    public enum GradientStyle
    {
        None = 0,
        Horizontal = 1,
        Vertical = 2,
        Inclined = 3,
    }

    public enum CornerRadiusReference
    {
        WRTHeightRequest,
        WRTWidthRequest
        //None = 0,
        //Horizontal = 1,
        //Vertical = 2,
        //Inclined = 3,
    }
}

