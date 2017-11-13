using System;
namespace DigitalAlbum
{
    public interface IDatabaseMethods : IDisposable
    {


        #region UserInfo Methods
        void SaveUserInfo(UserProfileInfo UserInfo);
        UserProfileInfo GetUserInfo();
        void UpdateUserInfo(UserProfileInfo objUserInfo);
        void DeleteUserInfo();
        #endregion


    }
}
