using DigitalAlbum.ValueConverters;
using System;
using System.Collections.Generic;

using Xamarin.Forms;
using DigitalAlbum.CustomControls.CustomViews;

namespace DigitalAlbum
{
    public partial class CreateMemory : BaseContentPage
    {
        public CreateMemory()
        {
            BindingContext = new CreateMemoryViewModel(Navigation);
            InitializeComponent();

            NaviType = "Master";
            PageTitle = "Memories Hub";
            NaviImage = ValueConverters.TextToUniCodeSymbolCoverter.GetSymbolValue("LeftArrow");

            /*
            dateMemoryDate.SetBinding(CustomDatePicker.CustomFontSizeProperty, new Binding(".", BindingMode.Default, new WidthConverter(), 3, null));
            dateMemoryDate.CustomFontSize = 10;

            timeMemoryTime.SetBinding(CustomDatePicker.CustomFontSizeProperty, new Binding(".", BindingMode.Default, new WidthConverter(), 3, null));
            timeMemoryTime.CustomFontSize = 5;
            */
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

        void AddMemoryClick(object sender, EventArgs args)
        {
            try
            {
                
            }
            catch (Exception ex)
            {
                var msg = ex.Message + "\n" + ex.StackTrace;
                System.Diagnostics.Debug.WriteLine(msg);
            }

        }
    }
}
