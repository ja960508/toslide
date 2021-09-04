const tutorialSectionModeItems = document.querySelectorAll(
  '.tutorial-section__mode__items'
);
const selectLecturer = document.querySelector('#select_lecturer');
const selectStudent = document.querySelector('#select_student');
function loginToslide_lecturer() {
  {
    parent.document.getElementById('customBtn').click();
  }
}
function loginToslide_student() {
  parent.document.getElementById('customBtn_client').click();
}

/* 동영상 링크 정보 관리 */
var QA_LECTURER = [
  ['질의응답모드 둘러보기', 'https://www.youtube.com/embed/VpTYOgFSnjA'],
  ['사진', 'https://www.youtube.com/embed/y93iEaIEJ8I'],
  ['메시지', 'https://www.youtube.com/embed/XTKuXRrY56I'],
  ['투표', 'https://www.youtube.com/embed/NKxRIR04S7o'],
];
var QA_STUDENT = [
  ['스마트폰', 'https://www.youtube.com/embed/INBWrN7IHmM'],
  ['메시지 보내기', 'https://www.youtube.com/embed/EEJ4t-6kZAQ'],
  ['사진 보내기', 'https://www.youtube.com/embed/eoOKlnZ_5bY'],
  ['투표하기', 'https://www.youtube.com/embed/7ACu9HUd3wM'],
];
var LEC_LECTURER = [
  ['강의모드 활용하기', 'https://www.youtube.com/embed/J36MZnVBMMI'],
];
var LEC_STUDENT = [
  ['강의모드 활용하기', 'https://www.youtube.com/embed/xnEtWFwrrLA'],
];
var TEST_LECTURER = [
  ['온라인시험 준비하기', 'https://www.youtube.com/embed/yN6Sz-kvf58'],
  ['온라인시험 실시하기', 'https://www.youtube.com/embed/NzNg7CwpAa4'],
];
var TEST_STUDENT = [
  ['온라인시험 사용법', 'https://www.youtube.com/embed/WMG6vE4JGaw'],
];

// english
var QA_LECTURER_eng = [
  ['Q&A Preview', 'https://www.youtube.com/embed/jQhnP-ZUVXg'],
  ['Photos', 'https://www.youtube.com/embed/whXT6MZrXYQ'],
  ['Messages', 'https://www.youtube.com/embed/R7wA71X9JeE'],
  ['Voting', 'https://www.youtube.com/embed/7hkfDatWo9M'],
];
var QA_STUDENT_eng = [
  ['SmartPhone', 'https://www.youtube.com/embed/INBWrN7IHmM'],
  ['Photos', 'https://www.youtube.com/embed/kgMZk94DKek'],
  ['Messages', 'https://www.youtube.com/embed/sOnB3u1PTmE'],
  ['Voting', 'https://www.youtube.com/embed/W3L-Na149rs'],
];
var LEC_LECTURER_eng = [
  ['How to Use Online Class', 'https://www.youtube.com/embed/KnBu3fOFRYM'],
];
var LEC_STUDENT_eng = [
  ['How To Use Online Class', 'https://www.youtube.com/embed/JAX9v8-ZL_I'],
];
var TEST_LECTURER_eng = [
  ['How To Prepare Online Exams', 'https://www.youtube.com/embed/u9fdxYgktug'],
  [
    'How To Administer Online Exams',
    'https://www.youtube.com/embed/E4SXan2ua5E',
  ],
];
var TEST_STUDENT_eng = [
  ['How To Use Online Exams', 'https://www.youtube.com/embed/ClrEH6xK5u8'],
];

function getLanguageMode() {
  const activeMode = document.querySelector('.active');

  return activeMode.innerText;
}

