using System;
using SQLite.Net.Attributes;
using Xamarin.Forms;

namespace DigitalAlbum
{
    [Table("MemorySharedCompanion")]
    public class MemorySharedCompanion
    {
        public MemorySharedCompanion() { }

        public string MemoryWith { get; set; }

        public string isLockedMemories { get; set; }

    }
}

