using System;
using SQLite.Net;
namespace DigitalAlbum
{
    public interface ISQLite
    {
        SQLiteConnection GetConnection();
    }
}
