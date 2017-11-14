using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public partial class MemoryDetail : ContentPage
    {
        public MemoryDetail()
        {
            InitializeComponent();
            BindingContext = new MemoryDetailViewModel(Navigation);
        }
    }
}
