using System;
using DigitalAlbum;
using DigitalAlbum.Droid;
using Xamarin.Forms;
using Xamarin.Forms.Platform.Android;

[assembly: ExportRenderer(typeof(CustomButton), typeof(CustomButtonRender))]
namespace DigitalAlbum.Droid
{
    public class CustomButtonRender : ButtonRenderer
    {
        public CustomButtonRender() { }

        protected override void OnElementChanged(ElementChangedEventArgs<Button> e)
        {
            base.OnElementChanged(e);
            var button = this.Control;
            button.SetAllCaps(false);
        }
    }
}

