using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public partial class CreateCompanion : ContentPage
    {
        public CreateCompanion()
        {
            InitializeComponent();
            BindingContext = new CreateCompanionViewModel(Navigation);
        }

        void OpenNavigationMenu(object sender, EventArgs args)
        {
            try
            {
                Navigation.PopModalAsync();
                //var ParentPage = (MasterDetailPage)this.Parent;
                //ParentPage.IsPresented = (ParentPage.IsPresented == false) ? true : false;
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }
    }
}
