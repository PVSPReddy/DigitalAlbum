using System;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public class CustomEntry : ContentPage
    {
        public CustomEntry()
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

