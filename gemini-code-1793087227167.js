/* ==========================================================================
   CƠ SỞ DỮ LIỆU TẠP CHÍ: ĐÀ NẴNG TÔI YÊU — XƯA & NAY
   Bao gồm: Cấu hình tác giả, Xưa & Nay, Điểm đến, Cung đường chạy bộ,
   Công thức Bếp trưởng, Album ảnh và Nguồn đối chiếu xác thực.
   ========================================================================== */

window.DANANG_DATA = {
  // 1. CẤU HÌNH THƯƠNG HIỆU & TÁC GIẢ (Chủ nhân có thể tùy chỉnh dễ dàng)
  siteConfig: {
    siteName: "ĐÀ NẴNG TÔI YÊU",
    heroImageNow: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1600&q=80",
    heroImageThen: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80",
    authorName: "Người Yêu Đà Nẵng",
    authorBadge: "TỦ SÁCH DI SẢN & NĂNG LƯỢNG SỐNG",
    authorQuote: "Đà Nẵng trong tôi là những bước chân đón bình minh dọc bờ biển Mỹ Khê lộng gió, là nhịp cầu nối đôi bờ ký ức xưa và nay, và là hương vị quê nhà ấm áp trong từng món ngon xứ Quảng.",
    contactEmail: "", // Điền email thật nếu muốn hiện nút gửi email trực tiếp
    facebookUrl: "",  // Tự động ẩn nếu để trống
    zaloPhone: ""     // Tự động ẩn nếu để trống
  },

  // 2. DỮ LIỆU ĐỐI CHIẾU ĐÀ NẴNG XƯA & NAY
  heritageComparisons: [
    {
      id: "song-han",
      tabTitle: "Đôi bờ Sông Hàn",
      title: "Từ Bến Đò Ngang Tourane Đến Thành Phố Của Những Cây Cầu",
      beforeYear: "Thập niên 1960–1980",
      afterYear: "Đà Nẵng Hiện Đại",
      beforeImg: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
      afterImg: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80",
      story: "Xưa kia, dòng Hàn giang chia đôi nhịp sống của thành phố với những chuyến đò ngang mộc mạc nối bờ Tây sầm uất và bờ Đông cát trắng. Kể từ năm 2000 khi Cầu Sông Hàn — cây cầu quay đầu tiên do kỹ sư Việt Nam tự thiết kế — khánh thành, tiếp nối bởi Cầu Rồng, Cầu Trần Thị Lý và Cầu Thuận Phước, đôi bờ sông Hàn đã vươn mình thành biểu tượng kiến trúc rực rỡ của Đà Nẵng.",
      thenNote: "Bến đò Hàn, tàu thuyền neo đậu dọc đường Bạch Đằng cổ kính.",
      nowNote: "Đại lộ Bạch Đằng - Trần Hưng Đạo, Cầu Rồng phun lửa và Cầu Sông Hàn quay.",
      sourceName: "Cổng Thông tin Điện tử TP. Đà Nẵng",
      sourceUrl: "https://danang.gov.vn"
    },
    {
      id: "bien-my-khe",
      tabTitle: "Biển Mỹ Khê & Sơn Trà",
      title: "Từ Làng Chài Ven Biển Xưa Đến Bờ Biển Quyến Rũ Nhất Hành Tinh",
      beforeYear: "Trước năm 1995",
      afterYear: "Đà Nẵng Hiện Đại",
      beforeImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      afterImg: "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1200&q=80",
      story: "Dải bờ biển kéo dài từ chân bán đảo Sơn Trà đến Non Nước xưa kia là những xóm chài yên bình ẩn mình sau rặng phi lao chắn cát, nơi thuyền thúng ra khơi từ lúc tinh mơ. Ngày nay, cung đường biển Võ Nguyên Giáp – Hoàng Sa đã trở thành tâm điểm du lịch và thể thao biển quốc tế nhưng vẫn giữ trọn nét bình dị của chợ cá Mân Thái mỗi buổi bình minh.",
      thenNote: "Rặng phi lao, thuyền thúng làng chài Mân Thái – Phước Mỹ.",
      nowNote: "Cung đường Võ Nguyên Giáp, bãi tắm chuẩn quốc tế và đường chạy bộ ven biển.",
      sourceName: "Cổng Thông tin Du lịch Đà Nẵng",
      sourceUrl: "https://danangfantasticity.com"
    },
    {
      id: "bao-tang-cham",
      tabTitle: "Bảo tàng Điêu khắc Chăm",
      title: "Hơn Một Thế Kỷ Lưu Giữ Di Sản Cổ Bên Dòng Hàn Giang",
      beforeYear: "Khởi dựng 1915",
      afterYear: "Di sản Quốc gia Đặc biệt",
      beforeImg: "https://images.unsplash.com/photo-1599708153386-62bf3f035c78?auto=format&fit=crop&w=1200&q=80",
      afterImg: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80",
      story: "Được khởi công xây dựng từ năm 1915 và mở cửa năm 1919 theo thiết kế của hai kiến trúc sư người Pháp, Bảo tàng Điêu khắc Chăm là chứng nhân lịch sử bền bỉ nhất giữa lòng Đà Nẵng. Trải qua hơn một thế kỷ, công trình vẫn giữ nguyên đường nét kiến trúc Gothic giao hòa cùng mái vòm Champa cổ kính.",
      thenNote: "Tòa nhà cổ viện Viễn Đông Bác cổ (EFEO) bên bờ sông Hàn.",
      nowNote: "Không gian trưng bày các Bảo vật Quốc gia giữa trung tâm thành phố.",
      sourceName: "Bảo tàng Điêu khắc Chăm Đà Nẵng",
      sourceUrl: "https://chammuseum.vn"
    }
  ],

  // 3. DÒNG THỜI GIAN LỊCH SỬ
  timeline: [
    {
      year: "1888 – 1950",
      title: "Hình thành Đô thị Cảng Tourane",
      desc: "Phát triển hệ thống thương cảng dọc bờ Tây sông Hàn, đường Bạch Đằng và Bảo tàng Điêu khắc Chăm (1915)."
    },
    {
      year: "01/01/1997",
      title: "Thành phố Trực thuộc Trung ương",
      desc: "Đà Nẵng chính thức tách khỏi tỉnh Quảng Nam - Đà Nẵng, mở ra kỷ nguyên quy hoạch đô thị mới."
    },
    {
      year: "2000 – 2013",
      title: "Kỷ nguyên Những Cây Cầu Biểu Tượng",
      desc: "Khánh thành Cầu Sông Hàn (2000), Cầu Thuận Phước (2009), Cầu Rồng và Cầu Trần Thị Lý (2013)."
    },
    {
      year: "2018 – Nay",
      title: "Đô thị Du lịch, Sự kiện & Thể thao Biển",
      desc: "Tâm điểm của Cầu Vàng, lễ hội pháo hoa quốc tế và những giải chạy Marathon ven biển quy mô lớn."
    }
  ],

  // 4. DANH MỤC 8 ĐỊA ĐIỂM DU LỊCH NỔI BẬT
  destinations: [
    {
      id: "dest-ngu-hanh-son",
      name: "Danh thắng Ngũ Hành Sơn & Làng đá Non Nước",
      category: "Núi & Tâm linh",
      area: "Ngũ Hành Sơn",
      bestTime: "Bình minh",
      duration: "2.5 – 3 giờ",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=900&q=80",
      summary: "Quần thể 5 ngọn núi đá vôi Kim - Mộc - Thủy - Hỏa - Thổ uy nghi cùng hệ thống động Huyền Không, chùa Linh Ứng cổ kính và làng nghề điêu khắc đá truyền thống hơn 400 năm.",
      highlights: [
        "Động Huyền Không với luồng ánh sáng tự nhiên chiếu rọi huyền ảo vào buổi sáng.",
        "Vọng Giang Đài và Vọng Hải Đài ngắm toàn cảnh biển Non Nước.",
        "Làng đá mỹ nghệ Non Nước — Di sản văn hóa phi vật thể quốc gia."
      ],
      practicalTip: "Nên đi vào khung giờ 07:00 – 09:30 sáng để thời tiết mát mẻ và đón tia nắng chiếu thẳng xuống động Huyền Không.",
      mapQuery: "Danh thắng Ngũ Hành Sơn Đà Nẵng",
      sourceName: "Cổng TTĐT TP. Đà Nẵng",
      sourceUrl: "https://danang.gov.vn"
    },
    {
      id: "dest-son-tra",
      name: "Bán đảo Sơn Trà & Chùa Linh Ứng Bãi Bụt",
      category: "Biển & Bán đảo",
      area: "Sơn Trà",
      bestTime: "Bình minh",
      duration: "3 – 4 giờ",
      image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=900&q=80",
      summary: "Lá phổi xanh nguyên sinh ôm trọn vịnh Đà Nẵng, nơi tọa lạc tượng Phật Bà Quan Âm cao 67m hướng nhìn ra biển Đông bình yên và đỉnh Bàn Cờ huyền thoại.",
      highlights: [
        "Chùa Linh Ứng Bãi Bụt với kiến trúc thanh tịnh nhìn trọn vòng cung biển Mỹ Khê.",
        "Đỉnh Bàn Cờ và Cây Đa Ngàn Năm giữa rừng nguyên sinh.",
        "Cơ hội bắt gặp Voọc chà vá chân nâu — 'Nữ hoàng linh trưởng' quý hiếm."
      ],
      practicalTip: "Đường lên đỉnh Bàn Cờ và cây đa có độ dốc cao, cần kiểm tra phanh xe kỹ và tuân thủ quy định phương tiện tại bán đảo.",
      mapQuery: "Chùa Linh Ứng Bãi Bụt Sơn Trà Đà Nẵng",
      sourceName: "Danang FantastiCity",
      sourceUrl: "https://danangfantasticity.com"
    },
    {
      id: "dest-bien-my-khe",
      name: "Bãi biển Mỹ Khê & Công viên Biển Đông",
      category: "Biển & Bán đảo",
      area: "Sơn Trà",
      bestTime: "Bình minh",
      duration: "2 – 3 giờ",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
      summary: "Bờ cát trắng mịn trải dài, độ dốc thoai thoải và làn nước ấm quanh năm — điểm hẹn lý tưởng để đón bình minh, tắm biển và chạy bộ mỗi sớm mai.",
      highlights: [
        "Bình minh rực rỡ nhuộm vàng mặt biển từ 05:15 – 06:00 sáng.",
        "Đàn chim bồ câu tại Công viên Biển Đông.",
        "Không gian thể thao biển sôi động nhưng vẫn vô cùng thư thái."
      ],
      practicalTip: "Buổi sáng sớm từ 05:00 đến 06:30 là thời điểm biển êm, không khí trong lành nhất để chạy bộ và ngắm ngư dân kéo lưới.",
      mapQuery: "Bãi biển Mỹ Khê Đà Nẵng",
      sourceName: "Danang FantastiCity",
      sourceUrl: "https://danangfantasticity.com"
    },
    {
      id: "dest-cau-rong",
      name: "Cầu Rồng & Cầu Quay Sông Hàn",
      category: "Cầu & Kiến trúc",
      area: "Hải Châu",
      bestTime: "Về đêm",
      duration: "1.5 – 2 giờ",
      image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=900&q=80",
      summary: "Biểu tượng kiến trúc hiện đại của Đà Nẵng với thiết kế rồng thép vươn ra biển lớn, kết hợp màn trình diễn phun lửa và phun nước sôi động vào dịp cuối tuần.",
      highlights: [
        "Cầu Rồng phun lửa và phun nước lúc 21:00 các tối cuối tuần và lễ lớn.",
        "Phố đi bộ Bạch Đằng và Cầu Tình Yêu rực sáng ánh đèn.",
        "Cầu Sông Hàn xoay 90 độ mở đường cho tàu thuyền về đêm."
      ],
      practicalTip: "Đứng tại khu vực đường Trần Hưng Đạo hoặc đầu cầu phía Bạch Đằng trước 20:45 để có góc quan sát trọn vẹn nhất.",
      mapQuery: "Cầu Rồng Đà Nẵng",
      sourceName: "Cổng TTĐT TP. Đà Nẵng",
      sourceUrl: "https://danang.gov.vn"
    },
    {
      id: "dest-bao-tang-cham",
      name: "Bảo tàng Điêu khắc Chăm Đà Nẵng",
      category: "Văn hóa & Bảo tàng",
      area: "Hải Châu",
      bestTime: "Ban ngày",
      duration: "1.5 – 2 giờ",
      image: "https://images.unsplash.com/photo-1599708153386-62bf3f035c78?auto=format&fit=crop&w=900&q=80",
      summary: "Nơi lưu giữ bộ sưu tập hiện vật điêu khắc Champa lớn nhất thế giới với nhiều Bảo vật Quốc gia vô giá bằng đá sa thạch và đồng.",
      highlights: [
        "Chiêm ngưỡng Đài thờ Mỹ Sơn E1, Đài thờ Trà Kiệu và Tượng Bồ tát Tara.",
        "Kiến trúc Pháp cổ giao hòa với không gian hoa sứ trắng thanh bình.",
        "Hệ thống thuyết minh tự động đa ngôn ngữ giàu chiều sâu lịch sử."
      ],
      practicalTip: "Kết hợp tham quan Bảo tàng Điêu khắc Chăm và dạo bộ sang Công viên APEC ngay đối diện.",
      mapQuery: "Bảo tàng Điêu khắc Chăm Đà Nẵng",
      sourceName: "Bảo tàng Điêu khắc Chăm",
      sourceUrl: "https://chammuseum.vn"
    },
    {
      id: "dest-ba-na",
      name: "Đỉnh Núi Chúa Bà Nà & Cầu Vàng",
      category: "Cầu & Kiến trúc",
      area: "Hòa Vang & Liên Chiểu",
      bestTime: "Ban ngày",
      duration: "Cả ngày",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=900&q=80",
      summary: "Khu nghỉ dưỡng trên độ cao 1.487m so với mực nước biển, nơi khí hậu bốn mùa hội tụ trong một ngày và kiệt tác Cầu Vàng vắt ngang lưng chừng mây.",
      highlights: [
        "Cầu Vàng với đôi bàn tay rêu phong nâng đỡ dải lụa vàng giữa sương mù.",
        "Tuyến cáp treo xuyên qua rừng nguyên sinh và thác Tóc Tiên.",
        "Chùa Linh Ứng Bà Nà tĩnh lặng giữa mây trời."
      ],
      practicalTip: "Nên đi chuyến cáp treo đầu tiên trong ngày để chụp ảnh tại Cầu Vàng khi sương sớm còn bảng lảng.",
      mapQuery: "Cầu Vàng Bà Nà Hills Đà Nẵng",
      sourceName: "Danang FantastiCity",
      sourceUrl: "https://danangfantasticity.com"
    },
    {
      id: "dest-hai-van-quan",
      name: "Đèo Hải Vân & Di tích Hải Vân Quan",
      category: "Núi & Tâm linh",
      area: "Hòa Vang & Liên Chiểu",
      bestTime: "Hoàng hôn",
      duration: "2 – 3 giờ",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80",
      summary: "Cung đèo hùng vĩ bậc nhất Việt Nam nơi dãy Trường Sơn đâm ngang ra biển, trên đỉnh là Hải Vân Quan uy nghiêm với danh hiệu 'Thiên hạ đệ nhất hùng quan'.",
      highlights: [
        "Di tích Hải Vân Quan vừa được trùng tu khang trang, uy cổ.",
        "Khúc cua chữ U và tầm nhìn ôm trọn vịnh Đà Nẵng cùng vịnh Lăng Cô.",
        "Đoạn đường sắt Bắc - Nam uốn lượn qua vách núi và cầu vòm Đồn Cả."
      ],
      practicalTip: "Buổi chiều từ 15:30 – 17:30 là khung giờ lý tưởng để ngắm ánh chiều tà phủ lên vịnh biển.",
      mapQuery: "Hải Vân Quan Đà Nẵng",
      sourceName: "Cổng TTĐT TP. Đà Nẵng",
      sourceUrl: "https://danang.gov.vn"
    },
    {
      id: "dest-nam-o",
      name: "Ghềnh Đá Nam Ô & Làng Nghề Nước Mắm Cổ",
      category: "Biển & Bán đảo",
      area: "Hòa Vang & Liên Chiểu",
      bestTime: "Bình minh",
      duration: "2 giờ",
      image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=900&q=80",
      summary: "Mũi đá hoang sơ phủ rêu xanh mỗi độ xuân về và làng nghề nước mắm truyền thống hàng trăm năm tuổi dưới chân đèo Hải Vân.",
      highlights: [
        "Bãi đá rêu xanh Nam Ô tuyệt đẹp khi thủy triều rút vào buổi sớm.",
        "Trải nghiệm làng nghề nước mắm Nam Ô — Di sản văn hóa phi vật thể quốc gia.",
        "Thưởng thức món Gỏi cá Nam Ô trứ danh ngay tại làng chài."
      ],
      practicalTip: "Kiểm tra lịch thủy triều rút vào sáng sớm để chiêm ngưỡng trọn vẹn các thảm đá ven biển.",
      mapQuery: "Rạn Nam Ô Đà Nẵng",
      sourceName: "Cổng TTĐT TP. Đà Nẵng",
      sourceUrl: "https://danang.gov.vn"
    }
  ],

  // 5. CHUYÊN MỤC ĐẶC BIỆT: 5 CUNG ĐƯỜNG CHẠY BỘ BIỂN & CÔNG VIÊN ĐÀ NẴNG TUYỆT ĐẸP
  runningRoutes: [
    {
      id: "run-my-khe-man-thai",
      name: "Cung đường Bình minh Biển Mỹ Khê – Phạm Văn Đồng – Mân Thái",
      category: "Ven biển Bình minh",
      distanceRange: "5 km – 10 km",
      terrain: "Đường bằng phẳng, vỉa hè lát đá rộng dọc biển",
      goldenHour: "05:00 – 06:30 sáng",
      elevation: "Độ dốc thấp (+12m)",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
      summary: "Cung đường chạy bộ buổi sáng được yêu thích bậc nhất Đà Nẵng: xuất phát từ Công viên Biển Đông chạy dọc đường Võ Nguyên Giáp – Hoàng Sa hướng về làng chài Mân Thái và tượng Phật Bà chùa Linh Ứng.",
      routeSteps: [
        "Km 0 – Km 2: Xuất phát tại Công viên Biển Đông (Phạm Văn Đồng), khởi động nhẹ dưới hàng dừa biển.",
        "Km 2 – Km 5: Chạy dọc vỉa hè biển Hoàng Sa đến bãi biển Mân Thái, ngắm mặt trời nhô lên từ đường chân trời và nhịp sống ngư dân buổi sớm.",
        "Km 5 – Km 10: Quay đầu tại nút giao chân núi Sơn Trà trở về lại Công viên Biển Đông để giãn cơ (Cool-down)."
      ],
      photoSpot: "Khung hình mặt trời mọc rực rỡ phía sau những chiếc thuyền thúng Mân Thái và dáng chùa Linh Ứng ẩn hiện từ xa — cực kỳ hoàn hảo để chèn chỉ số Pace và cự ly buổi sáng.",
      facilities: "Có bãi giữ xe sớm tại Công viên Biển Đông, vòi nước tráng chân và nhiều hàng nước dừa tươi mát lạnh.",
      mapQuery: "Công viên Biển Đông Võ Nguyên Giáp Đà Nẵng"
    },
    {
      id: "run-doi-bo-song-han",
      name: "Cung đường Di sản Đôi Bờ Sông Hàn (Vòng Lặp 3 Cây Cầu)",
      category: "Đôi bờ Sông Hàn",
      distanceRange: "6 km – 12 km",
      terrain: "Vỉa hè phố đi bộ rộng, gió sông thoáng mát",
      goldenHour: "05:15 – 06:45 sáng hoặc 17:30 – 19:00 chiều",
      elevation: "Có nhịp dốc nhẹ khi chạy qua cầu (+35m)",
      image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=900&q=80",
      summary: "Hành trình kết nối hai bờ Đông - Tây sông Hàn qua đường Bạch Đằng và đường Trần Hưng Đạo, giúp người chạy vừa rèn luyện sức bền vừa tận hưởng vẻ đẹp kiến trúc của những cây cầu biểu tượng.",
      routeSteps: [
        "Km 0 – Km 3: Xuất phát từ đuôi Cầu Rồng (đường Bạch Đằng), chạy dọc bờ sông qua Cầu Sông Hàn hướng về phía Thuận Phước.",
        "Km 3 – Km 6: Băng qua cầu Sông Hàn sang đường Trần Hưng Đạo, chạy qua Cầu Tình Yêu và tượng Cá Chép Hóa Rồng.",
        "Km 6+: Mở rộng vòng chạy về phía cầu Nguyễn Văn Trỗi (cầu đi bộ màu vàng) để hoàn thành cự ly 10km – 12km."
      ],
      photoSpot: "Chụp tại sàn gỗ đường Bạch Đằng hoặc trên cầu đi bộ Nguyễn Văn Trỗi với nền là Cầu Rồng và mặt nước sông Hàn phẳng lặng buổi sớm.",
      facilities: "Vỉa hè liền mạch, không vướng xe cộ phía sát bờ sông, nhiều ghế đá và trạm nước uống tự động.",
      mapQuery: "Phố đi bộ Bạch Đằng Đà Nẵng"
    },
    {
      id: "run-son-tra-linh-ung",
      name: "Cung đường Bán Đảo Sơn Trà – Chùa Linh Ứng – Bãi Cháy (Long Run & Leo Dốc)",
      category: "Bán đảo & Leo dốc",
      distanceRange: "10 km – 21.1 km",
      terrain: "Đường nhựa ven biển kết hợp dốc núi uốn lượn",
      goldenHour: "05:00 – 07:30 sáng cuối tuần",
      elevation: "Độ cao tích lũy tốt (+180m đến +350m)",
      image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=900&q=80",
      summary: "Cung đường tập luyện cuối tuần (Long Run) lý tưởng để rèn luyện cơ chân và nhịp thở giữa bầu không khí rừng nguyên sinh trong lành, một bên là vách núi xanh thẳm, một bên là biển cả bao la.",
      routeSteps: [
        "Giai đoạn 1 (Khởi động 3km): Chạy bằng phẳng dọc đường Hoàng Sa dưới chân bán đảo.",
        "Giai đoạn 2 (Rèn sức bền leo dốc 4km): Chinh phục con dốc thoai thoải dẫn lên Chùa Linh Ứng Bãi Bụt và hướng về phía Cây Đa Ngàn Năm.",
        "Giai đoạn 3 (Đổ dốc an toàn): Kiểm soát sải chân ngắn, thả lỏng vai khi chạy về lại bãi biển Mân Thái."
      ],
      photoSpot: "Khúc cua lưng chừng đèo Hoàng Sa nơi nhìn toàn cảnh vòng cung biển Đà Nẵng trải dài dưới ánh nắng ban mai.",
      facilities: "Không khí mát hơn nội đô 2–3 độ C; nên mang theo bình nước cá nhân (Soft Flask) hoặc đai chạy bộ.",
      mapQuery: "Đường Hoàng Sa Bán đảo Sơn Trà Đà Nẵng"
    },
    {
      id: "run-cong-vien-apec",
      name: "Cung đường Xanh Công Viên APEC – Cầu Nguyễn Văn Trỗi – Công Viên 29/3",
      category: "Công viên Xanh",
      distanceRange: "3 km – 6 km",
      terrain: "Đường nội bộ công viên và cầu đi bộ êm chân",
      goldenHour: "05:30 – 07:00 sáng",
      elevation: "Đường bằng phẳng (+10m)",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80",
      summary: "Lựa chọn hoàn hảo cho những buổi chạy phục hồi nhẹ nhàng (Easy / Recovery Run), hít thở hương cây cỏ quanh hồ nước và tận hưởng nhịp sống thư thái của người dân Đà thành.",
      routeSteps: [
        "Tuyến 1 (Cầu Nguyễn Văn Trỗi – Công viên bờ Đông): Chạy trên cây cầu thép lịch sử dành riêng cho người đi bộ và chạy bộ, hoàn toàn không có khói bụi.",
        "Tuyến 2 (Vòng quanh hồ Công viên 29/3): Đường chạy dưới tán cây cổ thụ rợp bóng mát, mỗi vòng hồ khoảng 1.5km rất dễ kiểm soát số vòng."
      ],
      photoSpot: "Giữa nhịp vòm vàng rực của cầu cổ Nguyễn Văn Trỗi hoặc thảm cỏ xanh trước mái vòm Cánh Diều Công viên APEC.",
      facilities: "Khu vực tập xà đơn, giãn cơ ngoài trời miễn phí, nhiều cây xanh che mát ngay cả khi nắng lên.",
      mapQuery: "Cầu Nguyễn Văn Trỗi Đà Nẵng"
    },
    {
      id: "run-nguyen-tat-thanh",
      name: "Cung đường Vịnh Đà Nẵng – Đường Nguyễn Tất Thành – Nam Ô",
      category: "Ven biển Bình minh",
      distanceRange: "8 km – 15 km",
      terrain: "Vỉa hè ven vịnh thẳng tắp, tầm nhìn hướng đèo Hải Vân",
      goldenHour: "05:00 – 06:30 sáng",
      elevation: "Đường thẳng bằng phẳng (+15m)",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
      summary: "Một trong những cung đường ven vịnh dài và thoáng nhất miền Trung, nơi người chạy có thể phóng tầm mắt ngắm trọn dãy núi Hải Vân hùng vĩ phía Bắc và bán đảo Sơn Trà phía Đông.",
      routeSteps: [
        "Km 0 – Km 4: Xuất phát từ cầu Phú Lộc chạy dọc vỉa hè lát đá đường Nguyễn Tất Thành.",
        "Km 4 – Km 8: Tiếp tục sải bước hướng về bãi biển Xuân Thiều và mũi đá Nam Ô trong làn gió vịnh êm dịu.",
        "Hoàn thành cự ly và thưởng thức ly nước chanh muối hoặc bữa sáng nhẹ bên bờ biển."
      ],
      photoSpot: "Chụp dọc hành lang biển Nguyễn Tất Thành với hậu cảnh là dãy núi Hải Vân trùng điệp trong sương sớm.",
      facilities: "Vỉa hè cực rộng, ít giao cắt ngã tư phía sát biển, rất phù hợp để giữ nhịp Tempo Run ổn định.",
      mapQuery: "Đường Nguyễn Tất Thành Đà Nẵng"
    }
  ],

  // 6. CHUYÊN MỤC BẾP TRƯỞNG: 6 ĐẶC SẢN ĐÀ NẴNG & CÔNG THỨC CHẾ BIẾN
  culinaryRecipes: [
    {
      id: "food-mi-quang",
      name: "Mì Quảng Tôm Thịt Trứng Cút Chuẩn Vị Quảng Đà",
      category: "Món Nước Tinh Túy",
      prepTime: "30 phút",
      cookTime: "45 phút",
      difficulty: "Chuẩn Đầu Bếp Gia Đình",
      baseServings: 4,
      image: "https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=900&q=80",
      summary: "Linh hồn ẩm thực Đà Nẵng với sợi mì tráng từ gạo quê dẻo thơm, chan xăm xắp thứ nước nhân (nước lèo) đậm đà dậy mùi dầu phụng phi củ nén, ăn kèm rau sống 9 vị và bánh tráng mè nướng giòn.",
      story: "Khác với các món bún phở chan ngập nước, Mì Quảng đúng điệu chỉ chan một lượng nước nhân cô đặc vừa đủ thấm đều từng sợi mì. Sự hòa quyện giữa vị béo của dầu phụng, mùi thơm nồng của củ nén (hành tăm) và vị giòn mát của bắp chuối bào tạo nên bản giao hưởng vị giác khó quên.",
      ingredients: [
        { item: "Sợi mì Quảng tươi (loại tráng mỏng dẻo)", amount: 800, unit: "g" },
        { item: "Tôm đất tươi (hoặc tôm sú cỡ vừa)", amount: 300, unit: "g" },
        { item: "Thịt ba chỉ heo (chọn phần liền nạc mỡ)", amount: 300, unit: "g" },
        { item: "Xương ống heo (để ninh nước dùng ngọt thanh)", amount: 500, unit: "g" },
        { item: "Trứng cút luộc bóc vỏ", amount: 16, unit: "quả" },
        { item: "Củ nén (hành tăm) giã dập", amount: 40, unit: "g" },
        { item: "Dầu phụng (dầu lạc) nguyên chất", amount: 60, unit: "ml" },
        { item: "Đậu phụng rang giòn giã dập", amount: 80, unit: "g" },
        { item: "Rau sống 9 vị (bắp chuối, cải con, húng lủi, giá...)", amount: 400, unit: "g" },
        { item: "Bánh tráng mè nướng giòn", amount: 4, unit: "cái" }
      ],
      steps: [
        "Tuyển chọn & Ninh nước cốt: Chần sơ xương ống heo với nước sôi và chút muối, rửa sạch rồi ninh lửa nhỏ trong 40 phút để lấy khoảng 1.2 lít nước dùng trong và ngọt hậu.",
        "Ướp nguyên liệu: Thịt ba chỉ thái lát vừa ăn, tôm cắt râu rửa sạch. Ướp riêng tôm và thịt với củ nén giã nhuyễn, nước mắm ngon, chút bột nghệ tươi (tạo sắc vàng óng tự nhiên) và tiêu xay trong 20 phút.",
        "Kỹ thuật khử dầu phụng & củ nén: Bắc nồi lên bếp, cho dầu phụng vào đun nóng rồi thả củ nén giã dập vào phi đến khi dậy mùi thơm đặc trưng. Cho chút màu điều vào tạo sắc đỏ cam ấm áp.",
        "Rim nhân & Nấu nước lèo: Cho thịt ba chỉ vào xào săn trước, tiếp tục cho tôm và trứng cút vào đảo đều. Chế nước ninh xương vào xâm xấp, rim lửa nhỏ 15 phút cho nước nhân sánh nhẹ và thấm sâu vào từng miếng thịt, con tôm.",
        "Trình bày chuẩn Bếp Trưởng: Xếp lớp rau sống tươi giòn dưới đáy tô, trải sợi mì Quảng lên trên, xếp tôm, thịt, trứng cút hài hòa. Chan 1,5 vá nước nhân nóng hổi, rắc đậu phụng rang, hành ngò, lát ớt xanh và đặt cạnh miếng bánh tráng nướng."
      ],
      chefSecret: "Bí quyết vàng của đầu bếp xứ Quảng nằm ở sự kết hợp giữa Dầu phụng ép nguyên chất và Củ nén (hành tăm) giã tay. Khi phi củ nén trong dầu phụng nóng, tinh dầu tiết ra giúp khử hoàn toàn mùi tanh của tôm thịt và tạo nên hương thơm mộc mạc không loại hành tỏi nào thay thế được.",
      sourceName: "Di sản Văn hóa phi vật thể Quốc gia (2024)",
      sourceUrl: "https://danangfantasticity.com"
    },
    {
      id: "food-bun-cha-ca",
      name: "Bún Chả Cá Đà Nẵng Nước Dùng Thanh Ngọt",
      category: "Món Nước Tinh Túy",
      prepTime: "35 phút",
      cookTime: "40 phút",
      difficulty: "Chuẩn Đầu Bếp Gia Đình",
      baseServings: 4,
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",
      summary: "Tô bún nóng hổi dậy hương thơm của chả cá thu, cá mối quết dai giòn tự nhiên, hòa quyện trong làn nước dùng trong veo ngọt dịu từ xương cá, bí đỏ, bắp cải và măng khô.",
      story: "Một buổi sáng sau khi chạy bộ dọc biển Mỹ Khê, thưởng thức tô Bún Chả Cá nóng hổi kèm chút mắm ruốc thơm nồng và hành tím ngâm chua ngọt chính là trải nghiệm ẩm thực thuần túy nhất của người Đà Nẵng.",
      ingredients: [
        { item: "Chả cá Đà Nẵng (50% chả chiên, 50% chả hấp)", amount: 400, unit: "g" },
        { item: "Xương cá thu hoặc cá cờ tươi (ninh nước dùng)", amount: 500, unit: "g" },
        { item: "Bún tươi sợi nhỏ", amount: 800, unit: "g" },
        { item: "Bí đỏ cắt miếng vuông vừa ăn", amount: 200, unit: "g" },
        { item: "Bắp cải trắng và su hào", amount: 250, unit: "g" },
        { item: "Cà chua chín đỏ và thơm (dứa)", amount: 200, unit: "g" },
        { item: "Măng khô xé sợi (đã luộc mềm)", amount: 100, unit: "g" },
        { item: "Mắm ruốc Huế/Đà Nẵng pha loãng", amount: 30, unit: "g" }
      ],
      steps: [
        "Ninh nước ngọt từ xương cá & rau củ: Xương cá rửa sạch với nước muối gừng, nướng sơ trên lửa cho thơm rồi cho vào túi vải ninh cùng su hào trong 35 phút, vớt bọt liên tục để nước trong vắt.",
        "Xào tạo màu & vị thanh: Xào cà chua, thơm (dứa) và măng khô với chút dầu điều rồi trút vào nồi nước dùng.",
        "Nấu rau củ giữ độ bùi: Cho bí đỏ và bắp cải vào nấu đến khi vừa chín mềm, tạo vị ngọt tự nhiên không cần lạm dụng gia vị công nghiệp.",
        "Điểm hương mắm ruốc: Hòa tan mắm ruốc với nước lạnh, để lắng cặn rồi chắt phần nước trong vào nồi nước lèo, nêm lại nước mắm ngon cho dậy hương biển cả.",
        "Hoàn thiện tô bún: Trụng bún nóng, xếp lát chả cá chiên vàng và chả cá hấp ngọt dịu lên trên, rắc hành lá, rau răm và dọn kèm chén hành tím ngâm ớt tỏi."
      ],
      chefSecret: "Đầu bếp Đà Nẵng luôn nướng sơ xương cá và vài củ hành tím trước khi ninh. Kỹ thuật này giúp nước dùng trong veo, thơm dịu và hoàn toàn không bị tanh kể cả khi để nguội.",
      sourceName: "Cẩm nang Ẩm thực Đà Nẵng",
      sourceUrl: "https://danangfantasticity.com"
    },
    {
      id: "food-banh-trang-thit-heo",
      name: "Bánh Tráng Cuốn Thịt Heo Hai Đầu Da & Nghệ Thuật Pha Mắm Nêm",
      category: "Món Cuốn & Gỏi Biển",
      prepTime: "25 phút",
      cookTime: "30 phút",
      difficulty: "Dễ Thực Hiện",
      baseServings: 4,
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=900&q=80",
      summary: "Lát thịt heo luộc khéo léo giữ trọn hai đầu mỡ trong veo ở hai bên phần nạc mềm ngọt, cuốn cùng bánh tráng phơi sương, mì lá và đĩa rau sống tươi xanh chấm mắm nêm dậy vị.",
      story: "Món ăn tôn vinh sự tinh tế trong cách chọn nguyên liệu tươi và nghệ thuật cân bằng âm dương: vị béo ngọt của thịt heo hòa cùng vị chát nhẹ của chuối chát, vị chua thanh của xoài và hương thơm nồng nàn của bát mắm nêm cá cơm.",
      ingredients: [
        { item: "Thịt mông heo (chọn khổ thịt tạo được 2 đầu da)", amount: 600, unit: "g" },
        { item: "Bánh tráng Đại Lộc & Bánh ướt (mì lá) tươi", amount: 400, unit: "g" },
        { item: "Mắm nêm cá cơm nguyên chất Đà Nẵng", amount: 150, unit: "ml" },
        { item: "Thơm (dứa) chín băm nhuyễn", amount: 120, unit: "g" },
        { item: "Tỏi, ớt sừng, sả băm nhuyễn", amount: 50, unit: "g" },
        { item: "Dưa leo, chuối chát, xoài xanh thái lát dài", amount: 350, unit: "g" },
        { item: "Rau sống tổng hợp (xà lách, tía tô, diếp cá, húng quế)", amount: 400, unit: "g" }
      ],
      steps: [
        "Kỹ thuật bó và luộc thịt hai đầu da: Chọn phần thịt mông có lớp mỡ và da dày đều, cuộn nhẹ cố định hai đầu rồi luộc từ nước ấm cùng gừng và hành tím ở mức lửa vừa trong 25 phút.",
        "Bí quyết giữ lớp mỡ trong giòn: Khi thịt vừa chín tới, vớt ngay ra ngâm vào tô nước đá lạnh 5 phút rồi để ráo, thái lát mỏng đều tay để lộ hai phần da mỡ trong veo ở hai đầu.",
        "Nghệ thuật pha Mắm Nêm linh hồn: Phi thơm một nửa lượng sả tỏi với chút dầu, cho mắm nêm và chút nước sôi cùng đường vào đun sôi nhẹ 2 phút rồi để nguội.",
        "Hoàn thiện chén chấm: Khi mắm nêm nguội, trộn thơm (dứa) băm nhuyễn, phần tỏi ớt tươi còn lại và vài giọt cốt chanh vào khuấy đều.",
        "Thưởng thức: Trải bánh tráng, đặt lớp mì lá mềm lên trên, xếp rau sống, chuối chát, dưa leo và lát thịt hai đầu da rồi cuộn chặt tay."
      ],
      chefSecret: "Đừng pha mắm nêm sống trực tiếp: việc chưng ấm mắm nêm với chút sả phi trước khi trộn dứa tươi băm nhuyễn sẽ làm dịu vị mặn gắt, giúp mắm sánh mịn và thơm dịu thanh tao.",
      sourceName: "Cổng Thông tin Du lịch Đà Nẵng",
      sourceUrl: "https://danangfantasticity.com"
    },
    {
      id: "food-goi-ca-nam-o",
      name: "Gỏi Cá Nam Ô — Tinh Hoa Làng Chài Chân Đèo Hải Vân",
      category: "Món Cuốn & Gỏi Biển",
      prepTime: "45 phút",
      cookTime: "15 phút",
      difficulty: "Kỹ Thuật Đầu Bếp Cao",
      baseServings: 4,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
      summary: "Đặc sản trứ danh của làng chài cổ Nam Ô chế biến từ cá trích tươi rói vừa đánh bắt buổi sớm, xử lý khéo léo bằng gừng, riềng, tỏi và áo lớp thính gạo rang vàng thơm phức.",
      story: "Gỏi cá Nam Ô gồm hai phiên bản: Gỏi khô (bọc thính giòn thơm) và Gỏi ướt (đậm vị nước cốt riềng tỏi). Món ăn thể hiện tri thức dân gian sâu sắc của ngư dân Đà Nẵng trong việc chế biến hải sản tươi sống.",
      ingredients: [
        { item: "Cá trích tươi xanh (vừa đánh bắt buổi sáng)", amount: 600, unit: "g" },
        { item: "Riềng già và gừng tươi giã nhuyễn vắt lấy nước", amount: 100, unit: "g" },
        { item: "Tỏi ta và ớt hiểm giã nhuyễn", amount: 50, unit: "g" },
        { item: "Thính gạo và mè rang xay mịn", amount: 120, unit: "g" },
        { item: "Nước mắm nhĩ Nam Ô nguyên chất", amount: 80, unit: "ml" },
        { item: "Đậu phụng rang giã nhỏ (nấu nước chấm)", amount: 80, unit: "g" },
        { item: "Rau rừng & đọt non (đinh lăng, lá cóc, lá trâm, xoài...)", amount: 400, unit: "g" }
      ],
      steps: [
        "Phi lê cá chuẩn kỹ thuật: Cá trích đánh vảy, cắt đầu, đuôi, bụng, lóc bỏ xương sống lấy hai miếng phi lê, thái lát vừa ăn. Tuyệt đối hạn chế rửa lại bằng nước lã sau khi thái để cá không bị tanh.",
        "Ép ráo và làm chín sinh học: Bóp nhẹ cá với chút muối hạt, giấm gạo (hoặc cốt chanh) rồi cho vào khăn sạch vắt thật ráo phần nước tiết ra.",
        "Ướp cốt riềng gừng: Trộn thịt cá đã ráo với nước cốt riềng, gừng, tỏi, ớt và chút nước mắm Nam Ô trong 15 phút cho thớ cá săn trắng và thơm nồng.",
        "Áo thính vàng (Gỏi khô): Rắc từ từ thính gạo rang và mè rang vào trộn đều tay để từng lát cá khô ráo, tơi đều.",
        "Pha nước chấm bùi béo: Phần nước ép cá ban đầu đun sôi kỹ cùng nước mắm Nam Ô, tương ớt, bột năng, khi dọn ăn rắc thật nhiều đậu phụng rang và mè trắng."
      ],
      chefSecret: "Khâu ép ráo nước trong thớ cá bằng khăn vải mùng và ướp nước cốt riềng già chính là chìa khóa giúp miếng cá trích săn chắc, ngọt lịm và thơm lừng mùi thảo mộc.",
      sourceName: "Cổng TTĐT TP. Đà Nẵng",
      sourceUrl: "https://danang.gov.vn"
    },
    {
      id: "food-banh-xeo-nem-lui",
      name: "Bánh Xèo Tôm Nhảy Giòn Rụm & Nước Lèo Đậu Phộng",
      category: "Món Nóng Truyền Thống",
      prepTime: "30 phút",
      cookTime: "30 phút",
      difficulty: "Chuẩn Đầu Bếp Gia Đình",
      baseServings: 4,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
      summary: "Chiếc bánh xèo miền Trung cỡ vừa bằng lòng bàn tay, vành bánh mỏng giòn rụm, nhân tôm đất tươi ngọt và giá đỗ, chấm ngập trong bát nước lèo gan heo đậu phộng sánh đặc.",
      story: "Nếu bánh xèo miền Tây rộng bản và chấm nước mắm chua ngọt, thì bánh xèo Đà Nẵng gây thương nhớ bởi độ giòn tan của lớp vỏ bột gạo xay và bát nước lèo nóng hổi béo bùi vị đậu phộng và mè.",
      ingredients: [
        { item: "Bột gạo xay (pha chút bột nghệ và bột chiên giòn)", amount: 400, unit: "g" },
        { item: "Tôm đất tươi (rửa sạch, giữ vỏ mỏng)", amount: 300, unit: "g" },
        { item: "Thịt ba chỉ thái lát mỏng", amount: 250, unit: "g" },
        { item: "Giá đỗ tươi và hành lá cắt khúc", amount: 250, unit: "g" },
        { item: "Gan heo & thịt băm (nấu nước lèo chấm)", amount: 150, unit: "g" },
        { item: "Đậu phộng xay nhuyễn & tương đậu nành", amount: 120, unit: "g" },
        { item: "Bánh tráng mỏng, rau cải xanh, xoài, dưa leo", amount: 400, unit: "g" }
      ],
      steps: [
        "Pha bột bánh xèo giòn lâu: Hòa bột gạo với nước ấm, chút nước cốt dừa loãng, bột nghệ, muối và 50ml bia (giúp vỏ bánh xốp giòn lâu), để bột nghỉ 20 phút.",
        "Nấu nước lèo đặc trưng: Xào thơm hành tỏi, cho thịt băm, gan heo xay, tương đậu nành và đậu phộng xay nhuyễn vào nấu với nước dùng cho sánh mịn, nêm vị mặn ngọt hài hòa.",
        "Đổ bánh trên khuôn gang nóng: Làm nóng chảo gang với dầu phụng, cho vài lát thịt ba chỉ và tôm đất vào đảo chín đỏ.",
        "Tráng vỏ mỏng giòn: Khuấy đều thau bột, múc 1 vá tráng tròn đều khắp mặt chảo nghe tiếng 'xèo' vui tai. Bỏ giá đỗ vào giữa, đậy nắp 1 phút rồi mở nắp rưới nhẹ dầu quanh viền cho vành bánh vàng giòn, gập đôi bánh lại.",
        "Thưởng thức: Cuốn bánh xèo nóng giòn trong bánh tráng mỏng cùng rau cải cay, xoài chua và chấm đẫm nước lèo đậu phộng."
      ],
      chefSecret: "Chảo đúc bánh phải thật nóng trước khi múc bột vào, và khi mở nắp phải đợi hơi nước bay hết mới gập bánh — như vậy bánh sẽ giữ được độ giòn tan suốt bữa ăn.",
      sourceName: "Cẩm nang Ẩm thực Đà Nẵng",
      sourceUrl: "https://danangfantasticity.com"
    },
    {
      id: "food-ca-nuc-hap",
      name: "Cá Nục Hấp Cuốn Bánh Tráng Rau Muống Biển",
      category: "Món Cuốn & Gỏi Biển",
      prepTime: "20 phút",
      cookTime: "20 phút",
      difficulty: "Dễ Thực Hiện",
      baseServings: 4,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
      summary: "Món ăn thanh đạm, giàu dinh dưỡng của người dân phố biển: những con cá nục suôn tươi xanh hấp cùng hành tím, ớt xanh và cà chua, cuốn bánh tráng với rau muống chẻ giòn mát.",
      story: "Vào mùa cá nục tháng 3 đến tháng 8 âm lịch, không căn bếp nào ở Đà Nẵng thiếu hương thơm của xửng cá nục hấp. Món ăn giữ trọn vị ngọt nguyên bản của biển khơi, cực kỳ tốt cho sức khỏe và người tập luyện thể thao.",
      ingredients: [
        { item: "Cá nục suôn tươi (mắt trong, mang đỏ)", amount: 800, unit: "g" },
        { item: "Hành tím củ, đầu hành lá và ớt xanh xứ Quảng", amount: 100, unit: "g" },
        { item: "Cà chua và thơm (dứa) thái lát", amount: 200, unit: "g" },
        { item: "Rau muống cọng giòn và rau thơm các loại", amount: 400, unit: "g" },
        { item: "Nước mắm nhĩ nguyên chất, tỏi ớt chanh", amount: 80, unit: "ml" },
        { item: "Bánh tráng cuốn Đại Lộc", amount: 200, unit: "g" }
      ],
      steps: [
        "Sơ chế cá giữ độ ngọt: Cá nục làm sạch ruột, rửa qua nước muối loãng, khứa nhẹ hai đường trên thân cá để thấm gia vị.",
        "Ướp gia vị mộc: Ướp cá với hành tím đập dập, ớt xanh, chút nước mắm ngon, tiêu xay và một thìa nhỏ dầu phụng trong 15 phút.",
        "Hấp cách thủy: Xếp lát thơm và cà chua dưới đáy đĩa sâu lòng, đặt cá nục lên trên rồi đem hấp cách thủy 15–18 phút cho đến khi cá chín thơm và tiết ra phần nước cốt ngọt lành.",
        "Pha nước mắm tỏi ớt: Giã nhuyễn tỏi và ớt xiêm xanh, pha cùng nước mắm nhĩ, chút đường và nước cốt chanh, có thể rưới thêm 2 thìa nước cá hấp nóng hổi.",
        "Trình bày: Dọn đĩa cá nục nóng nghi ngút khói kèm rổ rau muống non, rau sống và bánh tráng."
      ],
      chefSecret: "Lót một lớp thơm (dứa) tươi và đầu hành lá dưới đáy đĩa khi hấp giúp thịt cá nục mềm ngọt, thơm thanh và phần nước tiết ra dùng để chấm bánh tráng ngon tuyệt hảo.",
      sourceName: "Cổng Thông tin Du lịch Đà Nẵng",
      sourceUrl: "https://danangfantasticity.com"
    }
  ],

  // 7. DỮ LIỆU ALBUM ẢNH PHONG CẢNH & KÝ ỨC (12 TÁC PHẨM)
  gallery: [
    {
      id: "gal-1",
      title: "Bình Minh Trên Bãi Biển Mỹ Khê",
      category: "Bình minh & Chạy bộ",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      caption: "Khoảnh khắc mặt trời nhô lên từ đường chân trời lúc 05:20 sáng, nhuộm vàng làn sóng biển và cung đường chạy bộ Võ Nguyên Giáp.",
      cameraNote: "Góc chụp từ bãi tắm Phạm Văn Đồng hướng về phía bán đảo Sơn Trà."
    },
    {
      id: "gal-2",
      title: "Cầu Rồng Rực Sáng Đôi Bờ Hàn Giang",
      category: "Nhịp cầu & Sông Hàn",
      image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80",
      caption: "Biểu tượng kiến trúc của Đà Nẵng lung linh ánh đèn phản chiếu xuống mặt nước sông Hàn phẳng lặng.",
      cameraNote: "Chụp phơi sáng từ bờ đường Trần Hưng Đạo lúc 20:30."
    },
    {
      id: "gal-3",
      title: "Bước Chân Năng Lượng Dọc Bờ Biển Sáng Sớm",
      category: "Bình minh & Chạy bộ",
      image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1200&q=80",
      caption: "Không khí trong lành, tiếng sóng biển rì rào và hàng dừa xanh mát tiếp thêm nguồn cảm hứng tích cực cho ngày mới.",
      cameraNote: "Cung đường biển Hoàng Sa – Mân Thái lúc 05:45 sáng."
    },
    {
      id: "gal-4",
      title: "Cầu Vàng Giữa Lưng Chừng Mây Bà Nà",
      category: "Thiên nhiên & Di sản",
      image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80",
      caption: "Kiệt tác kiến trúc vắt ngang bầu trời trên đỉnh Núi Chúa ở độ cao hơn 1.400m.",
      cameraNote: "Khung giờ sương sớm 07:30 tại Sun World Ba Na Hills."
    },
    {
      id: "gal-5",
      title: "Hoài Niệm Bến Sông & Nhịp Đò Xưa",
      category: "Đà Nẵng Xưa",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
      caption: "Vẻ đẹp trầm mặc, bình yên của những bến thuyền miền Trung trong ký ức thời gian.",
      cameraNote: "Tư liệu màu sắc hoài cổ gợi nhớ thương cảng Tourane xưa."
    },
    {
      id: "gal-6",
      title: "Cổ Viện Chàm Bên Hoa Sứ Trắng",
      category: "Đà Nẵng Xưa",
      image: "https://images.unsplash.com/photo-1599708153386-62bf3f035c78?auto=format&fit=crop&w=1200&q=80",
      caption: "Kiến trúc hơn 100 năm tuổi của Bảo tàng Điêu khắc Chăm lưu giữ hồn cốt văn hóa cổ.",
      cameraNote: "Góc sân vườn cổ kính tại số 02 đường 2 Tháng 9."
    },
    {
      id: "gal-7",
      title: "Bán Đảo Sơn Trà Nhìn Từ Trên Cao",
      category: "Thiên nhiên & Di sản",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      caption: "Rừng nguyên sinh xanh thẳm ôm lấy những bãi đá và làn nước biển trong vắt như ngọc bích.",
      cameraNote: "Cung đường đèo ven biển bán đảo Sơn Trà."
    },
    {
      id: "gal-8",
      title: "Cầu Đi Bộ Nguyễn Văn Trỗi Buổi Hoàng Hôn",
      category: "Nhịp cầu & Sông Hàn",
      image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80",
      caption: "Cây cầu giàn thép Poni lâu đời nhất bắc qua sông Hàn — điểm hẹn dạo bộ và chạy bộ đầy chất thơ.",
      cameraNote: "Ánh nắng chiều lúc 17:15 nhuộm vàng nhịp cầu thép."
    }
  ],

  // 8. NGUỒN TƯ LIỆU ĐỐI CHIẾU CHÍNH THỐNG
  officialSources: [
    {
      name: "Cổng Thông tin Điện tử Thành phố Đà Nẵng",
      url: "https://danang.gov.vn",
      desc: "Nguồn tra cứu chính thức về lịch sử hình thành đô thị, địa giới hành chính, các cây cầu và di tích cấp thành phố/quốc gia."
    },
    {
      name: "Cổng Thông tin Du lịch Đà Nẵng — Danang FantastiCity",
      url: "https://danangfantasticity.com",
      desc: "Nguồn dữ liệu danh thắng, bãi biển, lễ hội, bản đồ du lịch và văn hóa ẩm thực đặc sản Đà Nẵng."
    },
    {
      name: "Bảo tàng Điêu khắc Chăm Đà Nẵng",
      url: "https://chammuseum.vn",
      desc: "Tư liệu lịch sử kiến trúc từ năm 1915 và thông tin xác thực về các Bảo vật Quốc gia văn hóa Champa."
    },
    {
      name: "Danh mục Di sản Văn hóa Phi vật thể Quốc gia",
      url: "https://bvhttdl.gov.vn",
      desc: "Tư liệu về Làng nghề đá mỹ nghệ Non Nước, Nghề làm nước mắm Nam Ô và Nghề làm Mì Quảng."
    }
  ]
};