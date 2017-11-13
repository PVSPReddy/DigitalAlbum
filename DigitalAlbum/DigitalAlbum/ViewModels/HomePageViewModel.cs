using System;

using Xamarin.Forms;
using System.Windows.Input;

namespace DigitalAlbum
{
    public class HomePageViewModel : BaseViewModel
    {
        public ICommand _CommandClicked { get; private set; }
        public ICommand AddMemoryClick { get; private set; }
        public INavigation Navigation { get; set; }

        public HomePageViewModel(INavigation navigation)
        {
            Navigation = navigation;
            _CommandClicked = new Command(() => CommandClicked());
            AddMemoryClick = new Command(() => AddMemoryClicked());
        }

        void AddMemoryClicked()
        {
            try
            {
                Navigation.PushModalAsync(new CreateMemory());
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }

        void CommandClicked()
        {
            try
            {
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }
    }
}

