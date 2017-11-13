using System;

using Xamarin.Forms;
using DigitalAlbum;
using DigitalAlbum.Droid;
using Xamarin.Forms.Platform.Android;
using Graphicss = Android.Graphics;
using Android.Widget;
using Android.Text;

[assembly: ExportRenderer(typeof(CustomLabel), typeof(CustomLabelRender))]
namespace DigitalAlbum.Droid
{
    public class CustomLabelRender : LabelRenderer
    {
        public CustomLabelRender() { }

        protected override void OnElementChanged(ElementChangedEventArgs<Label> e)
        {
            base.OnElementChanged(e);

            try
            {
                CustomLabel element;// = Element as CustomLabel;
                if (e.NewElement != null)
                {
                    element = Element as CustomLabel;
                }
                else
                {
                    element = e.OldElement as CustomLabel;
                }

                if (Control != null)
                {
                    var label = (TextView)Control;


                    if (!string.IsNullOrWhiteSpace(element.CustomFontColor))
                    {
                        //Control.SetTextColor(Graphicss.Color.ParseColor(element.CustomFontColor));
                        label.SetTextColor(Graphicss.Color.ParseColor(element.CustomFontColor));
                    }



                    // to under line a label
                    if (element.ShallUnderLine == true)
                    {
                        int charLength = 0;
                        //var label = (TextView)Control;
                        var text = element.Text;
                        if (element.NoOfChar == 0 && element.EndIndex == 0)
                        {
                            charLength = text.Length;
                        }
                        else if (element.EndIndex != 0 && element.NoOfChar != 0)
                        {
                            charLength = element.NoOfChar;
                        }
                        else if (element.EndIndex == 0)
                        {
                            charLength = element.NoOfChar;
                        }
                        else if (element.NoOfChar == 0)
                        {
                            charLength = element.EndIndex - element.StartIndex;
                        }
                        else
                        {
                            charLength = text.Length;
                        }
                        var string1 = element.Text.Substring(0, element.StartIndex);
                        if (string1 == "<")
                        {
                            string1 = "&lt;";
                        }
                        else
                        {

                        }
                        var string2 = element.Text.Substring(element.StartIndex, charLength);
                        var string3 = element.Text.Substring(element.StartIndex + charLength, (element.Text.Length - (element.StartIndex + charLength)));

                        string finalText = "";
                        if (element.ShallMoveTop == true)
                        {
                            finalText = "<center><p valign=\"center\">" + string1 + "<u>" + string2 + "</u>" + string3 + "</p></center>";
                            label.LayoutParameters = new LayoutParams(LayoutParams.WrapContent, LayoutParams.WrapContent);
                            label.Gravity = global::Android.Views.GravityFlags.Left;
                        }
                        else
                        {
                            finalText = "<table><tr><td>" + string1 + "<u>" + string2 + "</u>" + string3 + "</td></tr></table>";
                            label.LayoutParameters = new LayoutParams(LayoutParams.MatchParent, LayoutParams.MatchParent);
                            label.Gravity = global::Android.Views.GravityFlags.Center | global::Android.Views.GravityFlags.Left;
                        }
#pragma warning disable CS0618 // Type or member is obsolete
                        label.TextFormatted = Html.FromHtml(finalText);
#pragma warning restore CS0618 // Type or member is obsolete
                    }
                    else if (element.ShallUnderLine == true && element.ShallUseHTMLOnly == false)
                    {

                    }
                    else
                    {

                    }





                    //for font family
                    if (element.FontFamily == "Avenir65")
                    {
                        Graphicss.Typeface font = Graphicss.Typeface.CreateFromAsset(Forms.Context.Assets, "AvenirLTStd-Medium.ttf");
                        label.Typeface = font;
                        //Control.Typeface = font;
                    }
                    else if (element.FontFamily == "Avenir45")
                    {
                        Graphicss.Typeface font = Graphicss.Typeface.CreateFromAsset(Forms.Context.Assets, "AvenirLTStd-Book.ttf");
                        label.Typeface = font;
                        //Control.Typeface = font;
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
        }
    }
}

