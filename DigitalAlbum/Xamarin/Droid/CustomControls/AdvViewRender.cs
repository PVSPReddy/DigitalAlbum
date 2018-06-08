using System;
using DigitalAlbum;
using DigitalAlbum.Droid;
using Xamarin.Forms;
using Xamarin.Forms.Platform.Android;

[assembly: ExportRenderer(typeof(AdvView), typeof(AdvViewRender))]
namespace DigitalAlbum.Droid
{
    public class AdvViewRender : ViewRenderer
    {
        public AdvViewRender() { }

        protected override void OnElementChanged(ElementChangedEventArgs<View> e)
        {
            base.OnElementChanged(e);
            /*  add package google.gms.ads
            if (e.OldElement == null)
            {
                var adView = new AdView(Context);

                switch ((Element as AdvView).Size)
                {
                    case AdvView.Sizes.Standardbanner:
                        adView.AdSize = AdSize.Banner;
                        break;
                    case AdvView.Sizes.LargeBanner:
                        adView.AdSize = AdSize.LargeBanner;
                        break;
                    case AdvView.Sizes.MediumRectangle:
                        adView.AdSize = AdSize.MediumRectangle;
                        break;
                    case AdvView.Sizes.FullBanner:
                        adView.AdSize = AdSize.FullBanner;
                        break;
                    case AdvView.Sizes.Leaderboard:
                        adView.AdSize = AdSize.Leaderboard;
                        break;
                    case AdvView.Sizes.SmartBannerPortrait:
                        adView.AdSize = AdSize.SmartBanner;
                        break;
                    default:
                        adView.AdSize = AdSize.Banner;
                        break;
                }

                // TODO: change this id to your admob id
                //adView.AdUnitId = "ca-app-pub-3940256099942544/6300978111";
                adView.AdUnitId = "ca-app-pub-4755254281656446/8729537817";

                var requestbuilder = new AdRequest.Builder();
                adView.LoadAd(requestbuilder.Build());

                SetNativeControl(adView);
                */
        }
    }
}

