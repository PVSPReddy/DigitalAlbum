using System;

using Xamarin.Forms;

namespace DigitalAlbum.iOS
{
    public class CustomLabelRender : ContentPage
    {
        public CustomLabelRender()
        {
            Content = new StackLayout
            {
                Children = {
                    new Label { Text = "Hello ContentPage" }
                }
            };
        }
    }
}

