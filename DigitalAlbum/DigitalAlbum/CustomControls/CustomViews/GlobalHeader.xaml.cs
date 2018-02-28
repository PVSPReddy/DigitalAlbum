using System;
using System.Collections.Generic;
using DigitalAlbum.ValueConverters;
using Xamarin.Forms;
using Xamarin.Forms.Internals;

namespace DigitalAlbum
{
    public partial class GlobalHeader : ContentView
    {
        public string NaviType { get; set; }
        public string PageTitle { get; set; }
        public string NaviImage { get; set; }
        public bool ShowThirdButton { get; set; }
        public object PageNavigation { get; set; }
        public GlobalHeader(string naviType, string naviImage, string pageTitle, bool showThirdButton, object pageNavigation )
        {
            NaviType = naviType;
            PageTitle = pageTitle;
            NaviImage = naviImage;
            ShowThirdButton = showThirdButton;
            PageNavigation = pageNavigation;

            BindingContext = this;

            this.SetBinding(ContentView.HeightRequestProperty, new Binding(".", BindingMode.Default, new HeightConverter(), 10, null, null));
            //this.SetBinding(NavigationProperty, new );

            InitializeComponent();
            /*
            if(naviType == "Master")
            {
                labelNaviText.Text = HexToChar("2630").ToString();//@"\u2630;";
            }
            else
            {
                labelNaviText.Text = HexToChar("2190").ToString();//@"\u2190;";
            }

            labelPageTitle.Text = pageTitle;
            labelThirdButton.IsVisible = showThirdButton;
            */
        }

        void OpenNavigationMenu(object sender, EventArgs args)
        {
            try
            {
                //var objectObtained = (ContentPage)PageDetails;
                //var d = PageDetails.Parent;
                if (NaviType == "Master")
                {
                    var objectObtained = (MasterDetailPage)((((this.Parent).Parent).Parent).Parent);
                    objectObtained.IsPresented = (objectObtained.IsPresented == false) ? true : false;
                    //var objectObtained = (MasterDetailPage)PageNavigation;
                    //objectObtained.IsPresented = (objectObtained.IsPresented == false) ? true : false;
                    //var ParentPage = (MasterDetailPage)this.Parent;
                    //ParentPage.IsPresented = (ParentPage.IsPresented == false) ? true : false;
                }
                else
                {
                    var objectObtained = (ContentPage)(((this.Parent).Parent).Parent);
                    objectObtained.Navigation.PopModalAsync();

                    /*
                    Type myType = PageNavigation.GetType();
                    IList<System.Reflection.PropertyInfo> props = new List<System.Reflection.PropertyInfo>(myType.GetProperties());

                    foreach (System.Reflection.PropertyInfo prop in props)
                    {
                        object propValue = prop.GetValue(PageNavigation, null);
                        //propValue.Navigation.PopModalAsync();
                        // Do something with propValue
                    }
                    */
                    //var objectObtained = ((BindableObject)PageNavigation).Navigation; //(INavigation)PageNavigation;
                    //objectObtained.PopModalAsync();
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }

        void AddNewMemory(object sender, EventArgs args)
        {
            try
            {
                //HomePage.homePage.Navigation.PushModalAsync(new CreateMemory());
                //DisplayAlert("ALert", "HelloWorld", "Ok");
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }

        public static char HexToChar(string hex)
        {
            return (char)ushort.Parse(hex, System.Globalization.NumberStyles.HexNumber);
        }

        public static string CharToHex(char c)
        {
            return ((ushort)c).ToString("X4");
        }
    }


    public enum NavigationType
    {
        BackNavigation,
        MasterNavigation
    }

    public class ExtraButtons
    {
        public string ButtonText { get; set; }

        public bool IsVisible { get; set; }
    }
}
