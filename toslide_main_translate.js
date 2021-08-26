function textTranslate(target) {
  const mode = target.innerText;
  const korean = document.querySelector('.translate__korean');
  const english = document.querySelector('.translate__english');
  const bgImg = document.querySelector('#bg_img');
  const toslideLogoSlogan = document.querySelector('#toslide_logo_slogan');
  const domArray = [
    document.querySelector('#lbutton'),
    document.querySelector('#sbutton'),
    document.querySelector('#toslide_intro'),
    document.querySelector('#toslide_qna'),
    document.querySelector('#toslide_online_lecture'),
    document.querySelector('#toslide_online_test'),
    document.querySelector('#select_lecturer'),
    document.querySelector('#select_student'),
  ];

  const koreanText = [
    '강사로 참여하기',
    '학생으로 참여하기',
    '투슬라이드 소개',
    'Q&A (문자/사진)',
    '파일 공유 온라인 강의',
    '부정행위 예방 온라인 시험',
    '강사',
    '학생',
  ];
  const engText = [
    'Join as a Lecturer',
    'Join as a Student',
    'Introduction',
    'Q&A (Text or Photo)',
    'File Share Online Class',
    'Synchronous Online Exam',
    'Lecturer',
    'Student',
  ];
  console.log(mode);
  switch (mode) {
    case '한국어':
      if (!korean.classList.contains('active')) {
        translate(domArray, koreanText);
        english.classList.remove('active');
        korean.classList.add('active');
        toslideLogoSlogan.src = './images/toslide_logo_slogan.png';
        if (parent.is_mobile() && false) {
          document.getElementById('bg_img').src = './images/homepage_m_bg.jpg';
        } else {
          document.getElementById('bg_img').src =
            './images/toslide_background.png';
        }
        tutorialModeSelect(document.querySelector('.selected'));
      }
      break;
    case 'English':
      console.log(english.classList.contains('active'));
      if (!english.classList.contains('active')) {
        translate(domArray, engText);
        korean.classList.remove('active');
        english.classList.add('active');
        toslideLogoSlogan.src = './images/eng_image/toslide_logo_slogan.png';
        tutorialModeSelect(document.querySelector('.selected'));
      } else {
        translate(domArray, engText);
        korean.classList.remove('active');
        english.classList.add('active');
        tutorialModeSelect(document.querySelector('.selected'));
      }
      break;
  }
}

function translate(domArray, textContent) {
  for (let i = 0; i < domArray.length; i++) {
    domArray[i].innerText = textContent[i];
  }
}
