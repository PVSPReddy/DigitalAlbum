using System;

using Xamarin.Forms;
using DigitalAlbum;
using DigitalAlbum.Droid;
using Xamarin.Forms.Platform.Android;

[assembly: ExportRenderer(typeof(CustomListView), typeof(CustomListViewRender))]
namespace DigitalAlbum.Droid
{
    public class CustomListViewRender : ListViewRenderer
    {
        public CustomListViewRender() { }
    }
}

