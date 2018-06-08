using System;
using SQLite.Net.Attributes;

namespace DigitalAlbum
{
    [Table("UserProfileInfo")]
    public class UserProfileInfo
    {
        public UserProfileInfo() { }

        public string UserFirstName { get; set; }

        public string UserLastName { get; set; }

        public string UserMobile { get; set; }

        public string UserDOB { get; set; }

        public string UserEmail { get; set; }

        public string UserPassword { get; set; }


    }
}
