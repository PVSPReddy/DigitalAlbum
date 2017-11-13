using System;
using DigitalAlbum;
using DigitalAlbum.iOS;
using Xamarin.Forms;
using Xamarin.Forms.Platform.iOS;

[assembly: ExportRenderer(typeof(CustomButton), typeof(CustomButtonRender))]
namespace DigitalAlbum.iOS
{
    public class CustomButtonRender : ButtonRenderer
    {
        public CustomButtonRender() { }

        protected override void OnElementChanged(ElementChangedEventArgs<Button> e)
        {
            base.OnElementChanged(e);

            try
            {
                CustomButton element = Element as CustomButton;
                if (e.NewElement != null)
                {
                    element = Element as CustomButton;
                }
                else
                {
                    element = e.OldElement as CustomButton;
                }

                if (Control != null)
                {
                    Control.ExclusiveTouch = true;
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }

        protected override void OnElementPropertyChanged(object sender, System.ComponentModel.PropertyChangedEventArgs e)
        {
            base.OnElementPropertyChanged(sender, e);

            try
            {
                CustomButton element = Element as CustomButton;
                if (Control != null)
                {
                    Control.ExclusiveTouch = true;
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }
    }
}

