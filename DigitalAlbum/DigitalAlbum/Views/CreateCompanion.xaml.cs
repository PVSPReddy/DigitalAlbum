using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public partial class CreateCompanion : ContentPage
    {
        public CreateCompanion()
        {
            InitializeComponent();
            BindingContext = new CreateCompanionViewModel(Navigation);
        }
    }
}
