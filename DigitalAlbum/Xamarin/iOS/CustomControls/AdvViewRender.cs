using System;
using DigitalAlbum;
using DigitalAlbum.iOS;
using UIKit;
using Xamarin.Forms;
using Xamarin.Forms.Platform.iOS;

[assembly: ExportRenderer(typeof(AdvView), typeof(AdvViewRender))]
namespace DigitalAlbum.iOS
{
    public class AdvViewRender : ViewRenderer
    {
        public AdvViewRender() { }

        protected override void OnElementChanged(ElementChangedEventArgs<View> e)
        {
            base.OnElementChanged(e);
            /* add package google.gms.ads
            if (e.OldElement == null)
            {
                BannerView bannerView = null;

                switch ((Element as AdvView).Size)
                {
                    case AdvView.Sizes.Standardbanner:
                        bannerView = new BannerView(AdSizeCons.Banner, new CGPoint(0, 0));
                        break;
                    case AdvView.Sizes.LargeBanner:
                        bannerView = new BannerView(AdSizeCons.LargeBanner, new CGPoint(0, 0));
                        break;
                    case AdvView.Sizes.MediumRectangle:
                        bannerView = new BannerView(AdSizeCons.MediumRectangle, new CGPoint(0, 0));
                        break;
                    case AdvView.Sizes.FullBanner:
                        bannerView = new BannerView(AdSizeCons.FullBanner, new CGPoint(0, 0));
                        break;
                    case AdvView.Sizes.Leaderboard:
                        bannerView = new BannerView(AdSizeCons.Leaderboard, new CGPoint(0, 0));
                        break;
                    case AdvView.Sizes.SmartBannerPortrait:
                        bannerView = new BannerView(AdSizeCons.SmartBannerPortrait, new CGPoint(0, 0));
                        break;
                    default:
                        bannerView = new BannerView(AdSizeCons.Banner, new CGPoint(0, 0));
                        break;
                }

                // TODO: change this id to your admob id
                //bannerView.AdUnitID = "ca-app-pub-3940256099942544/2934735716";
                bannerView.AdUnitID = "ca-app-pub-4755254281656446/4159737415";

                foreach (UIWindow uiWindow in UIApplication.SharedApplication.Windows)
                {
                    if (uiWindow.RootViewController != null)
                    {
                        bannerView.RootViewController = uiWindow.RootViewController;
                    }
                }

                var request = Request.GetDefaultRequest();
                bannerView.LoadRequest(request);

                SetNativeControl(bannerView);
                */
        }
    }
}

