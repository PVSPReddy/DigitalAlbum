using System;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public class CustomButton : ContentPage
    {
        public CustomButton()
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

