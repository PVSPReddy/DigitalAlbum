using System;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public class CustomBoxView : BoxView
    {
        public CustomBoxView() { }
        public static readonly BindableProperty CornerRadiusProperty = BindableProperty.Create("CornerRadius", typeof(double), typeof(CustomBoxView), 0.0);
        public double CornerRadius
        {
            get { return (double)GetValue(CornerRadiusProperty); }
            set { SetValue(CornerRadiusProperty, value); }
        }
    }
}

