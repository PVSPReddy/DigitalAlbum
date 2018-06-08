using System;
using System.Collections.Generic;

namespace DigitalAlbum
{
    public class CompanionsData
    {
        //public CompanionsData(){}

        public string CompanionName { get; set; }

        public string DateOfBirth { get; set; }

        public string PrimaryMobileNo { get; set; }

        public List<string> MobileNo { get; set; }

        public string PrimaryEmailId { get; set; }

        public List<string> EmailId { get; set; }

        public string Address { get; set; }

        public LocationDetails PermanentLocationDetails { get; set; }

        public LocationDetails CurrentLocationDetails { get; set; }

        public string MemoriesCount { get; set; }
    }
}
