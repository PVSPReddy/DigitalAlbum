using Xamarin.Forms;

namespace DigitalAlbum
{
    public partial class App : Application
    {
        public static int screenHeight, screenWidth;
        public App()
        {
            InitializeComponent();

            try
            {
                //MainPage = new HomePageTestTwo();
                //MainPage = new HomePageTest();
                //MainPage = new HomeMasterPage();
                MainPage = new HomePage();
                //MainPage = new CreateMemory();
                //MainPage = new CreateCompanion();
            }
            catch(System.Exception ex)
            {
                var msg = ex.Message+ "\n" + ex.StackTrace;
                System.Diagnostics.Debug.WriteLine(msg);
            }
        }

        protected override void OnStart()
        {
            // Handle when your app starts
        }

        protected override void OnSleep()
        {
            // Handle when your app sleeps
        }

        protected override void OnResume()
        {
            // Handle when your app resumes
        }
    }
}
