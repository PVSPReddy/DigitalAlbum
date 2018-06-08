using System;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public class CustomListView : ContentPage
    {
        public CustomListView()
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

