using System;
using System.Collections.Generic;

namespace DigitalAlbum
{
    public class MemoriesData
    {
        //public MemoriesData(){}

        public string LocationName { get; set; }

        public double Latitudes { get; set; }

        public double Longitudes { get; set; }

        public LocationDetails LocationDetails { get; set; }

        public string MemoryName { get; set; }

        public string DateOfMemory { get; set; }

        public string CompanionsNoCount { get; set; }

        public List<CompanionsData> CompanionsIncluded { get; set; }
    }
}
