using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public partial class MemoryMenu : ContentPage
    {
        public MemoryMenu()
        {
            InitializeComponent();
            BindingContext = new MemoryMenuViewModel(Navigation);
        }
    }
}
