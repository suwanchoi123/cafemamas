$(function(){
  const params = new URLSearchParams(window.location.search);
  const categoryFromUrl = params.get('category') || 'sandwich';

  // 초기 세팅
  $('.menu-grid').hide();
  $(`.menu-grid[data-category="${categoryFromUrl}"]`).show();

  $('.tab').removeClass('active');
  $(`.tab[data-category="${categoryFromUrl}"]`).addClass('active');

  // 메뉴 열기
  $('#menuButton').on('click', function(){
    $('#headerNav').toggleClass('show');
  });

  // 카테고리 탭 클릭 시
  $('.tab').on('click', function () {
    const category = $(this).data('category');

    $('.tab').removeClass('active');
    $(this).addClass('active');

    $('.menu-grid').hide();
    $(`.menu-grid[data-category="${category}"]`).show();
  });

  // 🚨 이 부분은 제거!
  // $('.menu-grid').hide();
  // $('.menu-grid[data-category="sandwich"]').show();





// 메뉴 정보 객체
const menuData = {
  menu1: {
    title: "마마스 샌드위치",
    subtitle: "Mama's Sandwich",
    desc: "부드러운 아보카도 스프레드와 담백한 햄, 고소한 삶은 달걀이 조화로운 맛. 아삭한 채소와 토마토가 어우러져 든든하고 깔끔한 브런치 샌드위치입니다.",
    image: "images/mamassand.png",
    icons: [
      { src: "images/avocado.png", label: "아보카도" },
      { src: "images/ham.png", label: "슬라이스 햄" },
      { src: "images/egg.png", label: "계란" },
      { src: "images/tomato.png", label: "토마토" }
    ]
  },
  menu2: {
    title: "루콜라 햄 치즈",
    subtitle: "Lucola ham cheese",
    desc: "향긋한 루꼴라와 아삭한 채소, 짭짤한 햄과 고소한 치즈가 어우러져 깔끔하고 산뜻한 맛. 신선한 토마토가 상큼함을 더합니다.",
    image: "images/sand.png",
    icons: [
      { src: "images/ham.png", label: "슬라이스 햄" },
      { src: "images/cheese.png", label: "체다 치즈" },
      { src: "images/tomato.png", label: "토마토" }
    ]
  },
  menu3: {
    title: "클럽 샌드위치",
    subtitle: "Club Sandwich",
    desc: "바삭한 베이컨, 담백한 닭고기, 고소한 치즈와 신선한 채소가 여러 겹 쌓인 푸짐한 맛. 클래식한 마요네즈 소스가 더해져 완벽한 풍미를 선사합니다.",
    image: "images/club_sand.png",
    icons: [
      { src: "images/bacon.png", label: "베이컨" },
      { src: "images/chicken.png", label: "닭가슴살" },
      { src: "images/cheese.png", label: "체다 치즈" },
      { src: "images/tomato.png", label: "토마토" }
    ]
  },
  menu4: {
    title: "더블치즈 파니니",
    subtitle: "Double cheese panini",
    desc: "세 가지 치즈의 진한 고소함과 꿀의 은은한 단맛이 어우러져 풍성하고 조화로운 맛. 깊고 짭짤한 풍미가 매력적입니다.",
    image: "images/double_panini.png",
    icons: [
      { src: "images/cheese.png", label: "치즈" },
      { src: "images/creamcheese.png", label: "크림치즈" },
      { src: "images/honey.png", label: "꿀" },
    ]
  },
  menu5: {
    title: "머쉬룸 파니니",
    subtitle: "Mushroom Panini",
    desc: "버섯의 깊은 향과 쫄깃한 식감, 트러플 오일의 고급스러운 풍미가 어우러진 촉촉하고 고소한 파니니. 치즈가 맛의 깊이를 더합니다.",
    image: "images/mushroom_panini.png",
    icons: [
      { src: "images/mushroom.png", label: "버섯" },
      { src: "images/oil2.png", label: "트러플 오일" },
      { src: "images/cheese.png", label: "치즈" },
    ]
  },
  menu6: {
    title: "모짜렐라 토마토 파니니",
    subtitle: "mozzarella tomato panini",
    desc: "신선한 토마토의 상큼함과 쫄깃한 모짜렐라 치즈가 어우러진 상큼 깔끔한 맛. 바질 페스토와 발사믹 글레이즈로 이탈리아의 풍미를 더했습니다.",
    image: "images/tomato_panini.png",
    icons: [
      { src: "images/cheese.png", label: "모짜렐라 치즈" },
      { src: "images/tomato.png", label: "토마토" },
      { src: "images/basil.png", label: "바질 페스토" },
    ]
  },
  menu7: {
    title: "소고기 가지 파니니",
    subtitle: "Beef eggplant panini",
    desc: "육즙 가득한 소고기와 부드러운 가지의 환상적인 조합. 고소한 치즈와 할라피뇨의 매콤함이 어우러져 다채로운 맛을 선사합니다.",
    image: "images/meat_panini.png",
    icons: [
      { src: "images/meat.png", label: "소고기" },
      { src: "images/gaji.png", label: "가지" },
      { src: "images/cheese.png", label: "치즈" },
      { src: "images/peno.png", label: "할라피뇨" },
    ]
  },
  side1: {
    title: "마마스 샐러드",
    subtitle: "Mamas salad",
    desc: "담백하게 구운 닭가슴살과 부드러운 리코타 치즈, 달콤한 단호박 퓨레가 어우러진 풍성한 샐러드. 견과류와 신선한 채소가 식감과 맛을 더해줍니다..",
    image: "images/mamas_salad.png",
    icons: [
      { src: "images/chicken.png", label: "닭가슴살" },
      { src: "images/ricotta.png", label: "리코타 치즈" },
      { src: "images/pumpkin.png", label: "단호박" },
      { src: "images/almond.png", label: "견과류" },
    ]
  },
  side2: {
    title: "단호박 샐러드",
    subtitle: "sweet pumpkin salad",
    desc: "부드럽고 달콤한 단호박과 신선한 채소가 어우러진 산뜻한 샐러드. 고소한 견과류가 식감을 더해 가볍고 건강한 맛을 선사합니다.",
    image: "images/pumpkin_salad.png",
    icons: [
      { src: "images/pumpkin.png", label: "단호박" },
      { src: "images/berry.png", label: "크렌베리" },
      { src: "images/almond.png", label: "아몬드" },
      { src: "images/salad.png", label: "샐러드" },
    ]
  },
  side3: {
    title: "라코타치즈 샐러드",
    subtitle: "Lakota Cheese Salad",
    desc: "부드럽고 담백한 리코타 치즈와 신선한 채소의 조화가 돋보이는 샐러드. 꿀의 은은한 단맛과 견과류의 고소함이 풍미를 더해줍니다.",
    image: "images/ricotta_salad.png",
    icons: [
      {  src: "images/ricotta.png", label: "리코타 치즈"  },
      { src: "images/honey.png", label: "꿀"  },
      { src: "images/nut.png", label: "호두" },
      { src: "images/salad.png", label: "샐러드" },
    ]
  },
  side4: {
    title: "감자 스프",
    subtitle: "Potato Soup",
    desc: "부드럽고 진한 감자의 풍미가 가득한 크리미한 스프. 고소함과 짭짤함이 조화를 이루어 속을 따뜻하게 채워줍니다.",
    image: "images/potato_soup.png",
    icons: [
      {  src: "images/potato.png", label: "감자"  },
      { src: "images/milk.png", label: "우유"  },
      { src: "images/cream.png", label: "생크림" },
    ]
  },
  side5: {
    title: "단호박 스프",
    subtitle: "sweet pumpkin soup",
    desc: "단호박 본연의 은은한 단맛과 부드러운 목 넘김이 일품인 스프. 따뜻하고 편안한 맛으로 남녀노소 누구나 즐기기 좋습니다.",
    image: "images/pumpkin_soup.png",
    icons: [
      { src: "images/pumpkin.png", label: "단호박" },
      { src: "images/milk.png", label: "우유"  },
      { src: "images/cream.png", label: "생크림" },
      { src: "images/cinnamon.png", label: "시나몬" }
    ]
  },
  side6: {
    title: "컬리 스프",
    subtitle: "Curly Soup",
    desc: "단호박 본연의 은은한 단맛과 부드러운 목 넘김이 일품인 스프. 따뜻하고 편안한 맛으로 남녀노소 누구나 즐기기 좋습니다.",
    image: "images/broccoli_soup.png",
    icons: [
      { src: "images/broccoli.png", label: "브로콜리" },
      { src: "images/milk.png", label: "우유"  },
      { src: "images/cream.png", label: "생크림" },
      { src: "images/cheese.png", label: "체다 치즈"  }
    ]
  },
  coffee1: {
    title: "아메리카노",
    subtitle: "Americano",
    desc: "아메리카노의 깊은 향과 쓴맛을 깔끔하고 향기로운 커피 본연의 풍미를 즐길 수 있습니다.",
    image: "images/hot_coffee.png",
    icons: [
      { src: "images/coffee.png", label: "브라질 원두" },
    ]
  },
  coffee2: {
    title: "아이스 아메리카노",
    subtitle: "ice Americano",
    desc: "아메리카노의 시원하고 깔끔한 맛. 얼음과 차가운 물이 만나 더욱 청량하게 즐길 수 있는 대표적인 아이스 커피입니다.",
    image: "images/icecoffee.png",
    icons: [
      { src: "images/coffee.png", label: "브라질 원두" },
    ]
  },
   coffee3: {
    title: "카페 라떼",
    subtitle: "Café latte",
    desc: "따뜻한 스팀 우유의 부드러움과 에스프레소의 고소함이 절묘하게 어우러진 맛. 풍부한 우유 거품이 포근함을 더하는 클래식 커피입니다.",
    image: "images/hot_latte.png",
    icons: [
      { src: "images/coffee.png", label: "브라질 원두" },
      { src: "images/milk.png", label: "우유" }
    ]
  },
  coffee4: {
    title: "아이스 카페 라떼",
    subtitle: "ice Café latte",
    desc: "부드러운 우유와 진한 에스프레소의 고소함이 조화롭게 어우러진 시원한 커피. 달콤하면서도 부드러운 목 넘김이 매력적입니다.",
    image: "images/icelatte.png",
    icons: [
      { src: "images/coffee.png", label: "브라질 원두" },
      { src: "images/milk.png", label: "우유" }
    ]
  },
  beverage1: {
    title: "꿀 케일 바나나 주스",
    subtitle: "Honey kale banana juice",
    desc: "케일의 신선함과 바나나의 달콤함이 꿀로 부드럽게 조화된 맛. 건강하면서도 마시기 편한 그린 주스로 활력을 채워줍니다.",
    image: "images/Kalebananajuice.png",
    icons: [
      { src: "images/banana.png", label: "바나나" },
      { src: "images/honey.png", label: "꿀" },
      { src: "images/kale.png", label: "케일" }
    ]
  },
  beverage2: {
    title: "꿀 호두 바나나 주스",
    subtitle: "Honey walnut banana juice",
    desc: "바나나의 부드러운 달콤함에 고소한 호두와 꿀이 더해져 풍성한 맛. 든든함과 영양을 동시에 챙길 수 있는 주스입니다.",
    image: "images/nutjuice.png",
    icons: [
      { src: "images/banana.png", label: "바나나" },
      { src: "images/honey.png", label: "꿀" },
      { src: "images/nut.png", label: "호두"  }
    ]
  },
  beverage3: {
    title: "케일 청포도 주스",
    subtitle: "kale green grape juice",
    desc: "케일의 상큼함과 청포도의 시원한 단맛이 어우러진 깔끔한 맛. 부담 없이 즐길 수 있는 산뜻하고 건강한 그린 주스입니다.",
    image: "images/grapejuice.png",
    icons: [
      { src: "images/kale.png", label: "케일" },
      { src: "images/grape.png", label: "청포도" },
    ]
  },
  beverage4: {
    title: "레몬티",
    subtitle: "lemon tea",
    desc: "상큼한 레몬의 향과 맛이 따뜻한 차와 어우러져 깔끔하고 개운한 맛. 비타민 C가 풍부하여 활력을 주고 편안함을 선사합니다.",
    image: "images/lemon_tea.png",
    icons: [
      { src: "images/lemon.png", label: "레몬" },
      { src: "images/honey.png", label: "꿀" },
    ]
  },
  beverage5: {
    title: "밀크티",
    subtitle: "milk tea",
    desc: "진하게 우려낸 홍차에 부드러운 우유와 달콤함이 더해져 고소하고 크리미한 맛. 풍성한 바디감과 부드러운 목 넘김이 매력적입니다.",
    image: "images/milk_tea.png",
    icons: [
      { src: "images/tea.png", label: "홍차" },
      { src: "images/milk.png", label: "우유" },
      { src: "images/syrup.png", label: "시럽" },
    ]
  },
  beverage6: {
    title: "스미스티",
    subtitle: "Smith tea",
    desc: "엄선된 찻잎이 선사하는 깊고 섬세한 풍미가 일품인 프리미엄 티.",
    image: "images/smith_tea.png",
    icons: [
      { src: "images/tea.png", label: "찻잎" },
    ]
  },
};

// 팝업 요소들
const popup = document.getElementById("menuPopup");
const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupSubtitle = document.getElementById("popupSubtitle");
const popupDesc = document.getElementById("popupDesc");
const popupIcons = document.getElementById("popupIcons");
const closeBtn = document.querySelector(".popup-close");

// 메뉴 카드 클릭 시 팝업 열기
document.querySelectorAll(".menu-card").forEach(card => {
  card.addEventListener("click", () => {
    const id = card.getAttribute("data-id");
    const data = menuData[id];
    if (!data) return;

    // 콘텐츠 채우기
    popupImage.src = data.image;
    popupTitle.textContent = data.title;
    popupSubtitle.textContent = data.subtitle;
    popupDesc.textContent = data.desc;

    // 아이콘 생성
    popupIcons.innerHTML = "";
    data.icons.forEach(icon => {
  const iconDiv = document.createElement("div");
  iconDiv.className = "popup-icon";
  iconDiv.innerHTML = `
    <div class="icon-img">
      <img src="${icon.src}" alt="${icon.label}">
    </div>
    <div class="icon-label">${icon.label}</div>
  `;
  popupIcons.appendChild(iconDiv);
    });

    popup.style.display = "flex";
  });
});

  // 팝업 닫기
  $('.popup-close').on('click', function () {
    $('#menuPopup').fadeOut();
  });

  // 초기 세팅

    const setResponsivePopup = () => {
    const vw = window.innerWidth;
    if (vw <= 480) {
      document.querySelector('.popup-inner').style.flexDirection = 'column';
      document.querySelector('.popup-img').style.maxWidth = '100%';
      document.querySelector('.popup-img').style.maxHeight = '250px';
      document.querySelector('.popup-info').style.padding = '20px 0';
      document.querySelector('.popup-close').style.padding = '10px 40px';
      document.querySelector('.popup-close').style.fontSize = '15px';
    } else {
      document.querySelector('.popup-inner').style.flexDirection = 'row';
      document.querySelector('.popup-img').style.maxWidth = '410px';
      document.querySelector('.popup-img').style.maxHeight = '410px';
      document.querySelector('.popup-info').style.padding = '20px 0px';
      document.querySelector('.popup-close').style.padding = '13px 100px';
      document.querySelector('.popup-close').style.fontSize = '17px';
    }
  };

  setResponsivePopup();
  window.addEventListener('resize', setResponsivePopup);
});



