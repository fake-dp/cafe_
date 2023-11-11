// 컨텐츠를 동적으로 로드하는 페이지 라우터입니다.
document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const initialContent = document.querySelector(".initial-content"); // 기존 콘텐츠를 감싸는 요소 선택

  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", (event) => {
      const page = event.currentTarget.getAttribute("data-page");

      if (page) {
        // 기존 콘텐츠 숨김
        initialContent.style.display = "none";

        fetch(`./${page}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
          })
          .then((html) => {
            content.innerHTML = html;
          })
          .catch((e) => {
            console.log("Error loading the page: ", e);
          });
      } else {
        // 메인 페이지로 돌아가면 기존 콘텐츠 보임
        initialContent.style.display = "block";
        content.innerHTML = "";
      }
    });
  });
});
