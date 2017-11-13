using System;
using DigitalAlbum;
using DigitalAlbum.iOS;
using UIKit;
using Xamarin.Forms;
using Xamarin.Forms.Platform.iOS;

[assembly: ExportRenderer(typeof(CustomWebView), typeof(CustomWebViewRender))]
namespace DigitalAlbum.iOS
{
    public class CustomWebViewRender : WebViewRenderer
    {
        public CustomWebViewRender() { }

        protected override void OnElementChanged(VisualElementChangedEventArgs e)
        {
            base.OnElementChanged(e);
            try
            {
                this.Opaque = false;
                this.BackgroundColor = UIColor.Clear;

            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }
    }
}

