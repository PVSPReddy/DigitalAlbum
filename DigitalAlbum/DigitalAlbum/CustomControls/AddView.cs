using System;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public class AdvView : View
    {
        public AdvView() { }
        public enum Sizes { Standardbanner, LargeBanner, MediumRectangle, FullBanner, Leaderboard, SmartBannerPortrait }
        public Sizes Size { get; set; }
    }
}

