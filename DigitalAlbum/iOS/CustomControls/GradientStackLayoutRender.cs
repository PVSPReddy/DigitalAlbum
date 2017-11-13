using System;
using CoreAnimation;
using CoreGraphics;
using DigitalAlbum;
using DigitalAlbum.iOS;
using Xamarin.Forms;
using Xamarin.Forms.Platform.iOS;

[assembly: ExportRenderer(typeof(GradientStackLayout), typeof(GradientStackLayoutRender))]
namespace DigitalAlbum.iOS
{
    public class GradientStackLayoutRender : VisualElementRenderer<StackLayout>
    {
        public GradientStackLayoutRender() { }

        public override void Draw(CGRect rect)
        {
            base.Draw(rect);
            GradientStackLayout stack = (GradientStackLayout)this.Element;
            CGColor startColor = stack.StartColor.ToCGColor();
            CGColor endColor = stack.EndColor.ToCGColor();
            var gradientLayer = new CAGradientLayer();
            gradientLayer.Frame = rect;
            gradientLayer.Colors = new CGColor[] { startColor, endColor };
            NativeView.Layer.InsertSublayer(gradientLayer, 0);
        }

    }
}