function selectTutorialContent(target) {
  let selectedContent;

  tutorialSectionModeItems.forEach((item) => {
    if (item.classList.contains('selected')) {
      selectedContent = item;
    }
  });

  if (target.classList.contains('selected')) return;

  if (target === selectLecturer) {
    selectStudent.classList.remove('selected');
  } else {
    selectLecturer.classList.remove('selected');
  }

  target.classList.add('selected');
  getTutorialImageContent(selectedContent, target);
}
/* Add for videos */
function addVideoBox(videoList) {
  for (videoInfo of videoList) {
    if (videoInfo === undefined) continue;
    const div = document.createElement('div');
    div.className = 'video-box';
    div.innerHTML =
      `
      <figcaption class="toslide-font-very-large-bold">` +
      videoInfo[0] +
      `</figcaption>
      <iframe src="` +
      videoInfo[1] +
      `"frameborder="0" allowfullscreen class="video">
      </iframe>
    `;
    document.getElementById('tutorial-videos').appendChild(div);
  }
}
function removeRow() {
  const videos = document.getElementById('tutorial-videos');
  videos.innerHTML = '';
}
function getTutorialImageContent(
  target,
  selectedJoiner = selectLecturer.classList.contains('selected')
    ? selectLecturer
    : selectStudent
) {
  const languageMode = getLanguageMode();
  const imgContent = document.querySelector('#tutorial_img_content');
  const joinerMode = document.querySelector('.joiner-mode');
  removeRow();
  if (languageMode === '한국어') {
    switch (target.textContent) {
      case tutorialSectionModeItems[0].innerText:
        imgContent.src = './images/tutorial_toslide_intro.jpg';
        !joinerMode.classList.contains('d-none') &&
          joinerMode.classList.add('d-none');
        break;
      case tutorialSectionModeItems[1].innerText:
        // 탭 공통 영역
        imgContent.src = './images/qa_benefit.jpg';
        // 탭 개별 영역
        if (selectedJoiner === selectLecturer) {
          addVideoBox(QA_LECTURER);

          // Additional image
          const div = document.createElement('div');
          div.className = 'video-box';
          div.innerHTML = `
          <figcaption>질의응답 모바일 컨트롤</figcaption>
          <img src="./images/qa_control.jpg" class="video" height="100%" />
          `;
          document.getElementById('tutorial-videos').appendChild(div);
        } else {
          addVideoBox(QA_STUDENT);
        }

        joinerMode.classList.contains('d-none') &&
          joinerMode.classList.remove('d-none');
        break;
      case tutorialSectionModeItems[3].innerText:
        // 탭 공통 영역
        imgContent.src = './images/lecture_benefit.jpg';
        // 탭 개별 영역
        if (selectedJoiner === selectLecturer) {
          addVideoBox(LEC_LECTURER);
        } else {
          addVideoBox(LEC_STUDENT);
        }

        joinerMode.classList.contains('d-none') &&
          joinerMode.classList.remove('d-none');
        break;
      case tutorialSectionModeItems[2].innerText:
        // 탭 공통 영역
        imgContent.src = './images/test_benefit.jpg';
        // 탭 개별 영역
        if (selectedJoiner === selectLecturer) {
          addVideoBox(TEST_LECTURER);
        } else {
          addVideoBox(TEST_STUDENT);
        }

        joinerMode.classList.contains('d-none') &&
          joinerMode.classList.remove('d-none');
        break;
    }
  } else {
    switch (target.textContent) {
      case tutorialSectionModeItems[0].innerText:
        imgContent.src = './images/eng_image/tutorial_toslide_intro.jpg';
        !joinerMode.classList.contains('d-none') &&
          joinerMode.classList.add('d-none');
        break;
      case tutorialSectionModeItems[1].innerText:
        // 탭 공통 영역
        imgContent.src = './images/eng_image/qa_benefit.jpg';
        // 탭 개별 영역
        if (selectedJoiner === selectLecturer) {
          addVideoBox(QA_LECTURER_eng);
          // Additional image
          const div = document.createElement('div');
          div.className = 'video-box';
          div.innerHTML = `
          <figcaption>QnA Mobile Control</figcaption>
          <img src="./images/qa_control.jpg" class="video" height="100%" />
          `;
          document.getElementById('tutorial-videos').appendChild(div);
        } else {
          addVideoBox(QA_STUDENT_eng);
        }

        joinerMode.classList.contains('d-none') &&
          joinerMode.classList.remove('d-none');
        break;
      case tutorialSectionModeItems[3].innerText:
        // 탭 공통 영역
        imgContent.src = './images/eng_image/lecture_benefit.jpg';
        // 탭 개별 영역
        if (selectedJoiner === selectLecturer) {
          addVideoBox(LEC_LECTURER_eng);
        } else {
          addVideoBox(LEC_STUDENT_eng);
        }

        joinerMode.classList.contains('d-none') &&
          joinerMode.classList.remove('d-none');
        break;
      case tutorialSectionModeItems[2].innerText:
        // 탭 공통 영역
        imgContent.src = './images/eng_image/test_benefit.jpg';
        // 탭 개별 영역
        if (selectedJoiner === selectLecturer) {
          addVideoBox(TEST_LECTURER_eng);
        } else {
          addVideoBox(TEST_STUDENT_eng);
        }

        joinerMode.classList.contains('d-none') &&
          joinerMode.classList.remove('d-none');
        break;
    }
  }
}

function tutorialModeSelect(target) {
  const itemList = document.querySelectorAll('.tutorial-section__mode__items');
  itemList.forEach((data) => {
    data.classList.contains('selected') && data.classList.remove('selected');
    target === data && target.classList.add('selected');
  });

  getTutorialImageContent(target);
}

function is_mobile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  }

  if (typeof window.orientation !== 'undefined') {
    return true;
  }

  let iOSios =
    !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  if (iOSios) return true;

  return false;
}

window.onload = function () {
  const wrappper = document.querySelector('.wrap');
  console.log('toslide_main loaded');
  if (parent.is_mobile()) {
    document.getElementById('bg_img').src = './images/homepage_m_bg.png';
    wrappper.classList.add('mobile');
  } else {
    document.getElementById('bg_img').src = './images/toslide_background.png';
  }

  var current_web_region = navigator.language;

  if (current_web_region.indexOf('ko') != -1) {
    document.querySelector('.translate__korean').click();
  } else {
    document.querySelector('.translate__english').click();
  }
};
