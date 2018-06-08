using System;
using SQLite.Net.Attributes;
using Xamarin.Forms;

namespace DigitalAlbum
{
    [Table("MemoriesTable")]
    public class MemoriesTable
    {
        public MemoriesTable() { }

        [PrimaryKey, Unique]
        public string MemoryId { get; set; }

        public string MemoryWith { get; set; }

        public string MemoryImage { get; set; }

        public string MemoryDescription { get; set; }

        public string MemoryDate { get; set; }

        public string MemoryTime { get; set; }

        public string MemoryLocation { get; set; }

        public string MemoryType { get; set; }

        public bool ShallLockThisMemory { get; set; }
    }
}

