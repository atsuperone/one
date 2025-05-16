    // Configuration: Add/remove repos here easily
const repositories = [
  {
    url: "https://github.com/atsuperman/play2/raw/main/",
    songs: [
{ file: "Paal Vannam.mp3", details: "🎬 Paasam (1962) / 🎤 P. B. Srinivas, P. Susheela / 🎼 Viswanathan - Ramamoorthy" }, 
{ file: "Kavalaiyai Theerpadhu Naatiya.mp3", details: "🎬 Sivakavi (1943) / 🎙️ M. K. Thyagaraja Bhagavathar / 🎼 Papanasam Sivan / 📝 Papanasam Sivan" },
{ file: "Soppana Vaazhvil.mp3", details: "🎬 Sivakavi (1943) / 🎙️ M. K. Thyagaraja Bhagavathar / 🎼 Papanasam Sivan / 📝 Papanasam Sivan" },
{ file: "Vadhaname Chandra Bimbamo.mp3", details: "🎬 Sivakavi (1943) / 🎙️ M. K. Thyagaraja Bhagavathar / 🎼 Papanasam Sivan / 📝 Papanasam Sivan" },
{ file: "Vallalai Paadum Vaayal.mp3", details: "🎬 Sivakavi (1943) / 🎙️ M. K. Thyagaraja Bhagavathar / 🎼 Papanasam Sivan" },
{ file: "Vasantha Ruthu.mp3", details: "🎬 Sivakavi (1943) / 🎙️ M. K. Thyagaraja Bhagavathar, S. Jayalakshmi / 🎼 Papanasam Sivan / 📝 Papanasam Sivan" },
 ]
  },

  {
    url: "https://github.com/atsuperman/G1/raw/refs/heads/main/",
    songs: [
  { file: "Naanamo.m4a", details: "🎬 Aayirathil Oruvan (1965) / 🎙️ T. M. Soundararajan, P. Susheela / 🎼 Viswanathan Ramamoorthy / 📝 Kannadasan" }
  
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
