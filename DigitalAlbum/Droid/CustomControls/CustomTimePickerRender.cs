using System;

using Xamarin.Forms;
using DigitalAlbum;
using DigitalAlbum.Droid;
using Xamarin.Forms.Platform.Android;
using Graphicss = Android.Graphics;
using Android.Graphics.Drawables;
using Android.Text;
using Android.Content.Res;
using Android.Util;

[assembly: ExportRenderer(typeof(CustomTimePicker), typeof(CustomTimePickerRender))]
namespace DigitalAlbum.Droid
{
    public class CustomTimePickerRender : TimePickerRenderer
    {
        public CustomTimePickerRender() { }

        protected override void OnElementChanged(ElementChangedEventArgs<TimePicker> e)
        {
            base.OnElementChanged(e);


            try
            {
                CustomTimePicker element = Element as CustomTimePicker;
                if (e.NewElement != null)
                {
                    element = Element as CustomTimePicker;
                }
                else
                {
                    element = e.OldElement as CustomTimePicker;
                }

                if (Control != null)
                {
                    GradientDrawable gd = new GradientDrawable();
                    //gd.SetCornerRadius(45); // increase or decrease to changes the corner look
                    gd.SetColor(global::Android.Graphics.Color.Transparent);
                    //gd.SetStroke(2, global::Android.Graphics.Color.Gray);
                    this.Control.SetBackgroundDrawable(gd);
                    this.Control.SetRawInputType(InputTypes.TextFlagNoSuggestions);
                    if (!string.IsNullOrWhiteSpace(element.EnterText))
                    {
                        Control.Text = element.EnterText;
                    }
                    Control.SetHintTextColor(ColorStateList.ValueOf(global::Android.Graphics.Color.Black));//for placeholder
                                                                                                           //this.Control.InputType = InputTypes.TextVariationPassword;
                    if (element.CustomFontSize != 0.0)
                    {
                        Control.SetTextSize(ComplexUnitType.Dip, element.CustomFontSize);
                        //Control.SetTextSize(Android.Util.ComplexUnitType.Dip, element.CustomFontSize);
                    }
                    if (element.CustomFontFamily == "Avenir65")
                    {
                        Graphicss.Typeface font = Graphicss.Typeface.CreateFromAsset(Forms.Context.Assets, "AvenirLTStd-Medium.ttf");
                        Control.Typeface = font;
                    }
                    else if (element.CustomFontFamily == "Avenir45")
                    {
                        Graphicss.Typeface font = Graphicss.Typeface.CreateFromAsset(Forms.Context.Assets, "AvenirLTStd-Book.ttf");
                        Control.Typeface = font;
                    }
                    else
                    {
                    }
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }
    }
}

