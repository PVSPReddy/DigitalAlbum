using System;
using System.IO;
using DigitalAlbum.Droid;
using SQLite.Net;
using Xamarin.Forms;

[assembly: Dependency(typeof(SQLiteService))]
namespace DigitalAlbum.Droid
{
    public class SQLiteService : ISQLite
    {
        public SQLiteService() { }


        public SQLiteConnection GetConnection()
        {
            var sqliteFilename = "UserInformation.db3";
            string documentsPath = System.Environment.GetFolderPath(System.Environment.SpecialFolder.Personal);
            var path = Path.Combine(documentsPath, sqliteFilename);
            var plat = new SQLite.Net.Platform.XamarinAndroid.SQLitePlatformAndroid();
            var conn = new SQLiteConnection(plat, path);
            return conn;
        }
    }
}

