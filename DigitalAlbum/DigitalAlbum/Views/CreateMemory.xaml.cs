using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public partial class CreateMemory : ContentPage
    {
        public CreateMemory()
        {
            InitializeComponent();
            BindingContext = new CreateMemoryViewModel(Navigation);
        }
    }
}
