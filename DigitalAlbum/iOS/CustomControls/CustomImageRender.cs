using System;
using DigitalAlbum;
using DigitalAlbum.iOS;
using Xamarin.Forms;
using Xamarin.Forms.Platform.iOS;

[assembly: ExportRenderer(typeof(CustomImage), typeof(CustomImageRender))]
namespace DigitalAlbum.iOS
{
    public class CustomImageRender : ImageRenderer
    {
        CustomImage element = new CustomImage();
        public CustomImageRender()
        {

        }

        protected override void OnElementChanged(ElementChangedEventArgs<Image> e)
        {
            base.OnElementChanged(e);

            if (e.NewElement != null)
            {
                element = Element as CustomImage;
            }
            else
            {
                element = e.OldElement as CustomImage;
            }

            if (e.OldElement != null || Element == null)
            {
                return;
            }

            CreateCircle();
        }

        protected override void OnElementPropertyChanged(object sender, System.ComponentModel.PropertyChangedEventArgs e)
        {
            base.OnElementPropertyChanged(sender, e);

            if (e.PropertyName == VisualElement.HeightProperty.PropertyName || e.PropertyName == VisualElement.WidthProperty.PropertyName)
            {
                CreateCircle();
            }
        }

        private void CreateCircle()
        {
            try
            {
                double min = Math.Min(Element.Width, Element.Height);
                Control.Layer.CornerRadius = (float)(min / 2.0);
                Control.Layer.MasksToBounds = false;
                Control.Layer.BorderColor = Color.White.ToCGColor();
                nfloat borderWidth = element.BorderWidth;
                Control.Layer.BorderWidth = borderWidth;
                Control.ClipsToBounds = true;
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }
    }
}

