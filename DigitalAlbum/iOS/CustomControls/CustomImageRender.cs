using System;

using Xamarin.Forms;

namespace DigitalAlbum.iOS
{
    public class CustomImageRender : ContentPage
    {
        public CustomImageRender()
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

