using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel;
using System.Reflection;
using System.Runtime.CompilerServices;
using Xamarin.Forms;
using Xamarin.Forms.Internals;
using System.Threading.Tasks;

namespace DigitalAlbum
{
    public partial class AppSettings : ContentPage
    {
        public Dictionary<string, Color> availableColors;
        public List<string> colorNames { get; set; }
        //public List<ColorListData> AvailableColors { get; set; }

        public AppSettings()
        {
            GetAllAvailableColors();
            BindingContext = this;
            InitializeComponent();

        }

        private void HeaderColorSelected(object sender, EventArgs e)
        {
            try
            {
                var selectedColorIndex = ((Picker)sender).SelectedIndex;
                if(selectedColorIndex <= -1)
                {
                    return;
                }
                else
                {
                    var selectedColor = availableColors.Where(X => X.Key == ((((Picker)sender).SelectedItem).ToString())).FirstOrDefault().Value;
                    App.Current.Resources["HeaderBackGroundColor"] = selectedColor;
                    App.Current.Resources["CurrentTextColor"] = Color.Black;
                    App.Current.Properties["AppSettingsType"] = AppSettingsType.UserDefined;
                }
            }
            catch(Exception ex)
            {
                var msg = ex.Message;
            }
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

        void GetColorsClicked(object sender, EventArgs args)
        {
            try
            {
                //var fff = availableColors.Keys.ToList();
                var fields = typeof(Color).GetRuntimeFields().Where(x => x.FieldType == typeof(Color) && x.IsInitOnly).Select(x => ((Color)x.GetValue(null)).R);

                //var _colors = new Dictionary<string, (double R, double G, double B)>();
                foreach (var c in typeof(Color).GetRuntimeFields().Where(f => f.FieldType == typeof(Color) && f.IsInitOnly))
                {
                    var colorName = c.Name;
                    var color = ((Color)c.GetValue(null));
                    //_colors.Add(c.Name, (color.R, color.G, color.B));
                }


                /*
                //var allFiles1 = typeof(Xamarin.Forms.Color).GetRuntimeFields().ToList();//.Where(X=>X.ReflectedType.FullName == "Xamarin.Forms.Color");
                //var allFiles2 = typeof(Xamarin.Forms.Color).GetFields();// ;GetFields().ToList();
                //foreach(var field in typeof(Xamarin.Forms.Color).GetFields())// (BindingFlags.Static | BindingFlags.Public))
                //{
                //    if (field != null && !String.IsNullOrEmpty(field.Name))
                //    {
                //        var name = field.Name;
                //    }
                //}

                //var allPossibleColorNames = Enum.GetNames(typeof(Color));
                //var allPossibleColors = Enum.GetValues(typeof(Color)).Cast<Color>().ToList();

                */
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
                System.Diagnostics.Debug.WriteLine(msg+"\n"+ex.StackTrace);
            }
        }

        async void ChangeThemeClicked(object sender, EventArgs args)
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
                    App.Current.Resources["HeaderBackGroundColor"] = Color.Maroon;
                    App.Current.Resources["CurrentTextColor"] = Color.Black;
                    App.Current.Properties["AppSettingsType"] = AppSettingsType.NightMode;
                }
                else
                {
                    App.Current.Resources["HeaderBackGroundColor"] = Color.Teal;
                    App.Current.Resources["CurrentTextColor"] = Color.Black;
                    App.Current.Properties["AppSettingsType"] = AppSettingsType.DayMode;
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }

        public async Task<bool> GetAllAvailableColors()
        {
            try
            {
                //AvailableColors = new List<ColorListData>();
                availableColors = new Dictionary<string, Color>();
                colorNames = new List<string>();
                foreach (var c in typeof(Color).GetRuntimeFields().Where(f => f.FieldType == typeof(Color) && f.IsInitOnly))
                {
                    var colorName = c.Name.ToString();
                    var colorValue = ((Color)c.GetValue(null));
                    //_colors.Add(c.Name, (color.R, color.G, color.B));

                    availableColors.Add(colorName, colorValue);
                    colorNames.Add(colorName);
                    //AvailableColors.Add(new ColorListData()
                    //{
                    //    ColorName = colorName,
                    //    ColorValue = colorValue
                    //});
                }
            }
            catch(Exception ex)
            {
                var msg = ex.Message;
            }
            return true;
        }

    }

    public enum AppSettingsType
    {
        DayMode = 0,
        NightMode = 1,
        UserDefined = 2
    }

    public class ColorListData
    {
        public string ColorName { get; set; }

        public Color ColorValue { get; set; }
    }
}
