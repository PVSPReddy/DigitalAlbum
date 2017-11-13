using System;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public class CreateMemoryViewModel : BaseViewModel
    {
        public INavigation Navigation { get; set; }
        public CreateMemoryViewModel(INavigation navigation)
        {
            Navigation = navigation;
        }
    }
}

