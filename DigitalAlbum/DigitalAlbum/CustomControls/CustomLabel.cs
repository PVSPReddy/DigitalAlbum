using System;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public class CustomLabel : ContentPage
    {
        public CustomLabel()
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

