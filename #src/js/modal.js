const CLASS_LIST = {
   MODAL: "modal",
   MODAL_ACTIVE: "modal--active",
   MODAL_HAS_SCROLL: "modal--has-scroll",
   MODAL_DIALOG_BODY: "modal__dialog-body",
   TRIGGER_OPEN: "modal__open",
   TRIGGER_CLOSE: "modal__close",
};

const paddingOffset = window.innerWidth - document.body.offsetWidth;

const hideScroll = () => {
   document.body.style.paddingRight = `${paddingOffset}px`;

   // to display correctly in Safari
   let pagePosition = window.scrollY;
   document.body.classList.add("disable-scroll");
   document.body.style.top = -pagePosition + "px";
   document.body.dataset.position = pagePosition;
};

const showScroll = (event) => {
   if (event.propertyName === "transform") {
      document.body.style.paddingRight = "";

      // to display correctly in Safari
      let pagePosition = parseInt(document.body.dataset.position, 10);
      document.body.classList.remove("disable-scroll");
      document.body.style.top = "auto";
      window.scroll({ top: pagePosition, left: 0 });
      document.body.removeAttribute("data-position");

      event.target
         .closest(`.${CLASS_LIST.MODAL}`)
         .removeEventListener("transitionend", showScroll);
   }
};

document.addEventListener("click", (event) => {
   if (event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`)) {
      event.preventDefault();

      const target = event.target.closest(`.${CLASS_LIST.TRIGGER_OPEN}`);
      const modalId = target.getAttribute("href").replace("#", "");
      const modal = document.getElementById(modalId);

      hideScroll();

      modal.classList.add(CLASS_LIST.MODAL_ACTIVE);
   }

   if (
      event.target.closest(`.${CLASS_LIST.TRIGGER_CLOSE}`) ||
      event.target.classList.contains(CLASS_LIST.MODAL_ACTIVE)
   ) {
      event.preventDefault();

      const modal = event.target.closest(`.${CLASS_LIST.MODAL}`);
      modal.classList.remove(CLASS_LIST.MODAL_ACTIVE);
      modal.addEventListener("transitionend", showScroll);
   }
});

// Modal video

function OpenVideoModal(htmlId, htmlDataAttr) {
   const videoModalOpen = document.getElementById(htmlId);
   const videoUrl = videoModalOpen.getAttribute(htmlDataAttr);

   let frame;

   videoModalOpen.addEventListener("click", () => {
      frame = document.querySelector(".modal__video video");
      frame.src = videoUrl;
   });

   document.addEventListener("click", (event) => {
      if (
         event.target.closest(".modal__close--video") ||
         event.target.classList.contains("modal--video")
      ) {
         event.preventDefault();
         frame.src = " ";
      }
   });
}

const videoModalDialog = document.querySelector(".modal__dialog--video");

document.addEventListener("DOMContentLoaded", (event) => {
   event.preventDefault();
   OpenVideoModal("video-open", "data-video-url");

   // to display correctly in Safari
   const getVisible = () => {
      videoModalDialog.style.display = "block";
   };
   setTimeout(getVisible, 1000);
});
