using System;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public class MemoryMenuViewModel : BaseViewModel
    {

        public INavigation Navigation { get; set; }
        public MemoryMenuViewModel(INavigation navigation)
        {
            Navigation = navigation;
        }
    }
}

