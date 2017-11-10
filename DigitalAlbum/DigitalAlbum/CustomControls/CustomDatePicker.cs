using System;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public class CustomDatePicker : ContentPage
    {
        public CustomDatePicker()
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

