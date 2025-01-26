document.addEventListener("DOMContentLoaded", function () {
  const carouselImages = document.querySelector("#carousel-images");
  const thumbnails = document.querySelector("#carousel-thumbnails");

  function loadImages() {
    // Data set gambar dan spesifikasi tank
    const data = {
      USSR: {
        images: ["IS-2-1944.png", "KV-2-1940.png", "BT-7.png", "T-34-85.png"],
        flag: "ussr-flag.png",
        specs: [
          {
            year: "1944",
            length: "9.9 m",
            weight: "46 tons",
            speed: "37 km/h",
            armament: "122 mm gun",
            history: "Used in the Battle of Berlin",
            video_id: "EIIZpI4MD6E",
            youtube_url: "https://www.youtube.com/watch?v=EIIZpI4MD6E",
            start_time: 0,
          },
          {
            year: "1940",
            length: "6.8 m",
            weight: "52 tons",
            speed: "26 km/h",
            armament: "152 mm howitzer",
            history: "Used in the Winter War",
            video_id: "iu3G5j9KpPM",
            youtube_url: "https://www.youtube.com/watch?v=iu3G5j9KpPM",
            start_time: 0,
          },
          {
            year: "1935",
            length: "5.66 m",
            weight: "13.8 tons",
            speed: "72 km/h",
            armament: "45 mm gun",
            history: "Used in the Spanish Civil War",
            video_id: "ukZkfb_vfzM",
            youtube_url: "https://www.youtube.com/watch?v=ukZkfb_vfzM",
            start_time: 0,
          },
          {
            year: "1944",
            length: "8.15 m",
            weight: "32 tons",
            speed: "55 km/h",
            armament: "85 mm gun",
            history: "Used in the Battle of Kursk",
            video_id: "0v5zdE21gXU",
            youtube_url: "https://www.youtube.com/watch?v=0v5zdE21gXU",
            start_time: 0,
          },
        ],
      },
      BRITISH: {
        images: [
          "centurion-MKII.png",
          "mk-2-matilda.png",
          "sherman-firefly.png",
          "churchill.png",
          "cromwell.png",
        ],
        flag: "british-flag.png",
        specs: [
          {
            year: "1945",
            length: "7.6 m",
            weight: "51 tons",
            speed: "35 km/h",
            armament: "105 mm gun",
            history: "Used in the Korean War",
            video_id: "ROOluJTSBbc",
            youtube_url: "https://www.youtube.com/watch?v=ROOluJTSBbc",
            start_time: 248,
          },
          {
            year: "1939",
            length: "5.6 m",
            weight: "27 tons",
            speed: "24 km/h",
            armament: "40 mm gun",
            history: "Used in the Battle of France",
            video_id: "SxyjkwBPIVU",
            youtube_url: "https://www.youtube.com/watch?v=SxyjkwBPIVU",
            start_time: 0,
          },
          {
            year: "1944",
            length: "6.27 m",
            weight: "33 tons",
            speed: "40 km/h",
            armament: "17-pounder gun",
            history: "Used in the Battle of Normandy",
            video_id: "HMbiedA9RUw",
            youtube_url: "https://www.youtube.com/watch?v=HMbiedA9RUw",
            start_time: 0,
          },
          {
            year: "1941",
            length: "7.44 m",
            weight: "40 tons",
            speed: "24 km/h",
            armament: "75 mm gun",
            history: "Used in the Battle of El Alamein",
            video_id: "MeGGyoTro_o",
            youtube_url: "https://www.youtube.com/watch?v=MeGGyoTro_o",
            start_time: 0,
          },
          {
            year: "1944",
            length: "6.35 m",
            weight: "28 tons",
            speed: "64 km/h",
            armament: "75 mm gun",
            history: "Used in the Battle of the Bulge",
            video_id: "d1e00L_t6PQ",
            youtube_url: "https://www.youtube.com/watch?v=d1e00L_t6PQ",
            start_time: 0,
          },
        ],
      },
      USA: {
        images: ["M2A4.png", "M4-sherman.png", "M4A1.png", "pershing.png"],
        flag: "usa-flag.png",
        specs: [
          {
            year: "1940",
            length: "4.52 m",
            weight: "14 tons",
            speed: "56 km/h",
            armament: "37 mm gun",
            history: "Used in the Pacific Theater",
            video_id: "aL2pjE1FmBw",
            youtube_url: "https://www.youtube.com/watch?v=aL2pjE1FmBw",
            start_time: 0,
          },
          {
            year: "1942",
            length: "5.84 m",
            weight: "30 tons",
            speed: "48 km/h",
            armament: "75 mm gun",
            history: "Used in the Battle of the Bulge",
            video_id: "lGeVfA9PVS0",
            youtube_url: "https://www.youtube.com/watch?v=lGeVfA9PVS0",
            start_time: 300,
          },
          {
            year: "1942",
            length: "5.84 m",
            weight: "30 tons",
            speed: "48 km/h",
            armament: "76 mm gun",
            history: "Used in the Battle of Normandy",
            video_id: "Lq_9gTEA-As",
            youtube_url: "https://www.youtube.com/watch?v=Lq_9gTEA-As",
            start_time: 0,
          },
          {
            year: "1945",
            length: "8.65 m",
            weight: "46 tons",
            speed: "40 km/h",
            armament: "90 mm gun",
            history: "Used in the Korean War",
            video_id: "d7XlhcuWi_8",
            youtube_url: "https://www.youtube.com/watch?v=d7XlhcuWi_8",
            start_time: 0,
          },
        ],
      },
      GERMANY: {
        images: [
          "Pz-38(t)F.png",
          "Pz-II-F.png",
          "Pz-IV-H.png",
          "TigerII(H).png",
        ],
        flag: "germany-flag.png",
        specs: [
          {
            year: "1939",
            length: "4.61 m",
            weight: "9.7 tons",
            speed: "42 km/h",
            armament: "37 mm gun",
            history: "Used in the Invasion of Poland",
            video_id: "example1",
            youtube_url: "https://www.youtube.com/watch?v=example1",
            start_time: 0,
          },
          {
            year: "1940",
            length: "4.81 m",
            weight: "9.5 tons",
            speed: "40 km/h",
            armament: "20 mm gun",
            history: "Used in the Battle of France",
            video_id: "example1",
            youtube_url: "https://www.youtube.com/watch?v=example1",
            start_time: 0,
          },
          {
            year: "1943",
            length: "7.02 m",
            weight: "25 tons",
            speed: "40 km/h",
            armament: "75 mm gun",
            history: "Used in the Battle of Kursk",
            video_id: "example1",
            youtube_url: "https://www.youtube.com/watch?v=example1",
            start_time: 0,
          },
          {
            year: "1944",
            length: "10.2 m",
            weight: "69.8 tons",
            speed: "41.5 km/h",
            armament: "88 mm gun",
            history: "Used in the Battle of the Bulge",
            video_id: "example1",
            youtube_url: "https://www.youtube.com/watch?v=example1",
            start_time: 0,
          },
        ],
      },
    };

    const folders = Object.keys(data);
    let thumbnailIndex = 0;

    // Clear konten sebelumnya
    carouselImages.innerHTML = "";
    thumbnails.innerHTML = "";
    folders.forEach((folder) => {
      const folderImages = data[folder].images;
      const folderSpecs = data[folder].specs;
      const flagSrc = `./resourche/img/flag/${data[folder].flag}`;
      console.log(`Flag path for ${folder}: ${flagSrc}`);
      folderImages.forEach((image, index) => {
        // Membuat elemen gambar untuk carousel
        const imgElement = document.createElement("img");
        imgElement.src = `./resourche/img/Tank/${folder}/${image}`;
        imgElement.alt = `${folder} Image ${index + 1}`;
        imgElement.classList.add("carousel-image");
        imgElement.style.display = "block";

        // Membuat elemen nama tank di pojok kiri atas
        const tankName = document.createElement("div");
        tankName.classList.add("tank-name");
        tankName.textContent = image.split(".")[0];

        // Membuat elemen bendera di pojok kanan atas
        const flag = document.createElement("img");
        flag.src = flagSrc;
        flag.alt = `${folder} Flag`;
        flag.classList.add("country-flag");
        // untuk debugging aja :v
        console.log(`Flag element for ${folder}:`, flag);

        // Membuat div baru untuk nama tank dan bendera
        const infoContainer = document.createElement("div");
        infoContainer.classList.add("info-container");
        infoContainer.appendChild(tankName);
        infoContainer.appendChild(flag);

        // Membuat div baru untuk spesifikasi tank
        const specs = folderSpecs[index];
        const specsContainer = document.createElement("div");
        specsContainer.classList.add("specs-container");
        specsContainer.innerHTML = `
          <p><strong>Tahun Pembuatan:</strong> ${specs.year}</p>
          <p><strong>Panjang:</strong> ${specs.length}</p>
          <p><strong>Berat:</strong> ${specs.weight}</p>
          <p><strong>Kecepatan:</strong> ${specs.speed}</p>
          <p><strong>Senjata:</strong> ${specs.armament}</p>
          <p><strong>Sejarah Penggunaan:</strong> ${specs.history}</p>
        `;

        // buat elemen link YouTube
        const youtubeLink = document.createElement("a");
        const youtubeUrl = `${specs.youtube_url}&t=${specs.start_time}s`;
        youtubeLink.href = youtubeUrl;
        youtubeLink.classList.add("youtube-link");
        youtubeLink.target = "_blank";

        //buat elemen gambar thumbnail YouTube
        const youtubeThumbnail = document.createElement("img");
        youtubeThumbnail.src = `https://img.youtube.com/vi/${specs.video_id}/hqdefault.jpg`;
        youtubeThumbnail.alt = "YouTube Thumbnail";
        youtubeThumbnail.classList.add("youtube-thumbnail");

        // buat elemen tombol play dengan ikon SVG
        const playButton = document.createElement("img");
        playButton.src = "./resourche/img/play-button.svg";
        playButton.alt = "Play Button";
        playButton.classList.add("play-button");

        youtubeLink.appendChild(youtubeThumbnail);
        youtubeLink.appendChild(playButton);

        // Event listener untuk membuka modal pada desktop
        youtubeLink.addEventListener("click", function (event) {
          if (window.innerWidth > 600) {
            event.preventDefault();
            openModal(specs.video_id, specs.start_time);
          }
        });

        // Membuat div baru untuk menggabungkan gambar dan spesifikasi
        const imgAndSpecsContainer = document.createElement("div");
        imgAndSpecsContainer.classList.add("img-and-specs-container");
        imgAndSpecsContainer.appendChild(imgElement);
        imgAndSpecsContainer.appendChild(specsContainer);

        // Membungkus elemen gambar, spesifikasi, nama tank, dan bendera
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("carousel-image-container");
        imgContainer.appendChild(infoContainer);
        imgContainer.appendChild(imgAndSpecsContainer);

        // Membuat div baru untuk link YouTube
        const youtubeContainer = document.createElement("div");
        youtubeContainer.classList.add("youtube-container");
        youtubeContainer.appendChild(youtubeLink);

        // Menambahkan container ke carousel
        carouselImages.appendChild(imgContainer);
        carouselImages.appendChild(youtubeContainer);

        // Membuat elemen thumbnail
        const thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("thumbnail-container");

        const thumbnailImage = document.createElement("img");
        thumbnailImage.src = `./resourche/img/Tank/${folder}/${image}`;
        thumbnailImage.alt = `${folder} Thumbnail ${index + 1}`;
        thumbnailImage.classList.add("thumbnail");
        thumbnailImage.dataset.index = thumbnailIndex;

        const thumbnailName = document.createElement("span");
        thumbnailName.classList.add("thumbnail-name");
        thumbnailName.textContent = image.split(".")[0];

        thumbnailElement.appendChild(thumbnailImage);
        thumbnailElement.appendChild(thumbnailName);
        thumbnails.appendChild(thumbnailElement);

        thumbnailIndex++;
      });
    });

    // Menambahkan event listener untuk mengubah gambar berdasarkan thumbnail
    const thumbImages = document.querySelectorAll(".thumbnail");
    thumbImages.forEach((thumb) => {
      thumb.addEventListener("click", function () {
        thumbImages.forEach((tn) => tn.classList.remove("active"));
        this.classList.add("active");

        const index = this.dataset.index;
        const imageContainers = carouselImages.querySelectorAll(
          ".carousel-image-container"
        );
        imageContainers.forEach((container, idx) => {
          container.style.display = idx === parseInt(index) ? "block" : "none";
          const flag = container.querySelector(".country-flag");
          if (flag) {
            flag.style.display = idx === parseInt(index) ? "block" : "none";
          }
        });

        const youtubeContainers = carouselImages.querySelectorAll(
          ".youtube-container"
        );
        youtubeContainers.forEach((container, idx) => {
          container.style.display = idx === parseInt(index) ? "block" : "none";
        });
      });
    });

    // Menampilkan gambar pertama secara otomatis
    const firstThumbnail = document.querySelector(".thumbnail");
    if (firstThumbnail) {
      firstThumbnail.click();
    }
  }

  loadImages();

  // Fungsi untuk membuka modal
  function openModal(videoId, startTime) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-button">&times;</span>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}?start=${startTime}&origin=${window.location.origin}" frameborder="0" allowfullscreen></iframe>
      </div>
    `;
    document.body.appendChild(modal);

    const closeButton = modal.querySelector(".close-button");
    closeButton.addEventListener("click", function () {
      modal.remove();
    });

    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.remove();
      }
    });
  }
});