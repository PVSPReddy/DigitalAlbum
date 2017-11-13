using System;
using DigitalAlbum;
using DigitalAlbum.Droid;
using Xamarin.Forms;
using Xamarin.Forms.Platform.Android;

[assembly: ExportRenderer(typeof(GradientStackLayout), typeof(GradientStackLayoutRender))]
namespace DigitalAlbum.Droid
{
    public class GradientStackLayoutRender : VisualElementRenderer<StackLayout>
    {
        public GradientStackLayoutRender() { }

        private Color StartColor { get; set; }
        private Color EndColor { get; set; }

        protected override void OnElementChanged(ElementChangedEventArgs<StackLayout> e)
        {
            base.OnElementChanged(e);

            if (e.OldElement != null || Element == null)
            {
                return;
            }
            try
            {
                var stack = e.NewElement as GradientStackLayout;
                this.StartColor = stack.StartColor;
                this.EndColor = stack.EndColor;
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }

        protected override void DispatchDraw(global::Android.Graphics.Canvas canvas)
        {
            try
            {
                var gradient = new Android.Graphics.LinearGradient(0, 0, 0, Height, this.StartColor.ToAndroid(), this.EndColor.ToAndroid(), Android.Graphics.Shader.TileMode.Mirror);
                var paint = new Android.Graphics.Paint()
                {
                    Dither = true,
                };
                paint.SetShader(gradient);
                canvas.DrawPaint(paint);

            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
            base.DispatchDraw(canvas);
        }

        protected override void OnElementPropertyChanged(object sender, System.ComponentModel.PropertyChangedEventArgs e)
        {
            base.OnElementPropertyChanged(sender, e);
        }
    }
}

