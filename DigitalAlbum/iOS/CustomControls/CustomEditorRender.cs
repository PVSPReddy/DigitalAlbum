using System;

using Xamarin.Forms;
using DigitalAlbum;
using DigitalAlbum.iOS;
using Xamarin.Forms.Platform.iOS;

[assembly: ExportRenderer(typeof(CustomEditor), typeof(CustomEditorRender))]
namespace DigitalAlbum.iOS
{
    public class CustomEditorRender : EditorRenderer
    {
        public CustomEditorRender() { }
    }
}

