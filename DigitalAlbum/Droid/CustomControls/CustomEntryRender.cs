using System;

using Xamarin.Forms;
using DigitalAlbum;
using DigitalAlbum.Droid;
using Xamarin.Forms.Platform.Android;
using Android.Graphics.Drawables;
using Android.Text;
using Android.Util;
using Android.Text.Method;
using Graphicss = Android.Graphics;

[assembly: ExportRenderer(typeof(CustomEntry), typeof(CustomEntryRender))]
namespace DigitalAlbum.Droid
{
    public class CustomEntryRender : EntryRenderer
    {
        public CustomEntryRender() { }

        protected override void OnElementChanged(ElementChangedEventArgs<Entry> e)
        {
            base.OnElementChanged(e);

            try
            {
                CustomEntry element = Element as CustomEntry;
                if (e.NewElement != null)
                {
                    element = Element as CustomEntry;
                }
                else
                {
                    element = e.OldElement as CustomEntry;
                }
                if (element.IsCustomPassword == true)
                {
                    Control.TransformationMethod = PasswordTransformationMethod.Instance;
                    //Control.InputType = InputTypes.TextVariationPassword;
                    //Control.InputType = InputTypes.TextVariationPassword | InputTypes.ClassText;
                }
                if (Control != null)
                {
                    //var element = Element as CustomEntry;


                    GradientDrawable gradientDrawable = new GradientDrawable();
                    gradientDrawable.SetColor(global::Android.Graphics.Color.Transparent);
                    gradientDrawable.SetStroke(2, global::Android.Graphics.Color.ParseColor(element.BorderColors));
                    //gradientDrawable.SetCornerRadius(45); // increase or decrease to changes the corner look
                    this.Control.SetBackgroundDrawable(gradientDrawable);
                    this.Control.SetRawInputType(InputTypes.TextFlagNoSuggestions);
                    Control.Gravity = global::Android.Views.GravityFlags.CenterVertical;
                    Control.SetPadding(30, 0, 30, 0);


                    //Control.SetHintTextColor(ColorStateList.ValueOf(global::Android.Graphics.Color.Black));//for placeholder  


                    if (element.CustomFontSize != 0.0)
                    {
                        Control.SetTextSize(ComplexUnitType.Dip, element.CustomFontSize);
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

                    if (element.IsPhoneNumber == true)
                    {
                        Control.SetRawInputType(global::Android.Text.InputTypes.ClassPhone);
                    }
                    else if (element.IsNumeric == true)
                    {
                        Control.SetRawInputType(global::Android.Text.InputTypes.ClassNumber);
                    }
                    else if (element.IsEmail == true)
                    {
                        Control.SetRawInputType(global::Android.Text.InputTypes.TextVariationEmailAddress);
                    }
                    else if (element.IsPassword == true)
                    {
                        Control.SetPadding(30, Control.PaddingTop, Control.PaddingRight, Control.PaddingBottom);
                    }
                    else
                    {

                    }

                    if (element.IsCustomPassword == true)
                    {
                        Control.TransformationMethod = PasswordTransformationMethod.Instance;
                        //Control.InputType = InputTypes.TextVariationPassword;
                        //Control.InputType = InputTypes.TextVariationPassword | InputTypes.ClassText;
                    }
                    else
                    {
                        Control.TransformationMethod = HideReturnsTransformationMethod.Instance; //PasswordTransformationMethod.Instance;
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
                CustomEntry element = Element as CustomEntry;

                if (Control != null)
                {
                    //var element = Element as CustomEntry;

                    GradientDrawable gradientDrawable = new GradientDrawable();
                    gradientDrawable.SetColor(global::Android.Graphics.Color.Transparent);
                    gradientDrawable.SetStroke(2, global::Android.Graphics.Color.ParseColor(element.BorderColors));
                    //gradientDrawable.SetCornerRadius(45); // increase or decrease to changes the corner look
                    this.Control.SetBackgroundDrawable(gradientDrawable);
                    this.Control.SetRawInputType(InputTypes.TextFlagNoSuggestions);
                    Control.Gravity = global::Android.Views.GravityFlags.CenterVertical;
                    Control.SetPadding(30, 0, 30, 0);


                    //Control.SetHintTextColor(ColorStateList.ValueOf(global::Android.Graphics.Color.Black));//for placeholder  


                    if (element.CustomFontSize != 0.0)
                    {
                        Control.SetTextSize(ComplexUnitType.Dip, element.CustomFontSize);
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

                    if (element.IsPhoneNumber == true)
                    {
                        Control.SetRawInputType(global::Android.Text.InputTypes.ClassPhone);
                    }
                    else if (element.IsNumeric == true)
                    {
                        Control.SetRawInputType(global::Android.Text.InputTypes.ClassNumber);
                    }
                    else if (element.IsEmail == true)
                    {
                        Control.SetRawInputType(global::Android.Text.InputTypes.TextVariationEmailAddress);
                    }
                    else if (element.IsPassword == true)
                    {
                        Control.SetPadding(30, Control.PaddingTop, Control.PaddingRight, Control.PaddingBottom);
                    }
                    else
                    {

                    }

                    if (element.IsCustomPassword == true)
                    {
                        Control.TransformationMethod = PasswordTransformationMethod.Instance;
                        //Control.InputType = InputTypes.TextVariationPassword;
                        //Control.InputType = InputTypes.TextVariationPassword | InputTypes.ClassText;
                    }
                    else
                    {
                        Control.TransformationMethod = HideReturnsTransformationMethod.Instance; //PasswordTransformationMethod.Instance;
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

