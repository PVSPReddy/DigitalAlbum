using System;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public class CustomEditor : Editor
    {
        public CustomEditor() { }

        public static readonly BindableProperty PlaceholderProperty = BindableProperty.Create<CustomEditor, string>(view => view.Placeholder, String.Empty);

        public string Placeholder
        {
            get
            {
                return (string)GetValue(PlaceholderProperty);
            }

            set
            {
                SetValue(PlaceholderProperty, value);
            }
        }
    }
}

