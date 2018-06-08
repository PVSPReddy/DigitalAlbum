using System;

using Xamarin.Forms;
using DigitalAlbum;
using DigitalAlbum.iOS;
using Xamarin.Forms.Platform.iOS;
using UIKit;

[assembly: ExportRenderer(typeof(CustomTimePicker), typeof(CustomTimePickerRender))]
namespace DigitalAlbum.iOS
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
                    //var element = Element as CustomTimePicker;
                    //var textGiven = element.EnterText;
                    Control.BorderStyle = UITextBorderStyle.None;
                    Control.AdjustsFontSizeToFitWidth = true;
                    Control.Layer.CornerRadius = 10;
                    Control.ExclusiveTouch = true;
                    //Control.Text = textGiven;
                    Control.TextColor = UIColor.Black;
                    if (element.CustomFontFamily == "Avenir65")
                    {
                        Control.Font = UIFont.FromName("Avenir LT Std 65 Medium.ttf", 17f);
                    }
                    else if (element.CustomFontFamily == "Avenir45")
                    {
                        Control.Font = UIFont.FromName("Avenir LT Std 45 Book.ttf", 17f);
                    }
                    else
                    {
                    }
                    if (element.CustomFontSize != 0)
                    {
                        UIFont font = Control.Font.WithSize(element.CustomFontSize);
                        Control.Font = font;
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

        protected override void OnElementPropertyChanged(object sender, System.ComponentModel.PropertyChangedEventArgs e)
        {
            base.OnElementPropertyChanged(sender, e);
            try
            {
                CustomTimePicker element = Element as CustomTimePicker;
                if (Control != null)
                {
                    //var element = Element as CustomTimePicker;
                    //var textGiven = element.EnterText;
                    Control.BorderStyle = UITextBorderStyle.None;
                    Control.AdjustsFontSizeToFitWidth = true;
                    Control.Layer.CornerRadius = 10;
                    Control.ExclusiveTouch = true;
                    //Control.Text = textGiven;
                    Control.TextColor = UIColor.Black;
                    if (element.CustomFontFamily == "Avenir65")
                    {
                        Control.Font = UIFont.FromName("Avenir LT Std 65 Medium.ttf", 17f);
                    }
                    else if (element.CustomFontFamily == "Avenir45")
                    {
                        Control.Font = UIFont.FromName("Avenir LT Std 45 Book.ttf", 17f);
                    }
                    else
                    {
                    }
                    if (element.CustomFontSize != 0)
                    {
                        UIFont font = Control.Font.WithSize(element.CustomFontSize);
                        Control.Font = font;
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

