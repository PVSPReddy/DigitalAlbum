using System;

using Xamarin.Forms;
using DigitalAlbum;
using DigitalAlbum.iOS;
using Xamarin.Forms.Platform.iOS;
using UIKit;

[assembly: ExportRenderer(typeof(CustomPicker), typeof(CustomPickerRender))]
namespace DigitalAlbum.iOS
{
    public class CustomPickerRender : PickerRenderer
    {
        public CustomPickerRender() { }


        protected override void OnElementChanged(ElementChangedEventArgs<Picker> e)
        {
            base.OnElementChanged(e);

            try
            {

                CustomPicker element = Element as CustomPicker;
                if (e.NewElement != null)
                {
                    element = Element as CustomPicker;
                }
                else
                {
                    element = e.OldElement as CustomPicker;
                }
                if (Control != null)
                {
                    //var element = Element as CustomPicker;
                    var textGiven = element.EnterText;
                    Control.BorderStyle = UITextBorderStyle.None;
                    Control.Layer.CornerRadius = 10;
                    Control.ExclusiveTouch = true;
                    //Control.AttributedPlaceholder = new NSAttributedString(element.Title, null, UIColor.Black);
                    if (!string.IsNullOrWhiteSpace(textGiven))
                    {
                        Control.Text = textGiven;
                    }
                    Control.TextColor = UIColor.Black;
                    Control.AdjustsFontSizeToFitWidth = true;
                    Control.TintColor = UIColor.Black;
                    Control.AttributedPlaceholder = new Foundation.NSAttributedString(Control.AttributedPlaceholder.Value, foregroundColor: UIColor.Black);
                    if (element.CustomFontFamily == "Avenir65")
                    {
                        Control.Font = UIFont.FromName("AvenirLTStd-Medium.ttf", 18f);
                    }
                    else if (element.CustomFontFamily == "Avenir45")
                    {
                        Control.Font = UIFont.FromName("AvenirLTStd-Book.ttf", 18f);
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
            //var element = Element as CustomPicker;
            //var textGiven = element.EnterText;
            //Control.BorderStyle = UITextBorderStyle.None;
            //Control.Layer.CornerRadius = 10;
            //Control.AttributedPlaceholder = new NSAttributedString(element.Title, null, UIColor.Black);
            //Control.Text = textGiven;
            //Control.TextColor = UIColor.Black;
            //Control.TintColor = UIColor.Black;
            //if (element.CustomFontFamily == "Avenir65")
            //{
            //  Control.Font = UIFont.FromName("AvenirLTStd-Medium.ttf", 17);
            //}
            //else if (element.CustomFontFamily == "Avenir45")
            //{
            //  Control.Font = UIFont.FromName("AvenirLTStd-Book.ttf", 17);
            //}
            //else
            //{
            //}
        }

        protected override void OnElementPropertyChanged(object sender, System.ComponentModel.PropertyChangedEventArgs e)
        {
            base.OnElementPropertyChanged(sender, e);

            try
            {

                CustomPicker element = Element as CustomPicker;
                if (Control != null)
                {
                    //var element = Element as CustomPicker;
                    var textGiven = element.EnterText;
                    Control.BorderStyle = UITextBorderStyle.None;
                    Control.Layer.CornerRadius = 10;
                    Control.ExclusiveTouch = true;
                    //Control.AttributedPlaceholder = new NSAttributedString(element.Title, null, UIColor.Black);
                    if (!string.IsNullOrWhiteSpace(textGiven))
                    {
                        //Control.Text = textGiven;
                    }
                    Control.TextColor = UIColor.Black;
                    Control.AdjustsFontSizeToFitWidth = true;
                    Control.TintColor = UIColor.Black;
                    Control.AttributedPlaceholder = new Foundation.NSAttributedString(Control.AttributedPlaceholder.Value, foregroundColor: UIColor.Black);
                    if (element.CustomFontFamily == "Avenir65")
                    {
                        Control.Font = UIFont.FromName("AvenirLTStd-Medium.ttf", 18f);
                    }
                    else if (element.CustomFontFamily == "Avenir45")
                    {
                        Control.Font = UIFont.FromName("AvenirLTStd-Book.ttf", 18f);
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

