using System;
using DigitalAlbum;
using DigitalAlbum.iOS;
using Xamarin.Forms;
using Xamarin.Forms.Platform.iOS;

[assembly: ExportRenderer(typeof(CustomBoxView), typeof(CustomBoxViewRender))]
namespace DigitalAlbum.iOS
{
    public class CustomBoxViewRender : BoxRenderer
    {
        public CustomBoxViewRender() { }


        protected override void OnElementChanged(ElementChangedEventArgs<BoxView> e)
        {
            base.OnElementChanged(e);

            if (e.OldElement != null)
            {
                return;
            }
            Layer.CornerRadius = (System.nfloat)((CustomBoxView)Element).CornerRadius;
        }


        //protected override void OnElementChanged(ElementChangedEventArgs<BoxView> e)
        //{
        //  base.OnElementChanged(e);
        //  if (Element != null)
        //  {
        //      Layer.MasksToBounds = true;
        //      UpdateCornerRadius(Element as BoxViewCircleRender);
        //  }
        //}

        //protected override void OnElementPropertyChanged(object sender, PropertyChangedEventArgs e)
        //{
        //  base.OnElementPropertyChanged(sender, e);
        //  if (e.PropertyName == RoundedBox.CornerRadiusProperty.PropertyName)
        //  {
        //      UpdateCornerRadius(Element as RoundedBox);
        //  }
        //}

        //void UpdateCornerRadius(RoundedBox box)
        //{
        //  Layer.CornerRadius = (float)box.CornerRadius;
        //}
    }
}

