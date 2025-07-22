$(function () {
  // 메뉴 열기
  $('#menuButton').on('click', function () {
    $('#headerNav').toggleClass('show');
    
  });
  

  // 아코디언 기능
  $('.accordion-header').on('click', function () {
    const $item = $(this).closest('.accordion-item');
    const isOpen = $item.hasClass('open');

    // 모든 아코디언 닫기
    $('.accordion-item').removeClass('open');
    $('.accordion-body').slideUp(300).css('max-height', '0');

    // 현재 클릭한 아이템만 열기
    if (!isOpen) {
      $item.addClass('open');
      const $body = $item.find('.accordion-body');
      $body.slideDown(300);
      $body.css('max-height', $body.prop('scrollHeight') + 'px');
    }
  });

  // 검색 함수
  function searchAccordion() {
    const keyword = $('.search-box input').val().trim().toLowerCase();

    // 빈 칸이면 모두 닫고 종료
    if (keyword === '') {
      $('.accordion-item').removeClass('open');
      $('.accordion-body').slideUp(300).css('max-height', '0');
      return;
    }

    let found = false;

    $('.accordion-item').each(function () {
      const title = $(this).find('.accordion-header .title').text().toLowerCase();
      const $body = $(this).find('.accordion-body');

      if (title.includes(keyword)) {
        $('.accordion-item').removeClass('open');
        $('.accordion-body').slideUp(300).css('max-height', '0');

        $(this).addClass('open');
        $body.slideDown(300);
        $body.css('max-height', $body.prop('scrollHeight') + 'px');

        found = true;
        return false; // 첫 번째만 열고 종료
      }
    });

    if (!found) {
      $('.accordion-item').removeClass('open');
      $('.accordion-body').slideUp(300).css('max-height', '0');
    }
  }

  // 검색 버튼 클릭 시
  $('.search-box button').on('click', function (e) {
    e.preventDefault();
    searchAccordion();
  });

  // Enter 키 입력 시 검색
  $('.search-box input').on('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      searchAccordion();
    }
  });

  // "공지사항" 제목 클릭 시 초기화
  $('#noticeTitle').on('click', function () {
    $('.accordion-item').removeClass('open');
    $('.accordion-body').slideUp(300).css('max-height', '0');
    $('.search-box input').val('');
  });

  // 배경 클릭 시 아코디언 닫기 (body 직접 클릭 제외)
  $(document).on('click', function (e) {
    const $target = $(e.target);

    if (
      !$target.closest('.accordion-item').length &&
      !$target.closest('.search-box').length &&
      !$target.closest('#noticeTitle').length &&
      !$target.closest('#menuButton').length &&
      !$target.closest('#headerNav').length &&
      !$target.is('body')
    ) {
      $('.accordion-item').removeClass('open');
      $('.accordion-body').slideUp(300).css('max-height', '0');
    }
  });
});