using System;
using Xamarin.Forms;

namespace DigitalAlbum
{
    public class CreateCompanionViewModel : BaseViewModel
    {
        public INavigation Navigation { get; set; }
        public CreateCompanionViewModel(INavigation navigation)
        {
            Navigation = navigation;
        }
    }
}
