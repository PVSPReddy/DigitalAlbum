using System;
using Xamarin.Forms;

namespace DigitalAlbum
{
    public class MemoryDetailViewModel : BaseViewModel
    {
        public INavigation Navigation { get; set; }
        public MemoryDetailViewModel(INavigation navigation)
        {
            Navigation = navigation;
        }
    }
}
