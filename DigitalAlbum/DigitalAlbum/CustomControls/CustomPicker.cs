using System;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public class CustomPicker : ContentPage
    {
        public CustomPicker()
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

