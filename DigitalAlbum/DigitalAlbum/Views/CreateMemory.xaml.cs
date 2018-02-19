using DigitalAlbum.ValueConverters;
using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public partial class CreateMemory : ContentPage
    {
        public CreateMemory()
        {
            BindingContext = new CreateMemoryViewModel(Navigation);
            InitializeComponent();

            /*
            dateMemoryDate.SetBinding(CustomDatePicker.CustomFontSizeProperty, new Binding(".", BindingMode.Default, new WidthConverter(), 3, null));
            dateMemoryDate.CustomFontSize = 10;

            timeMemoryTime.SetBinding(CustomDatePicker.CustomFontSizeProperty, new Binding(".", BindingMode.Default, new WidthConverter(), 3, null));
            timeMemoryTime.CustomFontSize = 5;
            */
        }
    }
}
