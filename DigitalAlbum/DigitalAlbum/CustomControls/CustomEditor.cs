using System;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public class CustomEditor : ContentPage
    {
        public CustomEditor()
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

