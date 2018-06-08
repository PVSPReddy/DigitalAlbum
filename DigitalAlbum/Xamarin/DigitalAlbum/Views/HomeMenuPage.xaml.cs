using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public partial class HomeMenuPage : ContentPage
    {
        List<HomeMenuData> homeMenuList;
        public HomeMenuPage()
        {
            homeMenuList = new List<HomeMenuData>()
            {
                new HomeMenuData(){ MenuImage="Avater2.png", MenuPageName="HomePage" },
                new HomeMenuData(){ MenuImage="Avater2.png", MenuPageName="Companions" },
                new HomeMenuData(){ MenuImage="Avater2.png", MenuPageName="App Settings" },
                new HomeMenuData(){ MenuImage="Avater2.png", MenuPageName="HomePage4" },
                new HomeMenuData(){ MenuImage="Avater2.png", MenuPageName="HomePage5" },
                new HomeMenuData(){ MenuImage="Avater2.png", MenuPageName="HomePage6" }
            };
            InitializeComponent();
            listviewMenu.ItemsSource = homeMenuList;
            listviewMenu.ItemSelected += MenuItemSelected;
        }

        private void MenuItemSelected(object sender, SelectedItemChangedEventArgs e)
        {
            var parentDetailView = (MasterDetailPage)this.Parent;
            try
            {
                var menuItemSelected = ((ListView)sender).SelectedItem as HomeMenuData;
                if(menuItemSelected == null)
                {
                    return;
                }
                else
                {
                    switch(menuItemSelected.MenuPageName)
                    {
                        case "HomePage":
                            parentDetailView.Detail = new HomePage() { BackgroundColor = Color.White };
                            break;
                        case "Companions":
                            parentDetailView.Detail = new CompanionsList() { BackgroundColor = Color.White };
                            break;
                        case "App Settings":
                            parentDetailView.Detail = new AppSettings() { BackgroundColor = Color.White };
                            break;
                        default:
                            break;
                    }

                }
                parentDetailView.IsPresented = false;
            }
            catch(Exception ex)
            {
                var msg = ex.Message;
                System.Diagnostics.Debug.WriteLine("Error => " + ex.Message);
                System.Diagnostics.Debug.WriteLine("StackTrace => " + ex.StackTrace);
                //throw new Exception(ex.Message);
                parentDetailView.IsPresented = false;
            }
            ((ListView)sender).SelectedItem = null;
        }
    }

    public class HomeMenuData// : INotifyPropertyChanged
    {
        public string MenuImage { get; set; }

        public string MenuPageName { get; set; }

        //public Color _SelectedItemColor { get; set; }

        public Color SelectedItemColor { get; set; }
    }
}
