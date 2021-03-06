﻿using System;
using System.Threading.Tasks;
using SQLite.Net;
using Xamarin.Forms;
using System.Linq;
using System.Collections.Generic;

namespace DigitalAlbum
{
    public class DataBaseMethods : IDatabaseMethods
    {
        static SQLiteConnection sqliteconnection;
        public DataBaseMethods()
        {
            #region Tables creation
            sqliteconnection = DependencyService.Get<ISQLite>().GetConnection();
            sqliteconnection.CreateTable<UserProfileInfo>();
            sqliteconnection.CreateTable<MemoriesTable>();

            #endregion
        }

        #region  to save, get, update and delete User info details
        public void DeleteUserInfo()
        {
            try
            {
                sqliteconnection.Query<UserProfileInfo>("delete from UserProfileInfo");
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }

        public UserProfileInfo GetUserInfo()
        {
            try
            {
                var userInfo = sqliteconnection.Table<UserProfileInfo>().FirstOrDefault();
                if (userInfo != null)
                {
                    UserProfileInfo user_Info = new UserProfileInfo()
                    {
                        UserFirstName = userInfo.UserFirstName,
                        UserLastName = userInfo.UserLastName,
                        UserDOB = userInfo.UserDOB,
                        UserPassword = userInfo.UserPassword,
                        UserMobile = userInfo.UserMobile,
                        UserEmail = userInfo.UserEmail
                    };
                    return user_Info;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
                return null;
            }
        }

        public void SaveUserInfo(UserProfileInfo UserInfo)
        {
            try
            {
                sqliteconnection.Query<UserProfileInfo>("delete from UserProfileInfo");
                sqliteconnection.Insert(new UserProfileInfo
                {
                    UserFirstName = UserInfo.UserFirstName,
                    UserLastName = UserInfo.UserLastName,
                    UserDOB = UserInfo.UserDOB,
                    UserPassword = UserInfo.UserPassword,
                    UserMobile = UserInfo.UserMobile,
                    UserEmail = UserInfo.UserEmail
                });
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }

        public void UpdateUserInfo(UserProfileInfo objUserInfo)
        {
            try
            {
                var UserInfo = sqliteconnection.Table<UserProfileInfo>().FirstOrDefault();
                UserInfo.UserFirstName = objUserInfo.UserFirstName;
                UserInfo.UserLastName = objUserInfo.UserLastName;
                UserInfo.UserDOB = objUserInfo.UserDOB;
                UserInfo.UserPassword = objUserInfo.UserPassword;
                UserInfo.UserMobile = objUserInfo.UserMobile;
                UserInfo.UserEmail = objUserInfo.UserEmail;
                sqliteconnection.Update(UserInfo);
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }
        #endregion




        #region  to save, get, update and delete Companion info details
        public void SaveCompanionInfo(MemorySharedCompanion CompanionInfo)
        {
            try
            {
                sqliteconnection.Insert(new MemorySharedCompanion
                {
                    MemoryWith = CompanionInfo.MemoryWith,
                    isLockedMemories = CompanionInfo.isLockedMemories
                });
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }

        public MemorySharedCompanion GetCompanionInfo(string CompanionName)
        {
            try
            {
                var allCompanions = sqliteconnection.Table<MemorySharedCompanion>().ToList();
                var companionInfo = allCompanions.Where(X => X.MemoryWith == CompanionName) as MemorySharedCompanion;
                if (companionInfo != null)
                {
                    MemorySharedCompanion companion_Info = new MemorySharedCompanion()
                    {
                        MemoryWith = companionInfo.MemoryWith,
                        isLockedMemories = companionInfo.isLockedMemories
                    };
                    return companion_Info;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
                return null;
            }
        }

        public void UpdateCompanionInfo(MemorySharedCompanion companionInfo)
        {
            try
            {
                var allCompanions = sqliteconnection.Table<MemorySharedCompanion>().ToList();
                var comapnion_Info = allCompanions.Where(X => X.MemoryWith == companionInfo.MemoryWith) as MemorySharedCompanion;
                if (comapnion_Info == null)
                {

                }
                else
                {
                    comapnion_Info.MemoryWith = companionInfo.MemoryWith;
                    comapnion_Info.isLockedMemories = companionInfo.isLockedMemories;
                    sqliteconnection.Update(comapnion_Info);
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }

        public void DeleteCompanionInfo()
        {
            try
            { }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }
        #endregion

        #region  to save, get, update and delete Memory info details
        public void SaveMemory(MemoriesTable MemoryInfo)
        {
            try
            {
                sqliteconnection.Insert(new MemoriesTable
                {
                    MemoryId = MemoryInfo.MemoryId,
                    MemoryWith = MemoryInfo.MemoryWith,
                    MemoryDate = MemoryInfo.MemoryDate,
                    MemoryImage = MemoryInfo.MemoryImage,
                    MemoryTime = MemoryInfo.MemoryTime,
                    MemoryDescription = MemoryInfo.MemoryDescription,
                    MemoryLocation = MemoryInfo.MemoryLocation,
                    MemoryType = MemoryInfo.MemoryType
                });
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }

        public async Task<List<MemoriesTable>> GetMemories(string memoryWith)
        {
            try
            {
                var memoryInfo = sqliteconnection.Table<MemoriesTable>().ToList();
                if (memoryInfo != null)
                {
                    var memoryInfoResponse = memoryInfo.Where(x => x.MemoryWith == memoryWith).ToList();
                    return memoryInfoResponse;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
                return null;
            }
        }

        public void UpdateMemory(MemoriesTable objMemoryInfo)
        {
            try
            {
                var allMemories = sqliteconnection.Table<MemoriesTable>().ToList();
                var memoryInfo = allMemories.Where(X => X.MemoryId == objMemoryInfo.MemoryId) as MemoriesTable;
                if (memoryInfo == null)
                {
                    sqliteconnection.Insert(objMemoryInfo);
                }
                else
                {
                    memoryInfo.MemoryId = objMemoryInfo.MemoryId;
                    memoryInfo.MemoryWith = objMemoryInfo.MemoryWith;
                    memoryInfo.MemoryImage = objMemoryInfo.MemoryImage;
                    memoryInfo.MemoryDate = objMemoryInfo.MemoryDate;
                    memoryInfo.MemoryTime = objMemoryInfo.MemoryTime;
                    memoryInfo.MemoryDescription = objMemoryInfo.MemoryDescription;
                    memoryInfo.MemoryLocation = objMemoryInfo.MemoryLocation;
                    memoryInfo.MemoryType = objMemoryInfo.MemoryType;
                    sqliteconnection.Update(memoryInfo);
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }

        public void DeleteThisMemory(string memoryId)
        {
            try
            {
                //var allMemories = sqliteconnection.Table<MemoriesTable>().ToList();
                //var memoryInfo = allMemories.Where(X => X.MemoryId == memoryId) as MemoriesTable;
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }

        public void DeleteAllParticularMemories(string memoryWith)
        {
            try
            {

            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }

        public void DeleteAllMemories()
        {
            try
            {
                sqliteconnection.Query<UserProfileInfo>("delete from MemoriesTable");
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }
        #endregion


        #region  to save, get, update and delete Coordinates info details
        /*
        public void SaveCoordinatesInfo(List<CoordinatesInformation> locations, List<LocationShop> locationShops,
             List<LocationRental> locationRentals, List<LocationUsedVehicleSales> locationUsedVehiclesSales)
        {
            try
            {
                foreach (var location in locations)
                {
                    sqliteconnection.Insert(location);
                }

                foreach (var locationShop in locationShops)
                {
                    sqliteconnection.Insert(locationShop);
                }

                foreach (var locationRental in locationRentals)
                {
                    sqliteconnection.Insert(locationRental);
                }

                foreach (var locationUsedVehicleSale in locationUsedVehiclesSales)
                {
                    sqliteconnection.Insert(locationUsedVehicleSale);
                }

            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }

        public CoordinatesInformation GetCoordinatesInfo(int locationId)
        {
            try
            {
                var coordinatesInfo = sqliteconnection.Table<CoordinatesInformation>().Where(location => location.LocationId == locationId).FirstOrDefault();
                //var coordinatesInfo = sqliteconnection.Table<CoordinatesInformation>().FirstOrDefault(location=>location.Id==locationId);
                if (coordinatesInfo != null)
                {
                    return coordinatesInfo;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
                return null;
            }
        }
        public List<CoordinatesInformation> GetCoordinatesList()
        {
            try
            {
                var coordinatesInfo = sqliteconnection.Table<CoordinatesInformation>().ToList();

                //var coordinatesInfo = sqliteconnection.Table<CoordinatesInformation>().FirstOrDefault(location=>location.Id==locationId);
                if (coordinatesInfo != null)
                {
                    return coordinatesInfo;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
                return null;
            }
        }

        public LocationShop LocationShopInfo(int locationId)
        {
            try
            {
                var LocationShopsInfo = sqliteconnection.Table<LocationShop>().Where(location => location.LocationId == locationId).FirstOrDefault();
                //var coordinatesInfo = sqliteconnection.Table<CoordinatesInformation>().FirstOrDefault(location=>location.Id==locationId);
                if (LocationShopsInfo != null)
                {
                    return LocationShopsInfo;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
                return null;
            }
        }
        public List<LocationShop> GetLocationShopList()
        {
            try
            {
                var locationShopInfo = sqliteconnection.Table<LocationShop>().ToList();

                //var coordinatesInfo = sqliteconnection.Table<CoordinatesInformation>().FirstOrDefault(location=>location.Id==locationId);
                if (locationShopInfo != null)
                {
                    return locationShopInfo;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
                return null;
            }
        }

        public LocationRental LocationRentalsInfo(int locationId)
        {
            try
            {
                var LocationRentalsInfo = sqliteconnection.Table<LocationRental>().Where(location => location.LocationId == locationId).FirstOrDefault();
                //var coordinatesInfo = sqliteconnection.Table<CoordinatesInformation>().FirstOrDefault(location=>location.Id==locationId);
                if (LocationRentalsInfo != null)
                {
                    return LocationRentalsInfo;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
                return null;
            }
        }
        public List<LocationRental> GetLocationRentalList()
        {
            try
            {
                var locationRentalInfo = sqliteconnection.Table<LocationRental>().ToList();

                //var coordinatesInfo = sqliteconnection.Table<CoordinatesInformation>().FirstOrDefault(location=>location.Id==locationId);
                if (locationRentalInfo != null)
                {
                    return locationRentalInfo;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
                return null;
            }
        }

        public LocationUsedVehicleSales LocationUsedVehicleSalesInfo(int locationId)
        {
            try
            {
                var LocationUsedVehicleSalesInfo = sqliteconnection.Table<LocationUsedVehicleSales>().Where(location => location.LocationId == locationId).FirstOrDefault();
                //var coordinatesInfo = sqliteconnection.Table<CoordinatesInformation>().FirstOrDefault(location=>location.Id==locationId);
                if (LocationUsedVehicleSalesInfo != null)
                {
                    return LocationUsedVehicleSalesInfo;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
                return null;
            }
        }
        public List<LocationUsedVehicleSales> GetLocationUsedVehiclesSalesList()
        {
            try
            {
                var locationUsedVehiclesSalesInfo = sqliteconnection.Table<LocationUsedVehicleSales>().ToList();

                //var coordinatesInfo = sqliteconnection.Table<CoordinatesInformation>().FirstOrDefault(location=>location.Id==locationId);
                if (locationUsedVehiclesSalesInfo != null)
                {
                    return locationUsedVehiclesSalesInfo;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
                return null;
            }
        }

        public void UpdateCoordinatesInfo(CoordinatesInformation coordinatesInfo)
        {
            try
            {
                var allCoordinates = sqliteconnection.Table<CoordinatesInformation>().ToList();
                var getCoordinate = allCoordinates.Where(X => X.LocationName == coordinatesInfo.LocationName) as CoordinatesInformation;
                if (getCoordinate == null)
                {
                    sqliteconnection.Insert(coordinatesInfo);
                }
                else
                {
                    //getCoordinate.Id = coordinatesInfo.Id;
                    getCoordinate.LocationId = coordinatesInfo.LocationId;
                    getCoordinate.Latitude = coordinatesInfo.Latitude;
                    getCoordinate.Longitude = coordinatesInfo.Longitude;
                    getCoordinate.City = coordinatesInfo.City;
                    getCoordinate.Country = coordinatesInfo.Country;
                    getCoordinate.LocationCode = coordinatesInfo.LocationCode;
                    getCoordinate.LocationName = coordinatesInfo.LocationName;
                    getCoordinate.State = coordinatesInfo.State;
                    getCoordinate.BuName = coordinatesInfo.BuName;
                    getCoordinate.BuNumber = coordinatesInfo.BuNumber;
                    getCoordinate.Street1 = coordinatesInfo.Street1;
                    getCoordinate.Street2 = coordinatesInfo.Street2;
                    getCoordinate.OperatingRegion = coordinatesInfo.OperatingRegion;
                    getCoordinate.OperatingRegionNo = coordinatesInfo.OperatingRegionNo;
                    getCoordinate.Zip = coordinatesInfo.Zip;
                    getCoordinate.TimeZone = coordinatesInfo.TimeZone;
                    getCoordinate.ProximityDistance = coordinatesInfo.ProximityDistance;
                    getCoordinate.OnDemand = coordinatesInfo.OnDemand;
                    getCoordinate.DrivingDistance = coordinatesInfo.DrivingDistance;
                    sqliteconnection.Update(getCoordinate);
                }
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }

        public void DeleteCoordinatesInfo()
        {
            try
            {
                sqliteconnection.Query<CoordinatesInformation>("delete from CoordinatesInformation");
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }
        public void DeleteLocationShopsInfo()
        {
            try
            {
                sqliteconnection.Query<LocationShop>("delete from LocationShop");
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }

        public void DeleteLocationRentalsInfo()
        {
            try
            {
                sqliteconnection.Query<LocationRental>("delete from LocationRental");
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }
        public void DeleteLocationUsedVehiclesInfo()
        {
            try
            {
                sqliteconnection.Query<LocationUsedVehicleSales>("delete from LocationUsedVehicleSales");
            }
            catch (Exception ex)
            {
                var msg = ex.Message;
            }
        }
        */
        #endregion


        #region IDisposable Support

        private bool disposedValue = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                }
                disposedValue = true;
            }
        }
        public void Dispose()
        {
            Dispose(true);
        }
        #endregion
    }
}

