     // Configuration: Add/remove repos here easily
const repositories = [
  {
    url: "https://github.com/atsuperman/play2/raw/main/",
    songs: [
   { file: "tamil_iragai_pole_clup_mix_tape.mp3", details: "Remix By dj jose" },
      { file: "Jorthaale wraith Vs Remix.m4a", details: "📀 Jorthaale (Wraith V Remix) (2021) / 🎙️ Asal Kolaar, ofRO / 🎼 Wraith V / 📝 Asal Kolaar" },
{ file: "vada vada Paiya mix.m4a", details: "💿 youtube Source NO1 AUDIO MIXER" }
 ]
  },

  {
    url: "https://raw.githubusercontent.com/atsuperman/O1/refs/heads/main/",
    songs: [
  { file: "Thuppuran.m4a", details: "📀 Thuppuran (2022) / 🎙️ ADK, Lucky Lakmina, Abu Karim Ismail / 🎼 Pasan Liyanage / 📝 ADK, Lucky Lakmina, Pasan Liyanage" }
  
    ]
  }
];

// Generate allSongs with encoded URLs
export const allSongs = repositories.flatMap(repo => 
  repo.songs.map(song => ({
    ...song,
    path: `${repo.url}${song.file}`.replace(/ /g, '%20') // Encode spaces
  }))
);
