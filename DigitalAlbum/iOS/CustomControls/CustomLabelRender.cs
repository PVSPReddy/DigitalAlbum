using System;

using Xamarin.Forms;
using DigitalAlbum;
using DigitalAlbum.iOS;
using Xamarin.Forms.Platform.iOS;
using UIKit;
using Foundation;

[assembly: ExportRenderer(typeof(CustomLabel), typeof(CustomLabelRender))]
namespace DigitalAlbum.iOS
{
    public class CustomLabelRender : LabelRenderer
    {
        public CustomLabelRender() { }

        protected override void OnElementChanged(ElementChangedEventArgs<Label> e)
        {
            base.OnElementChanged(e);
            try
            {

                CustomLabel element = Element as CustomLabel;
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
                    var label = (UILabel)Control;

                    label.ExclusiveTouch = true;
                    //Control.ExclusiveTouch = true;


                    //var element = Element as CustomLabel;
                    if (!string.IsNullOrWhiteSpace(element.CustomFontColor))
                    {
                        //Control.TextColor = Color.FromHex(element.CustomFontColor).ToUIColor();
                        //Control.TextColor = Color.FromHex("#00A6CC").ToUIColor();
                        //Control.TextColor = Color.FromHex(element.CustomFontColor).ToCGColor();
                    }
                    //Control.TextColor = UIColor.Black;
                    //for place holder
                    //var entry1 = new Entry();
                    //Control.Layer.BorderColor = Color.FromHex("#0000").ToCGColor();
                    //Control.Layer.BorderWidth = 0;
                    //entry1.Layer.BorderWidth = 1f;





                    // to set underline label
                    if (element.ShallUnderLine == true)
                    {
                        nint startind = 0, charLength = 0;
                        startind = element.StartIndex;

                        //var label = (UILabel)Control;
                        var text = (NSMutableAttributedString)label.AttributedText;
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
                        var range = new NSRange(startind, charLength);
                        text.AddAttribute(UIStringAttributeKey.UnderlineStyle, NSNumber.FromInt32((int)NSUnderlineStyle.Single), range);
                    }
                    else if (element.ShallUnderLine == true && element.ShallUseHTMLOnly == false)
                    {

                    }
                    else
                    {

                    }





                    //for font size and font formats
                    var fontSizes = 16.0;
                    if (element.FontSize == 0 || element.FontSize == null)
                    {

                    }
                    else
                    {
                        fontSizes = element.FontSize;
                    }
                    uint fontSize = (uint)fontSizes;
                    if (element.FontFamily == "HelveticaReg")
                    {
                        label.Font = UIFont.FromName("HelveticaRegular.ttf", fontSize);
                        //Control.Font = UIFont.FromName("HelveticaRegular.ttf", fontSize);
                    }
                    else if (element.FontFamily == "Helvitica77B")
                    {
                        label.Font = UIFont.FromName("HelveticaNeueIt77BoldCondensed.ttf", fontSize);
                        //Control.Font = UIFont.FromName("HelveticaNeueIt77BoldCondensed.ttf", fontSize);
                    }
                    else if (element.FontFamily == "Helvitica57B")
                    {
                        label.Font = UIFont.FromName("HelveticaLT57Condensed.ttf", fontSize);
                        //Control.Font = UIFont.FromName("HelveticaLT57Condensed.ttf", fontSize);
                    }
                    else
                    {
                    }


                    if (element.IsHTMLText == true)
                    {
                        var attr = new NSAttributedStringDocumentAttributes();
                        var nsError = new NSError();
                        attr.DocumentType = NSDocumentType.HTML;

                        var myHtmlData = NSData.FromString(element.Text, NSStringEncoding.Unicode);
                        this.Control.AttributedText = new NSAttributedString(myHtmlData, attr, ref nsError);
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

