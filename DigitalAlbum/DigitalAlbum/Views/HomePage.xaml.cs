using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public partial class HomePage : ContentPage
    {
        public HomePage()
        {
            BindingContext = new HomePageViewModel(Navigation);
            InitializeComponent();
            //BindingContext = new HomePageViewModel(Navigation);
            listViewCompanions.ItemSelected += (object sender, SelectedItemChangedEventArgs e) => 
            {
                try
                {
                    var item = ((ListView)sender).SelectedItem as CompanionsData;
                    if (item == null)
                    {
                        return;
                    }

                    ((ListView)sender).SelectedItem = null;
                }
                catch(Exception ex)
                {
                    var msg = ex.Message;
                }

            };
        }
    }
}
