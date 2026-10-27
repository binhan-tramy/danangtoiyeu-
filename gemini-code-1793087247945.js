/* ==========================================================================
   LOGIC TƯƠNG TÁC TẠP CHÍ: ĐÀ NẴNG TÔI YÊU — XƯA & NAY
   Đảm bảo mọi nút bấm, bộ lọc không dấu, thanh kéo Xưa & Nay,
   máy tính Pace chạy bộ và máy tính khẩu phần Bếp trưởng hoạt động 100%.
   ========================================================================== */

(function () {
  "use strict";

  const DATA = window.DANANG_DATA;
  const STORAGE_KEY = "danang_toi_yeu_saved_v1";

  // Trạng thái ứng dụng
  let state = {
    activeHeritageId: DATA.heritageComparisons[0].id,
    destFilter: {
      keyword: "",
      category: "all",
      area: "all",
      time: "all"
    },
    runCategory: "all",
    foodCategory: "all",
    galleryCategory: "all",
    currentLightboxIndex: 0,
    filteredGallery: [...DATA.gallery],
    savedIds: loadSavedIds()
  };

  // Hàm tiện ích: Bỏ dấu tiếng Việt để tìm kiếm mượt mà
  function removeVietnameseTones(str) {
    if (!str) return "";
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .toLowerCase()
      .trim();
  }

  // Hàm tạo ảnh SVG nghệ thuật dự phòng (không bao giờ lỗi ảnh)
  window.createFallbackSvg = function (title, subtitle) {
    const safeTitle = (title || "Đà Nẵng Tôi Yêu").replace(/"/g, "'");
    const safeSub = (subtitle || "Ấn Phẩm Du Lịch & Ẩm Thực").replace(/"/g, "'");
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0F2C59"/>
          <stop offset="60%" stop-color="#1E6B52"/>
          <stop offset="100%" stop-color="#C59B27"/>
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#g)"/>
      <circle cx="650" cy="110" r="55" fill="#F7D774" opacity="0.85"/>
      <path d="M0 380 Q 200 320 400 380 T 800 360 L 800 500 L 0 500 Z" fill="#FAF7F2" opacity="0.18"/>
      <text x="50%" y="46%" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-family="Georgia, serif" font-size="28" font-weight="bold">${safeTitle}</text>
      <text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle" fill="#F7D774" font-family="sans-serif" font-size="16">${safeSub}</text>
    </svg>`;
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  };

  // Lưu & Đọc LocalStorage
  function loadSavedIds() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveIdsToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.savedIds));
    } catch (e) {
      console.warn("Không thể lưu vào localStorage:", e);
    }
    updateSavedBadge();
  }

  function toggleSavedItem(id) {
    const idx = state.savedIds.indexOf(id);
    if (idx === -1) {
      state.savedIds.push(id);
    } else {
      state.savedIds.splice(idx, 1);
    }
    saveIdsToStorage();
    renderDestinations();
    renderRunningRoutes();
    renderCulinary();
    renderSavedDrawer();
  }

  function updateSavedBadge() {
    const badge = document.getElementById("savedCountBadge");
    if (badge) badge.textContent = state.savedIds.length;
  }

  // ==========================================================================
  // 1. KHỞI TẠO HEADER, HERO & CHẾ ĐỘ XƯA / NAY
  // ==========================================================================
  function initHeroAndNav() {
    const heroBackdrop = document.getElementById("heroBackdrop");
    const heroSection = document.getElementById("hero");
    const btnNow = document.getElementById("heroModeNow");
    const btnThen = document.getElementById("heroModeThen");
    const heroTitle = document.getElementById("heroTitle");

    if (heroBackdrop) {
      heroBackdrop.style.backgroundImage = `url('${DATA.siteConfig.heroImageNow}')`;
    }

    btnNow.addEventListener("click", () => {
      btnNow.classList.add("active");
      btnThen.classList.remove("active");
      heroSection.classList.remove("mode-then");
      heroBackdrop.style.backgroundImage = `url('${DATA.siteConfig.heroImageNow}')`;
      heroTitle.textContent = "Đà Nẵng Tôi Yêu: Giao Hòa Ký Ức, Sắc Biển & Nhịp Sống Mới";
    });

    btnThen.addEventListener("click", () => {
      btnThen.classList.add("active");
      btnNow.classList.remove("active");
      heroSection.classList.add("mode-then");
      heroBackdrop.style.backgroundImage = `url('${DATA.siteConfig.heroImageThen}')`;
      heroTitle.textContent = "Hoài Niệm Tourane Xưa: Bến Đò Hàn Giang & Phố Cổ Trầm Mặc";
    });

    // Menu di động
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const mainNav = document.getElementById("mainNav");
    mobileBtn.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      mobileBtn.setAttribute("aria-expanded", String(isOpen));
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => mainNav.classList.remove("open"));
    });

    // Tìm kiếm nhanh từ Hero
    const heroSearchInput = document.getElementById("globalHeroSearch");
    const heroSearchBtn = document.getElementById("heroSearchBtn");

    function triggerGlobalSearch() {
      const q = heroSearchInput.value.trim();
      if (!q) {
        document.getElementById("diem-den").scrollIntoView({ behavior: "smooth" });
        return;
      }
      const normQ = removeVietnameseTones(q);
      // Kiểm tra xem người dùng đang tìm món ăn, chạy bộ hay địa điểm
      const matchFood = DATA.culinaryRecipes.some((f) =>
        removeVietnameseTones(f.name + " " + f.summary).includes(normQ)
      );
      const matchRun = DATA.runningRoutes.some((r) =>
        removeVietnameseTones(r.name + " " + r.summary).includes(normQ)
      );

      if (matchRun && (normQ.includes("chay") || normQ.includes("pace") || normQ.includes("binh minh"))) {
        document.getElementById("chay-bo").scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (matchFood && !DATA.destinations.some((d) => removeVietnameseTones(d.name).includes(normQ))) {
        document.getElementById("am-thuc").scrollIntoView({ behavior: "smooth" });
        return;
      }

      // Mặc định đưa xuống bộ lọc địa điểm
      const destInput = document.getElementById("destSearchInput");
      destInput.value = q;
      state.destFilter.keyword = q;
      renderDestinations();
      document.getElementById("diem-den").scrollIntoView({ behavior: "smooth" });
    }

    heroSearchBtn.addEventListener("click", triggerGlobalSearch);
    heroSearchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") triggerGlobalSearch();
    });
  }

  // ==========================================================================
  // 2. CHUYÊN MỤC XƯA & NAY (BEFORE / AFTER SLIDER & TIMELINE)
  // ==========================================================================
  function initHeritageSection() {
    const tabsWrap = document.getElementById("heritageTabs");
    const sliderInput = document.getElementById("compSliderInput");
    const beforeClip = document.getElementById("compBeforeClip");
    const handle = document.getElementById("compHandle");

    // Render nút tab
    tabsWrap.innerHTML = DATA.heritageComparisons
      .map(
        (item) => `
        <button type="button" class="heritage-tab-btn ${
          item.id === state.activeHeritageId ? "active" : ""
        }" data-id="${item.id}">
          ${item.tabTitle}
        </button>
      `
      )
      .join("");

    tabsWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".heritage-tab-btn");
      if (!btn) return;
      state.activeHeritageId = btn.dataset.id;
      document.querySelectorAll(".heritage-tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderActiveComparison();
    });

    // Điều khiển thanh kéo Before / After
    function updateSliderPosition(val) {
      const pct = Math.min(95, Math.max(5, Number(val)));
      beforeClip.style.width = pct + "%";
      handle.style.left = pct + "%";
    }

    sliderInput.addEventListener("input", (e) => updateSliderPosition(e.target.value));

    renderActiveComparison();

    // Render Timeline
    const timelineWrap = document.getElementById("heritageTimeline");
    timelineWrap.innerHTML = DATA.timeline
      .map(
        (t) => `
        <article class="timeline-card">
          <span class="timeline-year">${t.year}</span>
          <h4>${t.title}</h4>
          <p>${t.desc}</p>
        </article>
      `
      )
      .join("");
  }

  function renderActiveComparison() {
    const item =
      DATA.heritageComparisons.find((c) => c.id === state.activeHeritageId) ||
      DATA.heritageComparisons[0];

    const beforeImg = document.getElementById("compBeforeImg");
    const afterImg = document.getElementById("compAfterImg");
    const beforeLabel = document.getElementById("compBeforeLabel");
    const afterLabel = document.getElementById("compAfterLabel");
    const storyWrap = document.getElementById("comparisonStory");

    beforeImg.src = item.beforeImg;
    beforeImg.alt = item.tabTitle + " - " + item.beforeYear;
    beforeImg.onerror = function () {
      this.src = window.createFallbackSvg(item.tabTitle, item.beforeYear);
    };

    afterImg.src = item.afterImg;
    afterImg.alt = item.tabTitle + " - " + item.afterYear;
    afterImg.onerror = function () {
      this.src = window.createFallbackSvg(item.tabTitle, item.afterYear);
    };

    beforeLabel.textContent = "XƯA • " + item.beforeYear;
    afterLabel.textContent = "NAY • " + item.afterYear;

    storyWrap.innerHTML = `
      <span class="badge-gold">ĐỐI CHIẾU TƯ LIỆU ĐÔ THỊ</span>
      <h3>${item.title}</h3>
      <p class="dropcap-text">${item.story}</p>
      <div class="story-meta-grid">
        <div class="story-meta-box">
          <strong>Ký ức Xưa (${item.beforeYear})</strong>
          <span>${item.thenNote}</span>
        </div>
        <div class="story-meta-box">
          <strong>Diện mạo Nay (${item.afterYear})</strong>
          <span>${item.nowNote}</span>
        </div>
      </div>
      <p class="card-source-tag">
        Nguồn đối chiếu: <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer">${item.sourceName} &#8599;</a>
      </p>
    `;
  }

  // ==========================================================================
  // 3. CHUYÊN MỤC ĐỊA ĐIỂM DU LỊCH & BỘ LỌC ĐA CHIỀU
  // ==========================================================================
  function initDestinationsSection() {
    const searchInput = document.getElementById("destSearchInput");
    const areaSelect = document.getElementById("destAreaSelect");
    const timeSelect = document.getElementById("destTimeSelect");
    const pillsWrap = document.getElementById("destCategoryPills");
    const resetBtn = document.getElementById("resetDestFilterBtn");

    searchInput.addEventListener("input", (e) => {
      state.destFilter.keyword = e.target.value;
      renderDestinations();
    });

    areaSelect.addEventListener("change", (e) => {
      state.destFilter.area = e.target.value;
      renderDestinations();
    });

    timeSelect.addEventListener("change", (e) => {
      state.destFilter.time = e.target.value;
      renderDestinations();
    });

    pillsWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".pill-btn");
      if (!btn) return;
      state.destFilter.category = btn.dataset.cat;
      pillsWrap.querySelectorAll(".pill-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderDestinations();
    });

    resetBtn.addEventListener("click", () => {
      state.destFilter = { keyword: "", category: "all", area: "all", time: "all" };
      searchInput.value = "";
      areaSelect.value = "all";
      timeSelect.value = "all";
      pillsWrap.querySelectorAll(".pill-btn").forEach((b, i) => b.classList.toggle("active", i === 0));
      renderDestinations();
    });

    renderDestinations();
  }

  function renderDestinations() {
    const grid = document.getElementById("destinationsGrid");
    const countEl = document.getElementById("destResultCount");
    const normKey = removeVietnameseTones(state.destFilter.keyword);

    const filtered = DATA.destinations.filter((d) => {
      const matchCat = state.destFilter.category === "all" || d.category === state.destFilter.category;
      const matchArea = state.destFilter.area === "all" || d.area === state.destFilter.area;
      const matchTime = state.destFilter.time === "all" || d.bestTime === state.destFilter.time;
      const searchableText = removeVietnameseTones(`${d.name} ${d.summary} ${d.area} ${d.category}`);
      const matchKey = !normKey || searchableText.includes(normKey);
      return matchCat && matchArea && matchTime && matchKey;
    });

    countEl.textContent = `Đang hiển thị ${filtered.length} / ${DATA.destinations.length} địa điểm`;

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="sources-card" style="grid-column: 1 / -1; text-align:center;">
          <h3>Không tìm thấy địa điểm trùng khớp</h3>
          <p>Chủ nhân hoặc độc giả hãy thử từ khóa khác hoặc bấm "Xóa bộ lọc" để xem toàn bộ danh thắng Đà Nẵng.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered
      .map((d) => {
        const isSaved = state.savedIds.includes(d.id);
        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.mapQuery)}`;
        return `
        <article class="editorial-card">
          <div class="card-media">
            <img src="${d.image}" alt="${d.name}" loading="lazy"
                 onerror="this.src=window.createFallbackSvg('${d.name}', '${d.area}')" />
            <span class="card-badge-top">${d.category}</span>
            <button type="button" class="card-fav-btn ${isSaved ? "saved" : ""}"
                    data-fav-id="${d.id}" aria-label="Lưu địa điểm ${d.name}">
              ${isSaved ? "&#9829;" : "&#9825;"}
            </button>
          </div>
          <div class="card-body">
            <div class="card-meta-line">
              <span>&#128205; ${d.area}</span>
              <span>•</span>
              <span>&#9728; Đẹp nhất: ${d.bestTime}</span>
              <span>•</span>
              <span>&#9201; ${d.duration}</span>
            </div>
            <h3 class="card-title">${d.name}</h3>
            <p class="card-excerpt">${d.summary}</p>
            <span class="card-source-tag">&#10003; Nguồn: ${d.sourceName}</span>
            <div class="card-actions">
              <button type="button" class="btn btn-primary btn-sm" data-open-dest="${d.id}">
                Xem Chi Tiết
              </button>
              <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark btn-sm">
                Bản Đồ Maps &#8599;
              </a>
            </div>
          </div>
        </article>
      `;
      })
      .join("");
  }

  // ==========================================================================
  // 4. CHUYÊN MỤC ĐẶC BIỆT: CUNG ĐƯỜNG CHẠY BỘ BIỂN & CÔNG CỤ TÍNH PACE
  // ==========================================================================
  function initRunningSection() {
    const distSelect = document.getElementById("runDistanceSelect");
    const paceSelect = document.getElementById("runPaceSelect");
    const resultBox = document.getElementById("runnerCalcResult");
    const pillsWrap = document.getElementById("runningCategoryPills");

    function calculateRunPlan() {
      const km = parseFloat(distSelect.value);
      const paceMin = parseFloat(paceSelect.value);
      const totalMinutes = Math.round(km * paceMin);
      const hours = Math.floor(totalMinutes / 60);
      const mins = totalMinutes % 60;
      const timeStr = hours > 0 ? `${hours} giờ ${mins} phút` : `${mins} phút`;
      const estCalories = Math.round(km * 62);

      // Tính giờ xuất phát để kết thúc lúc đón bình minh đẹp nhất (khoảng 05:55 sáng)
      const targetFinishMinutesFromMidnight = 5 * 60 + 55; // 05:55 AM
      const recStartTotal = Math.max(4 * 60 + 30, targetFinishMinutesFromMidnight - totalMinutes);
      const startH = String(Math.floor(recStartTotal / 60)).padStart(2, "0");
      const startM = String(recStartTotal % 60).padStart(2, "0");

      resultBox.innerHTML = `
        <div class="calc-result-main">
          Hoàn thành: ~${timeStr} • Tiêu hao ~${estCalories} kcal
        </div>
        <div class="calc-result-sub">
          Gợi ý xuất phát lúc <strong>${startH}:${startM} sáng</strong> để kịp đón khoảnh khắc bình minh rực rỡ trên biển Đà Nẵng lúc 05:55!
        </div>
      `;
    }

    distSelect.addEventListener("change", calculateRunPlan);
    paceSelect.addEventListener("change", calculateRunPlan);
    calculateRunPlan();

    pillsWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".pill-btn");
      if (!btn) return;
      state.runCategory = btn.dataset.runcat;
      pillsWrap.querySelectorAll(".pill-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderRunningRoutes();
    });

    renderRunningRoutes();
  }

  function renderRunningRoutes() {
    const grid = document.getElementById("runningRoutesGrid");
    const filtered = DATA.runningRoutes.filter(
      (r) => state.runCategory === "all" || r.category === state.runCategory
    );

    grid.innerHTML = filtered
      .map((r) => {
        const isSaved = state.savedIds.includes(r.id);
        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.mapQuery)}`;
        return `
        <article class="editorial-card">
          <div class="card-media">
            <img src="${r.image}" alt="${r.name}" loading="lazy"
                 onerror="this.src=window.createFallbackSvg('${r.name}', '${r.distanceRange}')" />
            <span class="card-badge-top">${r.category}</span>
            <button type="button" class="card-fav-btn ${isSaved ? "saved" : ""}"
                    data-fav-id="${r.id}" aria-label="Lưu cung đường ${r.name}">
              ${isSaved ? "&#9829;" : "&#9825;"}
            </button>
          </div>
          <div class="card-body">
            <h3 class="card-title">${r.name}</h3>
            <p class="card-excerpt">${r.summary}</p>
            <div class="running-stats-badges">
              <div class="run-stat-mini">
                <strong>Cự ly gợi ý</strong>
                <span>${r.distanceRange}</span>
              </div>
              <div class="run-stat-mini">
                <strong>Khung giờ vàng</strong>
                <span>${r.goldenHour}</span>
              </div>
              <div class="run-stat-mini">
                <strong>Địa hình</strong>
                <span>${r.elevation}</span>
              </div>
              <div class="run-stat-mini">
                <strong>Mặt đường</strong>
                <span>${r.terrain}</span>
              </div>
            </div>
            <div class="card-actions">
              <button type="button" class="btn btn-gold btn-sm" data-open-run="${r.id}">
                Lộ Trình &amp; Góc Chụp Bình Minh
              </button>
              <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark btn-sm">
                Điểm Xuất Phát &#8599;
              </a>
            </div>
          </div>
        </article>
      `;
      })
      .join("");
  }

  // ==========================================================================
  // 5. CHUYÊN MỤC BẾP TRƯỞNG & CÔNG THỨC ĐẶC SẢN
  // ==========================================================================
  function initCulinarySection() {
    const pillsWrap = document.getElementById("culinaryCategoryPills");
    pillsWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".pill-btn");
      if (!btn) return;
      state.foodCategory = btn.dataset.foodcat;
      pillsWrap.querySelectorAll(".pill-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderCulinary();
    });

    renderCulinary();
  }

  function renderCulinary() {
    const grid = document.getElementById("culinaryGrid");
    const filtered = DATA.culinaryRecipes.filter(
      (f) => state.foodCategory === "all" || f.category === state.foodCategory
    );

    grid.innerHTML = filtered
      .map((f) => {
        const isSaved = state.savedIds.includes(f.id);
        return `
        <article class="editorial-card">
          <div class="card-media">
            <img src="${f.image}" alt="${f.name}" loading="lazy"
                 onerror="this.src=window.createFallbackSvg('${f.name}', '${f.category}')" />
            <span class="card-badge-top">${f.category}</span>
            <button type="button" class="card-fav-btn ${isSaved ? "saved" : ""}"
                    data-fav-id="${f.id}" aria-label="Lưu công thức ${f.name}">
              ${isSaved ? "&#9829;" : "&#9825;"}
            </button>
          </div>
          <div class="card-body">
            <div class="card-meta-line">
              <span>&#127859; ${f.difficulty}</span>
              <span>•</span>
              <span>&#9201; Chuẩn bị: ${f.prepTime}</span>
              <span>•</span>
              <span>&#128293; Nấu: ${f.cookTime}</span>
            </div>
            <h3 class="card-title">${f.name}</h3>
            <p class="card-excerpt">${f.summary}</p>
            <span class="card-source-tag">&#9733; Có công thức định lượng &amp; Bí quyết Bếp Trưởng</span>
            <div class="card-actions">
              <button type="button" class="btn btn-terracotta btn-sm" data-open-recipe="${f.id}">
                Mở Công Thức Đầu Bếp
              </button>
            </div>
          </div>
        </article>
      `;
      })
      .join("");
  }

  // ==========================================================================
  // 6. CHUYÊN MỤC ALBUM ẢNH & LIGHTBOX TOÀN MÀN HÌNH
  // ==========================================================================
  function initGallerySection() {
    const pillsWrap = document.getElementById("galleryCategoryPills");
    pillsWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".pill-btn");
      if (!btn) return;
      state.galleryCategory = btn.dataset.galcat;
      pillsWrap.querySelectorAll(".pill-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderGallery();
    });

    renderGallery();

    // Sự kiện Lightbox
    const lightbox = document.getElementById("lightboxModal");
    document.getElementById("closeLightboxBtn").addEventListener("click", closeLightbox);
    document.getElementById("prevLightboxBtn").addEventListener("click", () => stepLightbox(-1));
    document.getElementById("nextLightboxBtn").addEventListener("click", () => stepLightbox(1));

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  function renderGallery() {
    const grid = document.getElementById("galleryGrid");
    state.filteredGallery = DATA.gallery.filter(
      (g) => state.galleryCategory === "all" || g.category === state.galleryCategory
    );

    grid.innerHTML = state.filteredGallery
      .map(
        (g, index) => `
        <figure class="gallery-item" data-gal-index="${index}" tabindex="0" role="button" aria-label="Phóng to ảnh ${g.title}">
          <img src="${g.image}" alt="${g.title}" loading="lazy"
               onerror="this.src=window.createFallbackSvg('${g.title}', '${g.category}')" />
          <figcaption class="gallery-overlay">
            <span>${g.category}</span>
            <h4>${g.title}</h4>
          </figcaption>
        </figure>
      `
      )
      .join("");

    grid.querySelectorAll(".gallery-item").forEach((el) => {
      el.addEventListener("click", () => openLightbox(Number(el.dataset.galIndex)));
      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(Number(el.dataset.galIndex));
        }
      });
    });
  }

  function openLightbox(index) {
    state.currentLightboxIndex = index;
    updateLightboxView();
    const lb = document.getElementById("lightboxModal");
    lb.classList.add("active");
    lb.setAttribute("aria-hidden", "false");
  }

  function closeLightbox() {
    const lb = document.getElementById("lightboxModal");
    lb.classList.remove("active");
    lb.setAttribute("aria-hidden", "true");
  }

  function stepLightbox(dir) {
    const len = state.filteredGallery.length;
    if (!len) return;
    state.currentLightboxIndex = (state.currentLightboxIndex + dir + len) % len;
    updateLightboxView();
  }

  function updateLightboxView() {
    const item = state.filteredGallery[state.currentLightboxIndex];
    if (!item) return;
    const img = document.getElementById("lightboxImg");
    const cap = document.getElementById("lightboxCaption");

    img.src = item.image;
    img.alt = item.title;
    img.onerror = function () {
      this.src = window.createFallbackSvg(item.title, item.category);
    };

    cap.innerHTML = `
      <strong>${item.title}</strong> (${item.category})<br/>
      <span>${item.caption}</span><br/>
      <small>&#128247; ${item.cameraNote}</small>
    `;
  }

  // ==========================================================================
  // 7. MODAL CHI TIẾT (ĐỊA ĐIỂM / CUNG ĐƯỜNG CHẠY / CÔNG THỨC ĐẦU BẾP)
  // ==========================================================================
  function openModalWithHtml(html) {
    const modal = document.getElementById("detailModal");
    const body = document.getElementById("modalBodyContent");
    body.innerHTML = html;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeDetailModal() {
    const modal = document.getElementById("detailModal");
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function openDestinationModal(id) {
    const d = DATA.destinations.find((x) => x.id === id);
    if (!d) return;
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.mapQuery)}`;

    openModalWithHtml(`
      <span class="badge-gold">${d.category} • ${d.area}</span>
      <h2 style="font-family:var(--font-serif);color:var(--ocean-deep);margin:0.4rem 0 1rem;">${d.name}</h2>
      <p style="margin-bottom:1rem;">${d.summary}</p>
      <div class="chef-secret-box">
        <h4>Điểm nhấn không thể bỏ lỡ:</h4>
        <ul style="padding-left:1.2rem;margin-top:0.5rem;">
          ${d.highlights.map((h) => `<li>${h}</li>`).join("")}
        </ul>
      </div>
      <div class="story-meta-box" style="margin-bottom:1.25rem;">
        <strong>Kinh nghiệm thực tế &amp; Thời điểm đẹp nhất (${d.bestTime}):</strong>
        <span>${d.practicalTip}</span>
      </div>
      <div class="card-actions no-print">
        <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Mở Định Vị Google Maps &#8599;</a>
        <a href="${d.sourceUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark">Nguồn: ${d.sourceName} &#8599;</a>
      </div>
    `);
  }

  function openRunningModal(id) {
    const r = DATA.runningRoutes.find((x) => x.id === id);
    if (!r) return;
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.mapQuery)}`;

    openModalWithHtml(`
      <span class="badge-gold">CẨM NANG CHẠY BỘ ĐÀ NẴNG • ${r.category}</span>
      <h2 style="font-family:var(--font-serif);color:var(--ocean-deep);margin:0.4rem 0 0.8rem;">${r.name}</h2>
      <p style="margin-bottom:1rem;">${r.summary}</p>

      <div class="running-stats-badges">
        <div class="run-stat-mini"><strong>Cự ly:</strong> <span>${r.distanceRange}</span></div>
        <div class="run-stat-mini"><strong>Khung giờ vàng:</strong> <span>${r.goldenHour}</span></div>
        <div class="run-stat-mini"><strong>Độ dốc:</strong> <span>${r.elevation}</span></div>
        <div class="run-stat-mini"><strong>Địa hình:</strong> <span>${r.terrain}</span></div>
      </div>

      <h3 style="font-family:var(--font-serif);color:var(--ocean-deep);margin:1rem 0 0.6rem;">Chi Tiết Chặng Chạy</h3>
      <ul class="chef-steps-list">
        ${r.routeSteps.map((s) => `<li>${s}</li>`).join("")}
      </ul>

      <div class="chef-secret-box">
        <h4>&#128248; Góc chụp ảnh thành tích &amp; Chèn chỉ số chạy bộ đẹp nhất:</h4>
        <p>${r.photoSpot}</p>
        <p style="margin-top:0.5rem;"><strong>Tiện ích trên đường chạy:</strong> ${r.facilities}</p>
      </div>

      <div class="card-actions no-print">
        <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-gold">Mở Điểm Xuất Phát Trên Google Maps &#8599;</a>
      </div>
    `);
  }

  function openRecipeModal(id, targetServings) {
    const f = DATA.culinaryRecipes.find((x) => x.id === id);
    if (!f) return;
    const servings = targetServings || f.baseServings;
    const ratio = servings / f.baseServings;

    const html = `
      <span class="badge-gold">BÍ QUYẾT BẾP TRƯỞNG • ${f.category}</span>
      <h2 style="font-family:var(--font-serif);color:var(--ocean-deep);margin:0.4rem 0 0.6rem;">${f.name}</h2>
      <p style="font-style:italic;color:var(--text-muted);margin-bottom:1rem;">"${f.story}"</p>

      <div class="recipe-portion-bar no-print">
        <div>
          <strong>Máy tính định lượng nguyên liệu:</strong>
          <span>Đang tính chuẩn cho <strong>${servings} người thưởng thức</strong></span>
        </div>
        <div class="portion-btns">
          ${[2, 4, 6, 8]
            .map(
              (num) => `
            <button type="button" class="portion-btn ${num === servings ? "active" : ""}"
                    data-recipe-id="${f.id}" data-servings="${num}">
              ${num} người
            </button>
          `
            )
            .join("")}
        </div>
      </div>

      <h3 style="font-family:var(--font-serif);color:var(--ocean-deep);margin-bottom:0.65rem;">
        1. Nguyên Liệu Tuyển Chọn (Cho ${servings} khẩu phần)
      </h3>
      <ul class="ingredients-list">
        ${f.ingredients
          .map((ing) => {
            const calcAmount = Math.round(ing.amount * ratio * 10) / 10;
            return `<li><span>${ing.item}</span><strong>${calcAmount} ${ing.unit}</strong></li>`;
          })
          .join("")}
      </ul>

      <h3 style="font-family:var(--font-serif);color:var(--ocean-deep);margin-bottom:0.65rem;">
        2. Quy Trình Chế Biến Chuẩn Đầu Bếp
      </h3>
      <ol class="chef-steps-list">
        ${f.steps.map((step, i) => `<li><strong>Bước ${i + 1}:</strong> ${step}</li>`).join("")}
      </ol>

      <div class="chef-secret-box">
        <h4>&#128161; Bí Mật Của Bếp Trưởng (Chef's Secret Tip)</h4>
        <p>${f.chefSecret}</p>
      </div>

      <div class="card-actions no-print">
        <button type="button" class="btn btn-terracotta" onclick="window.print()">
          In Công Thức / Lưu PDF
        </button>
        <a href="${f.sourceUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark">
          Nguồn tham khảo: ${f.sourceName} &#8599;
        </a>
      </div>
    `;

    openModalWithHtml(html);

    // Gắn sự kiện đổi khẩu phần
    document.querySelectorAll(".portion-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        openRecipeModal(btn.dataset.recipeId, Number(btn.dataset.servings));
      });
    });
  }

  // ==========================================================================
  // 8. NGUỒN TƯ LIỆU, THẺ TÁC GIẢ & SỔ TAY YÊU THÍCH
  // ==========================================================================
  function initSourcesAndAuthor() {
    const listEl = document.getElementById("sourcesList");
    listEl.innerHTML = DATA.officialSources
      .map(
        (s) => `
        <li>
          <a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.name} &#8599;</a>
          <p style="font-size:0.88rem;color:var(--text-muted);margin-top:0.25rem;">${s.desc}</p>
        </li>
      `
      )
      .join("");

    // Render thẻ tác giả thông minh (ẩn liên kết trống)
    const cfg = DATA.siteConfig;
    const authorBox = document.getElementById("authorCardBox");
    let contactButtons = "";
    if (cfg.contactEmail && !cfg.contactEmail.includes("[")) {
      contactButtons += `<a href="mailto:${cfg.contactEmail}" class="btn btn-outline-dark btn-sm">Email Tác Giả</a>`;
    }
    if (cfg.facebookUrl && !cfg.facebookUrl.includes("[")) {
      contactButtons += `<a href="${cfg.facebookUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark btn-sm">Facebook</a>`;
    }
    if (cfg.zaloPhone && !cfg.zaloPhone.includes("[")) {
      contactButtons += `<a href="https://zalo.me/${cfg.zaloPhone}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark btn-sm">Zalo</a>`;
    }

    authorBox.innerHTML = `
      <span class="badge-gold">${cfg.authorBadge}</span>
      <h3>Lời Ngỏ Từ ${cfg.authorName}</h3>
      <blockquote class="author-quote">
        "${cfg.authorQuote}"
      </blockquote>
      ${contactButtons ? `<div class="card-actions" style="margin-bottom:1rem;">${contactButtons}</div>` : ""}

      <div class="contribution-box">
        <h4 style="color:var(--ocean-deep);margin-bottom:0.5rem;">Ghi Chú &amp; Đóng Góp Kỷ Niệm Đà Nẵng</h4>
        <p style="font-size:0.84rem;color:var(--text-muted);margin-bottom:0.65rem;">
          Soạn nhanh kỷ niệm, cung đường chạy bộ hoặc quán ngon tâm đắc của bạn để sao chép lưu trữ:
        </p>
        <input type="text" id="contribTitle" placeholder="Tiêu đề kỷ niệm / Địa điểm / Món ăn..." />
        <textarea id="contribText" rows="3" placeholder="Cảm nhận hoặc bí quyết riêng của bạn về Đà Nẵng..."></textarea>
        <button type="button" class="btn btn-primary btn-sm" id="copyContribBtn">Sao Chép Bản Ghi Chú</button>
        <span id="contribFeedback" style="font-size:0.82rem;color:var(--emerald-run);margin-left:0.5rem;"></span>
      </div>
    `;

    document.getElementById("copyContribBtn").addEventListener("click", () => {
      const t = document.getElementById("contribTitle").value.trim() || "Kỷ niệm Đà Nẵng";
      const c = document.getElementById("contribText").value.trim();
      const fb = document.getElementById("contribFeedback");
      if (!c) {
        fb.textContent = "Vui lòng nhập nội dung ghi chú trước khi sao chép.";
        return;
      }
      const formatted = `[ĐÀ NẴNG TÔI YÊU] ${t}\nNội dung: ${c}`;
      navigator.clipboard?.writeText(formatted);
      fb.textContent = "Đã sao chép vào bộ nhớ tạm!";
    });
  }

  function renderSavedDrawer() {
    const body = document.getElementById("savedDrawerBody");
    if (state.savedIds.length === 0) {
      body.innerHTML = `
        <p style="color:var(--text-muted);text-align:center;margin-top:2rem;">
          Sổ tay hiện đang trống. Hãy bấm vào biểu tượng trái tim &#9825; trên các Điểm đến, Cung đường chạy bộ hoặc Công thức nấu ăn để lưu lại hành trình yêu thích.
        </p>
      `;
      return;
    }

    const allItems = [
      ...DATA.destinations.map((x) => ({ ...x, typeLabel: "Điểm đến" })),
      ...DATA.runningRoutes.map((x) => ({ ...x, typeLabel: "Chạy bộ" })),
      ...DATA.culinaryRecipes.map((x) => ({ ...x, typeLabel: "Công thức" }))
    ];

    const savedObjects = allItems.filter((item) => state.savedIds.includes(item.id));
    body.innerHTML = savedObjects
      .map(
        (item) => `
        <div class="saved-item-row">
          <div>
            <small style="color:var(--terracotta);font-weight:700;">${item.typeLabel}</small>
            <div style="font-weight:600;color:var(--ocean-deep);">${item.name}</div>
          </div>
          <button type="button" class="btn-text-reset" data-remove-saved="${item.id}">Bỏ lưu</button>
        </div>
      `
      )
      .join("");
  }

  // ==========================================================================
  // 9. LẮNG NGHE SỰ KIỆN TOÀN CỤC & KHỞI CHẠY
  // ==========================================================================
  function initGlobalEvents() {
    document.body.addEventListener("click", (e) => {
      const favBtn = e.target.closest("[data-fav-id]");
      if (favBtn) {
        toggleSavedItem(favBtn.dataset.favId);
        return;
      }

      const openDestBtn = e.target.closest("[data-open-dest]");
      if (openDestBtn) {
        openDestinationModal(openDestBtn.dataset.openDest);
        return;
      }

      const openRunBtn = e.target.closest("[data-open-run]");
      if (openRunBtn) {
        openRunningModal(openRunBtn.dataset.openRun);
        return;
      }

      const openRecipeBtn = e.target.closest("[data-open-recipe]");
      if (openRecipeBtn) {
        openRecipeModal(openRecipeBtn.dataset.openRecipe);
        return;
      }

      const removeSavedBtn = e.target.closest("[data-remove-saved]");
      if (removeSavedBtn) {
        toggleSavedItem(removeSavedBtn.dataset.removeSaved);
      }
    });

    // Đóng Modal chi tiết
    document.getElementById("closeModalBtn").addEventListener("click", closeDetailModal);
    document.getElementById("detailModal").addEventListener("click", (e) => {
      if (e.target.id === "detailModal") closeDetailModal();
    });

    // Ngăn kéo Sổ tay yêu thích
    const drawerBackdrop = document.getElementById("savedDrawerBackdrop");
    document.getElementById("openSavedDrawerBtn").addEventListener("click", () => {
      renderSavedDrawer();
      drawerBackdrop.classList.add("active");
      drawerBackdrop.setAttribute("aria-hidden", "false");
    });

    document.getElementById("closeSavedDrawerBtn").addEventListener("click", () => {
      drawerBackdrop.classList.remove("active");
      drawerBackdrop.setAttribute("aria-hidden", "true");
    });

    drawerBackdrop.addEventListener("click", (e) => {
      if (e.target === drawerBackdrop) {
        drawerBackdrop.classList.remove("active");
      }
    });

    // Xuất file JSON sổ tay
    document.getElementById("exportSavedBtn").addEventListener("click", () => {
      const payload = {
        exportedAt: new Date().toISOString(),
        savedIds: state.savedIds
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "so-tay-da-nang-toi-yeu.json";
      a.click();
      URL.revokeObjectURL(url);
    });

    document.getElementById("clearSavedBtn").addEventListener("click", () => {
      state.savedIds = [];
      saveIdsToStorage();
      renderDestinations();
      renderRunningRoutes();
      renderCulinary();
      renderSavedDrawer();
    });

    // Hỗ trợ bàn phím (Escape, Mũi tên Lightbox)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeDetailModal();
        closeLightbox();
        drawerBackdrop.classList.remove("active");
      }
      const lb = document.getElementById("lightboxModal");
      if (lb.classList.contains("active")) {
        if (e.key === "ArrowLeft") stepLightbox(-1);
        if (e.key === "ArrowRight") stepLightbox(1);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    updateSavedBadge();
    initHeroAndNav();
    initHeritageSection();
    initDestinationsSection();
    initRunningSection();
    initCulinarySection();
    initGallerySection();
    initSourcesAndAuthor();
    initGlobalEvents();
  });
})();