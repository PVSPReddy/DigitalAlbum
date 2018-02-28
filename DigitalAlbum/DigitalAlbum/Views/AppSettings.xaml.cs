using System;
using System.Collections.Generic;

using Xamarin.Forms;

namespace DigitalAlbum
{
    public partial class AppSettings : ContentPage
    {
        public AppSettings()
        {
            InitializeComponent();
        }

        void OpenNavigationMenu(object sender, EventArgs args)
        {
            try
            {
                //Navigation.PopModalAsync();
                var ParentPage = (MasterDetailPage)this.Parent;
                ParentPage.IsPresented = (ParentPage.IsPresented == false) ? true : false;
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }

        void ChangeThemeClicked(object sender, EventArgs args)
        {
            try
            {
                if (App.Current.Properties["AppSettingsType"] == null)
                {
                    App.Current.Properties["AppSettingsType"] = AppSettingsType.DayMode;
                }
                else
                {

                }
            }
            catch(Exception ex)
            {
                App.Current.Properties["AppSettingsType"] = AppSettingsType.DayMode;
                var msg = ex.Message;
            }
            try
            {
                if (((AppSettingsType)App.Current.Properties["AppSettingsType"]) == AppSettingsType.DayMode)
                {
                    App.Current.Resources["HeaderBackGroundColor"] = Color.Teal;
                    App.Current.Resources["CurrentTextColor"] = Color.Black;
                    App.Current.Properties["AppSettingsType"] = AppSettingsType.NightMode;
                }
                else
                {
                    
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }
    }

    public enum AppSettingsType
    {
        DayMode = 0,
        NightMode = 1,
        UserDefined = 2
    }
}
