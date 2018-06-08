using System;
using Android.App;
using DigitalAlbum;
using DigitalAlbum.Droid;
using Xamarin.Forms;
using Graphicss = Android.Graphics;
using Xamarin.Forms.Platform.Android;
using Android.Views;

[assembly: ExportRenderer(typeof(CustomEditor), typeof(CustomEditorRender))]
namespace DigitalAlbum.Droid
{
    public class CustomEditorRender : EditorRenderer
    {
        public CustomEditorRender() { }

        protected override void OnElementChanged(ElementChangedEventArgs<Editor> e)
        {
            base.OnElementChanged(e);

            if (e.NewElement != null)
            {
                var element = e.NewElement as CustomEditor;
                this.Control.Hint = element.Placeholder;
                this.Control.SetHintTextColor(Graphicss.Color.Gray);
                this.Control.SetBackgroundColor(Android.Graphics.Color.White);
                this.Control.SetCursorVisible(true);
                this.Control.Background = this.Resources.GetDrawable(Resource.Drawable.withBorder);
            }

            // This line do the trick
            //          Control.FocusChange += Control_FocusChange;
        }

        void Control_FocusChange(object sender, FocusChangeEventArgs e)
        {
            if (e.HasFocus)
            {
                if (Xamarin.Forms.Application.Current.Properties.ContainsKey("count"))
                {
                    int ct = Convert.ToInt32(App.Current.Properties["count"]);
                    if (ct > 1)
                    {
                        (Forms.Context as Activity).Window.SetSoftInputMode(SoftInput.AdjustPan);
                    }
                    else
                    {
                        (Forms.Context as Activity).Window.SetSoftInputMode(SoftInput.AdjustResize);
                    }
                }

            }
            else
            {
                (Forms.Context as Activity).Window.SetSoftInputMode(SoftInput.AdjustNothing);
            }
        }

        protected override void OnElementPropertyChanged(object sender, System.ComponentModel.PropertyChangedEventArgs e)
        {
            base.OnElementPropertyChanged(sender, e);

            if (e.PropertyName == CustomEditor.PlaceholderProperty.PropertyName)
            {
                var element = this.Element as CustomEditor;
                this.Control.Hint = element.Placeholder;
                this.Control.SetHintTextColor(Graphicss.Color.ParseColor("#e5e5e5"));
            }
        }
    }
}

