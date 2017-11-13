using System;
using DigitalAlbum;
using DigitalAlbum.Droid;
using Xamarin.Forms;
using Xamarin.Forms.Platform.Android;

[assembly: ExportRenderer(typeof(CustomWebView), typeof(CustomWebViewRender))]
namespace DigitalAlbum.Droid
{
    public class CustomWebViewRender : WebViewRenderer
    {
        public CustomWebViewRender() { }

        protected override void OnElementChanged(ElementChangedEventArgs<WebView> e)
        {
            base.OnElementChanged(e);
            this.Control.SetBackgroundColor(Android.Graphics.Color.Transparent);
        }
    }
}

