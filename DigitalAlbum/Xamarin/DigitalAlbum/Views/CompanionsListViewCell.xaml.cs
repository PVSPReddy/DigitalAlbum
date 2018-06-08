using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public partial class CompanionsListViewCell : ViewCell
    {
        public CompanionsListViewCell()
        {
            InitializeComponent();
        }

        void AddMemoryToPerson(object sender, EventArgs args)
        {
            try
            {
                CompanionsList.companionsList.Navigation.PushModalAsync(new CreateMemory());
                //DisplayAlert("ALert", "HelloWorld", "Ok");
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }
    }
}
