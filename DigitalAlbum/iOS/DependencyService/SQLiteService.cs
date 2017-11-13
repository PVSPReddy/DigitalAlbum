using System;
using System.IO;
using DigitalAlbum.iOS;
using SQLite.Net;
using Xamarin.Forms;

[assembly: Dependency(typeof(SQLiteService))]
namespace DigitalAlbum.iOS
{
    public class SQLiteService : ISQLite
    {
        public SQLiteService() { }

        public SQLiteConnection GetConnection()
        {
            var sqliteFilename = "UserInformation.db3";
            string documentsPath = Environment.GetFolderPath(Environment.SpecialFolder.Personal);
            string libraryPath = Path.Combine(documentsPath, "..", "Library");
            var path = Path.Combine(libraryPath, sqliteFilename);
            var plat = new SQLite.Net.Platform.XamarinIOS.SQLitePlatformIOS();
            var conn = new SQLiteConnection(plat, path);
            return conn;
        }
    }
}

