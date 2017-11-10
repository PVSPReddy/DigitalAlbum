using System;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public class CustomTimePicker : ContentPage
    {
        public CustomTimePicker()
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

