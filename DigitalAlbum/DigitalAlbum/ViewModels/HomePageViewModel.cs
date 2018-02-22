using System;

using Xamarin.Forms;
using System.Windows.Input;
using System.Collections.Generic;

namespace DigitalAlbum
{
    public class HomePageViewModel : BaseViewModel
    {
        public ICommand _CommandClicked { get; private set; }
        public ICommand AddMemoryClick { get; private set; }
        public INavigation Navigation { get; set; }
        public List<CompanionsData> CompanionData { get; set; }

        public HomePageViewModel(INavigation navigation)
        {
            Navigation = navigation;
            _CommandClicked = new Command(() => CommandClicked());
            AddMemoryClick = new Command(() => AddMemoryClicked());
            CompanionData = new List<CompanionsData>()
            {
                new CompanionsData(){ CompanionName="SivaPrasad", DateOfBirth="02/07/1992", MemoriesCount="30" },
                new CompanionsData(){ CompanionName="SivaPrasad Reddy", DateOfBirth="02/01/1992", MemoriesCount="10" },
                new CompanionsData(){ CompanionName="Venkata SivaPrasad", DateOfBirth="24/02/1992", MemoriesCount="20" },
                new CompanionsData(){ CompanionName="Venkata SivaPrasad Reddy", DateOfBirth="12/09/1992", MemoriesCount="2" },
                new CompanionsData(){ CompanionName="P Venkata SivaPrasad", DateOfBirth="09/08/1992", MemoriesCount="3" },
                new CompanionsData(){ CompanionName="P Venkata SivaPrasad Reddy", DateOfBirth="05/05/1992", MemoriesCount="5" },
                new CompanionsData(){ CompanionName="Pulagam Venkata SivaPrasad", DateOfBirth="016/06/1992", MemoriesCount="1" },
                new CompanionsData(){ CompanionName="Pulagam Venkata SivaPrasad Reddy", DateOfBirth="01/01/1992", MemoriesCount="9" }
            };
        }

        void AddMemoryClicked()
        {
            try
            {
                Navigation.PushModalAsync(new CreateMemory());
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }

        void CommandClicked()
        {
            try
            {
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }
    }

    public class CompanionsData
    {
        public string CompanionName { get; set; }

        public string DateOfBirth { get; set; }

        public string MemoriesCount { get; set; }
    }
}

