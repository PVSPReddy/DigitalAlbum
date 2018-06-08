using System;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public class CreateMemoryViewModel : BaseViewModel
    {
        public INavigation Navigation { get; set; }
        public Command SubmitClickedCommand { get; private set; }

        public CreateMemoryViewModel(INavigation navigation)
        {
            Navigation = navigation;
            SubmitClickedCommand = new Command(() => ExecuteSubmitClickedCommand());
        }


        /*
        /// <summary>
		///     Gets the select check list command.
		/// </summary>
		/// <value>The select check list command.</value>
		public Command SubmitClickedCommand
        {
            get
            {
                return _submitClickedCommand ??
                (_submitClickedCommand =
                           new Command(ExecuteSelectCheckListCommand, () => !IsBusy));
            }
        }
        */

        private void ExecuteSubmitClickedCommand()
        {
           try
            {

            }
            catch(Exception ex)
            {
                var msg = ex.Message;
            }
        }
    }
}

