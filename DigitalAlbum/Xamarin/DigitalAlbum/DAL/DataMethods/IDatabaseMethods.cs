using System;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace DigitalAlbum
{
    public interface IDatabaseMethods : IDisposable
    {
        #region User Profile Information Methods
        void SaveUserInfo(UserProfileInfo UserInfo);
        UserProfileInfo GetUserInfo();
        void UpdateUserInfo(UserProfileInfo objUserInfo);
        void DeleteUserInfo();
        #endregion

        #region User Profile Information Methods
        void SaveCompanionInfo(MemorySharedCompanion CompanionInfo);
        MemorySharedCompanion GetCompanionInfo(string CompanionName);
        void UpdateCompanionInfo(MemorySharedCompanion objUserInfo);
        void DeleteCompanionInfo();
        #endregion

        #region User Memory Information Methods
        void SaveMemory(MemoriesTable MemoryInfo);
        Task<List<MemoriesTable>> GetMemories(string memoryWith);
        void UpdateMemory(MemoriesTable objMemoryInfo);
        void DeleteThisMemory(string memoryId);
        void DeleteAllParticularMemories(string memoryWith);
        void DeleteAllMemories();
        #endregion


    }
}
