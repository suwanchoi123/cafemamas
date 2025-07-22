$(function () {
  // 헤더 로드
  $('#header').load('../components/header.html', function () {
    // 현재 페이지 경로 얻기
    const path = window.location.pathname.split('/').pop();

    // 기본값은 index.html
    let currentPage = path || 'index.html';

    // 네비게이션의 모든 링크 순회
    $('#headerNav a').each(function () {
      const href = $(this).attr('href');

      if (href === currentPage) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });

    // 메뉴 버튼
    $(document).on('click', '#menuButton', function () {
      $('#headerNav').stop().slideToggle(300);
    });
  });

  // 푸터 로드 + 팝업
  $('#footer').load('../components/footer.html', function () {
    $(document).on('click', '#openPopup', function (e) {
      e.preventDefault();
      $('#popup').css('display', 'flex');
    });

    $(document).on('click', '#closeBtn', function () {
      $('#popup').css('display', 'none');
    });

    $(document).on('click', '#openPrivacy', function (e) {
      e.preventDefault();
      $('#privacyPopup').css('display', 'flex');
    });

    $(document).on('click', '#closePrivacy', function () {
      $('#privacyPopup').css('display', 'none');
    });

    $(document).on('click', '.popup-overlay', function (e) {
      if ($(e.target).hasClass('popup-overlay')) {
        $(this).css('display', 'none');
      }
    });
  });
});
