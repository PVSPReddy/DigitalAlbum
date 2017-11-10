using System;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public class CustomImage : ContentPage
    {
        public CustomImage()
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

