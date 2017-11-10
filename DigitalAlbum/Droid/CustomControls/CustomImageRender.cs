using System;

using Xamarin.Forms;

namespace DigitalAlbum.Droid
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

