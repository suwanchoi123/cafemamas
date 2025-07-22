$(function () {
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

  // 이용약관/개인정보처리방침 팝업
  function openModal(url) {
    $.get(url, function (data) {
      $('#modalBody').html(data);
      $('#modal').fadeIn(150);
    });
  }

  $('#openPopup').on('click', function (e) {
    e.preventDefault();
    openModal('terms.html');
  });

  $('#openPrivacy').on('click', function (e) {
    e.preventDefault();
    openModal('privacy.html');
  });

  $('#modalClose').on('click', function () {
    $('#modal').fadeOut();
  });

  $('#modal').on('click', function (e) {
    if ($(e.target).is('#modal')) {
      $('#modal').fadeOut();
    }
  });
});
