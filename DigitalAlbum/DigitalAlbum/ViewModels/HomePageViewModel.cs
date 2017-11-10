using System;

using Xamarin.Forms;
using System.Windows.Input;

namespace DigitalAlbum
{
    public class HomePageViewModel : BaseViewModel
    {
        public ICommand _CommandClicked { get; private set; }

        public HomePageViewModel()
        {
            _CommandClicked = new Command(() => CommandClicked());
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

