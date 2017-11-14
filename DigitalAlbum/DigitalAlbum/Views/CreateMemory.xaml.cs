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
            imageMemory.HeightRequest = (BaseContentPage.screenWidth * 25) / 100;
            imageMemory.WidthRequest = (BaseContentPage.screenWidth * 25) / 100;
            //entryCompanionName.HeightRequest = (BaseContentPage.screenHeight * 8) / 100;
            entryCompanionName.WidthRequest = (BaseContentPage.screenWidth * 89) / 100;
            gridEntryHolder.HeightRequest = (BaseContentPage.screenHeight * 35) / 100;
        }
    }
}
