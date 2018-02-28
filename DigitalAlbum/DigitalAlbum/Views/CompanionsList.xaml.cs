using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public partial class CompanionsList : ContentPage
    {
        public static CompanionsList companionsList;
        public CompanionsList()
        {
            BindingContext = new CompanionsListViewModel(Navigation);
            companionsList = this;
            InitializeComponent();

            //BindingContext = new HomePageViewModel(Navigation);
            listViewCompanions.ItemSelected += (object sender, SelectedItemChangedEventArgs e) =>
            {
                try
                {
                    var selectedCompanion = ((ListView)sender).SelectedItem as CompanionsData;
                    if (selectedCompanion == null)
                    {
                        return;
                    }
                    else
                    {
                        Navigation.PushModalAsync(new CompanionDetails(selectedCompanion));
                    }
                    ((ListView)sender).SelectedItem = null;
                }
                catch (Exception ex)
                {
                    var msg = ex.Message;
                }

            };
        }

        void OpenNavigationMenu(object sender, EventArgs args)
        {
            try
            {
                var ParentPage = (MasterDetailPage)this.Parent;
                ParentPage.IsPresented = (ParentPage.IsPresented == false) ? true : false;
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }
    }
}
